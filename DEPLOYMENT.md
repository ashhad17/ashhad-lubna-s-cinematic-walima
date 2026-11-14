# Production deployment

This project uses TanStack Start with server-side rendering. It is not a static
SPA, so do not configure a catch-all rewrite to `index.html` or deploy only the
`dist` directory.

## Requirements

- Node.js 24
- npm
- A public production URL, preferably a custom domain

## Configure the public URL

Set `VITE_SITE_URL` to the site's public origin before building or deploying,
for example `https://invitation.example.com`. This value is embedded at
build time and is used for the canonical URL and absolute Open Graph/Twitter
preview image URL. Without it, crawlers will not receive image or canonical URL
metadata.

## Deploy to Render

The root `render.yaml` defines a Render Node web service using Nitro's
`node-server` preset. In Render, create a Blueprint from this repository and
provide `VITE_SITE_URL` when prompted. Render builds with `npm ci && npm run
build` and starts the standalone SSR server with
`node .output/server/index.mjs`.

The Blueprint uses Render's free plan to avoid selecting a paid service without
your approval. Free web services can spin down when idle; choose a paid plan in
Render if you need always-on service.

Before deploying, run:

```bash
npm ci
npm run check
```

## Deploy to Cloudflare Workers

For Cloudflare, set `VITE_SITE_URL` and `NITRO_PRESET=cloudflare-module` in the
build environment, authenticate Wrangler, then run `npm run build` followed by
`npx nitro deploy --prebuilt`. Do not deploy `.output/public` as a static site.

## Verify after deployment

Open the deployed site over HTTPS and inspect the rendered page source for
`og:image`, `og:description`, `twitter:image`, and the canonical link. Social
networks cache previews; use their preview/debug tools to request a refresh
after updating metadata.
