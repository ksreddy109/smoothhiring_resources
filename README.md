# SmoothHiring Resources

Monorepo for [resources.smoothhiring.com](https://resources.smoothhiring.com): the public Next.js site and a **Payload CMS** admin for SEO and copy (same pattern as `smoothhiring_website`).

## Structure

| App | Package | Port | Purpose |
|-----|---------|------|---------|
| `apps/resources` | `@smoothhiring/resources` | 3000 | Static Next.js site (templates, generators, programmatic SEO) |
| `apps/cms` | `@smoothhiring/resources-cms` | 3002 | Payload admin — edit titles, H1s, meta, body copy |

## Quick start

```bash
pnpm install

# Terminal 1 — CMS (Postgres required)
cp apps/cms/.env.example apps/cms/.env
# Edit DATABASE_URI and PAYLOAD_SECRET (32+ chars)
pnpm dev:cms
# Admin: http://localhost:3002/admin

# Terminal 2 — Resources site
cp apps/resources/.env.example apps/resources/.env
pnpm dev:resources
# Site: http://localhost:3000
```

Seed hub + programmatic pages into the CMS (with CMS running):

```bash
pnpm cms:seed
```

Build the static site (optionally point at CMS for published SEO overrides):

```bash
# apps/resources/.env
# PAYLOAD_API_URL=http://localhost:3002/api

pnpm build:resources
# Output: apps/resources/out
```

## Editing content

1. Sign in at **http://localhost:3002/admin** (create the first user on first visit).
2. Open **Resource Pages** — one entry per URL under `/resources/`.
3. Use the **SEO** tab (`@payloadcms/plugin-seo`) for meta title, description, and preview.
4. Set **H1** / **Subheadline** to override on-page headings without a code deploy.
5. **Rich text** body is optional; when empty, existing React templates still render.

Published CMS entries override defaults at **build time** when `PAYLOAD_API_URL` is set.

## Validate

```bash
pnpm install
pnpm verify   # build + type-check + lint (both apps)
```

## Deploy

Production build still deploys `apps/resources/out` to S3 (see `buildspec.production.yml` and `scripts/deploy-s3.sh`). CodeBuild should run `npm ci` / `npm run build` from `apps/resources` (or monorepo root with turbo).

CMS is deployed separately (Node server + Postgres), not to the static resources bucket.

## Related

- Main marketing site: `smoothhiring_website` (Astro + Payload CMS on port 3001)
- Legacy resources content lives in React constants under `apps/resources/src/Modules/Marketing/Resources/`
