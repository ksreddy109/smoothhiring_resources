#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
RES="$ROOT/apps/resources"
UI="${1:-$ROOT/../smooth_ui}"
BUCKET="${S3_RESOURCES_BUCKET:-smoothhiring-resources-production}"
DIST="${CLOUDFRONT_DISTRIBUTION_ID:-E2O2WRCWTC6KI6}"
export NEXT_PUBLIC_SITE_URL="${NEXT_PUBLIC_SITE_URL:-https://smoothhiring.com}"
# CMS optional — omit PAYLOAD_API_URL for registry-only static export
unset PAYLOAD_API_URL PAYLOAD_API_KEY 2>/dev/null || true

if [ ! -f "$UI/package.json" ]; then
  echo "smooth-ui not at $UI" >&2
  exit 1
fi
(
  cd "$UI"
  npm ci
  npm run build
)
(
  cd "$ROOT"
  corepack enable
  pnpm install --frozen-lockfile
  pnpm build:resources
)
if [ "${S3_SYNC_DELETE:-}" = "1" ] || [ "${S3_SYNC_DELETE:-}" = "true" ]; then
  aws s3 sync "$RES/out" "s3://${BUCKET}/" --delete
else
  aws s3 sync "$RES/out" "s3://${BUCKET}/"
fi
aws cloudfront create-invalidation --distribution-id "$DIST" --paths "/resources/*" "/*"
echo "Done. Bucket s3://${BUCKET} invalidation on ${DIST}"
