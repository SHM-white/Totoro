#!/usr/bin/env bash
set -Eeuo pipefail

original_command="${SSH_ORIGINAL_COMMAND:-}"
if [[ "$original_command" =~ ^deploy\ ([0-9a-f]{40})$ ]]; then
  exec "$HOME/bin/totoro-deploy" "${BASH_REMATCH[1]}"
fi

echo "This SSH key is restricted to production deployments." >&2
exit 64
