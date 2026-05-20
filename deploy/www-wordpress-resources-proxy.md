# smoothhiring.com + WordPress + /resources (path proxy)

> **Status (2026-05-20):** Apex DNS was **rolled back** to Flywheel (`151.101.2.159`) after a redirect loop. Do **not** point `smoothhiring.com` at distribution `E2O2WRCWTC6KI6` until the origin HTTPS issue below is resolved.

## Redirect loop (incident)

CloudFront used **HTTP** to Flywheel. Flywheel responds with `301 Location: https://smoothhiring.com/`. The browser was already on `https://smoothhiring.com/`, so it looped (“redirected you too many times”).

HTTPS to `origin.smoothhiring.com` fails CloudFront TLS validation (cert is for `smoothhiring.com`, SNI is `origin.smoothhiring.com` → **502**).

**Fix options before re-enabling DNS:**

1. Ask **Flywheel** for a CDN/origin hostname with valid TLS for edge proxy (recommended).
2. Use **Cloudflare** (or similar) in front of WordPress with a `/resources*` worker/proxy to the resources S3/CloudFront URL.
3. Keep **`resources.smoothhiring.com`** for the app (works today) and link from WordPress menus only.

---

WordPress (Flywheel) stays the default site. The Next.js resources app is served at **`https://smoothhiring.com/resources/`** via CloudFront path routing (when DNS is re-enabled).

## Architecture

| Component | Value |
|-----------|--------|
| CloudFront distribution | `E2O2WRCWTC6KI6` (`d2bdluyam2rf0m.cloudfront.net`) |
| WordPress origin | `origin.smoothhiring.com` → Flywheel IP (`151.101.2.159`) |
| Resources origin | `smoothhiring-resources-production` S3 website |
| Lambda@Edge | `www-wordpress-origin-host-edge:1` sets `Host: smoothhiring.com` on origin requests |
| Route 53 | `smoothhiring.com` A (alias) → CloudFront |
| `www.smoothhiring.com` | CNAME → `smoothhiring.com` (unchanged) |

### Cache behaviors (order)

1. `/_next*` → resources S3 (static assets)
2. `/resources*` → resources S3 (app + templates + programmatic SEO)
3. Default `*` → WordPress (Flywheel)

### Still on the old distribution (`E185ZBO2WGN7JH`)

- `resources.smoothhiring.com` (subdomain)
- `app.smoothhiring.com`, `ats.smoothhiring.com`, `*.smoothhiring.com` (wildcard)

Optional follow-up: 301 redirect `resources.smoothhiring.com` → `https://smoothhiring.com/resources/` on the old distribution or in Route 53.

## App build URL

Set production build to the main domain:

```bash
NEXT_PUBLIC_SITE_URL=https://smoothhiring.com
```

Redeploy resources after changing so canonicals and sitemap use `smoothhiring.com`.

## Files

- `deploy/create-www-cloudfront-distribution.json` — distribution template
- `deploy/lambda-edge-wordpress-host/` — Host header rewrite
- `deploy/cloudfront-origin-host-wordpress.js` — unused (CF Functions are viewer-only)

## Rollback DNS

Restore apex A record to Flywheel:

```bash
aws route53 change-resource-record-sets --hosted-zone-id ZIWGVQNQPNEDV --change-batch '{
  "Changes": [{
    "Action": "UPSERT",
    "ResourceRecordSet": {
      "Name": "smoothhiring.com",
      "Type": "A",
      "TTL": 300,
      "ResourceRecords": [{"Value": "151.101.2.159"}]
    }
  }]
}'
```
