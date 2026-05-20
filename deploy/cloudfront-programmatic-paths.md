# CloudFront: programmatic SEO paths on resources.smoothhiring.com

Distribution `E185ZBO2WGN7JH` sends only these prefixes to the **resources** S3 bucket:

- `/_next*`
- `resources*`
- `robots.txt`
- `sitemap.xml`

The default origin is still the legacy React app (`smoothhiring-react-production`). Programmatic pages are built under **`/resources/{slug}/`** so they are served correctly without changing the distribution.

## Optional: root paths from CSV on this hostname

If you need `https://resources.smoothhiring.com/hiring-software-for-healthcare/` (no `/resources` prefix), add cache behaviors pointing to `smoothhiring-resources-origin`:

| Path pattern | Origin |
|--------------|--------|
| `hiring-software-for*` | smoothhiring-resources-origin |
| `ats-for*` | smoothhiring-resources-origin |

## www.smoothhiring.com (CSV canonical host)

CSV `url_path` values like `/hiring-software-for-healthcare/` target **www.smoothhiring.com**. Wire that domain (or path behaviors) to the same `smoothhiring-resources-production` bucket when marketing is ready to migrate off the legacy SPA.
