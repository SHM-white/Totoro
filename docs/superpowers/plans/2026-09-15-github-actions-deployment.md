# GitHub Actions Deployment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deploy every pushed `main` commit to the Tencent Cloud production server through GitHub Actions without interrupting the currently healthy release when a build fails.

**Architecture:** GitHub Actions authenticates with a dedicated Ed25519 key and invokes an unprivileged deployment script on the server. The script builds each commit in its own Git worktree, atomically changes `/opt/totoro-current`, restarts the systemd service, checks local HTTP health, and rolls the symlink back if the new process is unhealthy.

**Tech Stack:** GitHub Actions, OpenSSH, Bash, Git worktrees, pnpm, Next.js, systemd

**Spec:** User request in the Codex task on 2026-09-15: use GitHub Actions for automatic deployment after pushing to GitHub.

## Global Constraints

- Deploy only commits reachable from `origin/main`.
- Never store the server password in GitHub.
- Serialize deployments so two pushes cannot mutate the release directory concurrently.
- Do not restart the live service until dependency installation and `pnpm build` succeed.
- Roll back to the prior release when the post-restart health check fails.
- Keep only the three newest release worktrees.
- Grant the deployment account passwordless sudo only for restarting `totoro.service`.

---

### Task 1: Server-side release deployment script

**Files:**
- Create: `ops/deploy.sh`
- Create: `ops/deploy-ssh.sh`
- Test: `tests/deploy-script.test.js`

**Interfaces:**
- Consumes: one full 40-character Git commit SHA as `$1`; `/opt/totoro` as the control checkout; `/opt/totoro-current` as the active-release symlink.
- Produces: a built release at `/opt/totoro-releases/<sha>`, an atomically updated active symlink, and exit status `0` only after HTTP health succeeds.

- [ ] **Step 1: Write a static contract test**

Create a Node test that reads `ops/deploy.sh` and asserts strict Bash mode, SHA validation, an exclusive `flock`, `git merge-base --is-ancestor`, frozen pnpm installation, build-before-switch ordering, an atomic `mv -T`, health checks, rollback, and a three-release retention limit.

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test tests/deploy-script.test.js`

Expected: FAIL because `ops/deploy.sh` does not exist.

- [ ] **Step 3: Implement the deployment script**

The deployment script must validate `$1` with `^[0-9a-f]{40}$`, fetch `origin/main`, reject unreachable commits, create a detached worktree, run `pnpm install --frozen-lockfile` and `pnpm build`, atomically switch `/opt/totoro-current`, restart `totoro.service`, poll `http://127.0.0.1:3000/`, restore the prior symlink on failure, retain three releases, and atomically refresh `$HOME/bin/totoro-deploy` from the successfully deployed release. The SSH wrapper must reject every command except `deploy <40-character SHA>`.

- [ ] **Step 4: Run the deployment script contract test**

Run: `node --test tests/deploy-script.test.js`

Expected: PASS.

### Task 2: GitHub Actions production workflow

**Files:**
- Create: `.github/workflows/deploy.yml`
- Test: `tests/deploy-workflow.test.js`

**Interfaces:**
- Consumes: `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_SSH_KEY`, and `DEPLOY_KNOWN_HOSTS` repository secrets.
- Produces: one serialized production deployment for each push to `main`, plus manual `workflow_dispatch` support.

- [ ] **Step 1: Write a workflow contract test**

Create a Node test asserting the workflow uses `push` on `main`, `workflow_dispatch`, read-only contents permission, deployment concurrency, all four secrets, strict known-host verification, and `$GITHUB_SHA` as the deployed revision.

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test tests/deploy-workflow.test.js`

Expected: FAIL because `.github/workflows/deploy.yml` does not exist.

- [ ] **Step 3: Implement the workflow**

Use only shell commands on `ubuntu-latest`: create `~/.ssh`, install the secret key and pinned known-host entry with restrictive modes, and invoke `$HOME/bin/totoro-deploy "$GITHUB_SHA"` over SSH with batch mode and strict host-key checking.

- [ ] **Step 4: Run the workflow contract test**

Run: `node --test tests/deploy-workflow.test.js`

Expected: PASS.

### Task 3: Bootstrap production and GitHub secrets

**Files:**
- Modify on server: `/etc/systemd/system/totoro.service`
- Create on server: `/etc/sudoers.d/totoro-deploy`
- Create on server: `/home/ubuntu/bin/totoro-deploy` and `/home/ubuntu/bin/totoro-deploy-ssh`
- Create in GitHub: four Actions repository secrets listed in Task 2

**Interfaces:**
- Consumes: the repository files from Tasks 1 and 2 and a new dedicated Ed25519 keypair.
- Produces: a production service running from `/opt/totoro-current` and a GitHub runner able to deploy without a password.

- [ ] **Step 1: Generate a dedicated keypair and authorize only its public key on the server**

Generate an Ed25519 key without a passphrase for GitHub Actions, append its public key to `/home/ubuntu/.ssh/authorized_keys` with `restrict` and a forced `/home/ubuntu/bin/totoro-deploy-ssh` command, and keep the private key out of the repository.

- [ ] **Step 2: Install the deployment runner and least-privilege sudo rule**

Install `ops/deploy.sh` at `/home/ubuntu/bin/totoro-deploy`. Allow `ubuntu` to run only `/bin/systemctl restart totoro.service` without a password, then validate the rule with `visudo -cf`.

- [ ] **Step 3: Point systemd at the active-release symlink**

Create `/opt/totoro-current -> /opt/totoro`, change both `WorkingDirectory` and `ExecStart` to use `/opt/totoro-current`, reload systemd, restart the service, and verify local HTTP status `200`.

- [ ] **Step 4: Configure GitHub Actions secrets**

Use `gh secret set` so the private key, server host, server user, and exact verified Ed25519 known-host line are never committed.

### Task 4: Publish and end-to-end verification

**Files:**
- Modify: `README.md`

**Interfaces:**
- Consumes: the bootstrapped server and GitHub workflow.
- Produces: documented operations and a successful GitHub Actions run for the published commit.

- [ ] **Step 1: Document deployment and log inspection**

Document the `main` trigger, manual workflow entry point, required secret names, rollback behavior, and `journalctl -u totoro -f` command without including secret values.

- [ ] **Step 2: Run local verification**

Run: `pnpm test && pnpm lint && pnpm build`

Expected: all commands exit `0`.

- [ ] **Step 3: Commit and push the implementation**

Commit the workflow, deployment script, tests, plan, and README, then push `main` to `origin` so GitHub Actions triggers.

- [ ] **Step 4: Verify the Actions run and production**

Wait for the workflow to finish, confirm its conclusion is `success`, confirm `/opt/totoro-current` resolves to the pushed SHA, confirm `totoro.service` is active, and confirm `https://nuaatotoro.xyz/` returns HTTP `200`.
