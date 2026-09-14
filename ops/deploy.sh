#!/usr/bin/env bash
set -Eeuo pipefail

commit_sha="${1:-}"
control_repo="/opt/totoro"
releases_root="/opt/totoro-releases"
active_link="/opt/totoro-runtime/current"
service_name="totoro.service"

if [[ ! "$commit_sha" =~ ^[0-9a-f]{40}$ ]]; then
  echo "Expected a full 40-character Git commit SHA." >&2
  exit 2
fi

mkdir -p "$releases_root" "$HOME/bin"
exec 9>"$HOME/.totoro-deploy.lock"
if ! flock -n 9; then
  echo "Another production deployment is already running." >&2
  exit 3
fi

echo "Fetching origin/main..."
git -C "$control_repo" fetch --prune origin main
git -C "$control_repo" cat-file -e "${commit_sha}^{commit}"
if ! git -C "$control_repo" merge-base --is-ancestor "$commit_sha" origin/main; then
  echo "Refusing to deploy a commit that is not reachable from origin/main." >&2
  exit 4
fi

release_dir="$releases_root/$commit_sha"
if [[ -e "$release_dir" ]]; then
  git -C "$control_repo" worktree remove --force "$release_dir" 2>/dev/null || true
fi
if [[ -e "$release_dir" ]]; then
  echo "Could not clear the existing release directory: $release_dir" >&2
  exit 5
fi

git -C "$control_repo" worktree prune
git -C "$control_repo" worktree add --detach "$release_dir" "$commit_sha"

echo "Installing dependencies and building $commit_sha..."
cd "$release_dir"
pnpm install --frozen-lockfile
pnpm build

previous_release="$(readlink -f "$active_link" 2>/dev/null || true)"
rollback_release() {
  if [[ -n "$previous_release" && -d "$previous_release" ]]; then
    rollback_link="${active_link}.rollback.$$"
    ln -s "$previous_release" "$rollback_link"
    mv -Tf "$rollback_link" "$active_link"
    sudo /usr/bin/systemctl restart "$service_name"
    echo "Rolled back to $previous_release" >&2
  fi
}

next_link="${active_link}.next.$$"
ln -s "$release_dir" "$next_link"
mv -Tf "$next_link" "$active_link"
if ! sudo /usr/bin/systemctl restart "$service_name"; then
  echo "The new release could not be started." >&2
  rollback_release
  exit 6
fi

healthy=false
for _ in {1..20}; do
  if curl -fsS --max-time 5 http://127.0.0.1:3000/ >/dev/null; then
    healthy=true
    break
  fi
  sleep 2
done

if [[ "$healthy" != true ]]; then
  echo "The new release failed its health check." >&2
  rollback_release
  exit 7
fi

runner_temp="$HOME/bin/.totoro-deploy.$$"
install -m 750 "$release_dir/ops/deploy.sh" "$runner_temp"
mv -f "$runner_temp" "$HOME/bin/totoro-deploy"

while IFS= read -r old_release; do
  [[ "$old_release" == "$releases_root/"* ]] || continue
  git -C "$control_repo" worktree remove --force "$old_release" || true
done < <(
  find "$releases_root" -mindepth 1 -maxdepth 1 -type d -printf '%T@ %p\n' \
    | sort -nr \
    | tail -n +4 \
    | cut -d' ' -f2-
)
git -C "$control_repo" worktree prune

echo "Deployment succeeded: $commit_sha"
