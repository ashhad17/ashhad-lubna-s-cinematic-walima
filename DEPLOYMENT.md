# Production deployment

This project uses TanStack Start with server-side rendering. It is not a static
SPA, so do not configure a catch-all rewrite to `index.html` or deploy only the
`dist` directory.

## Requirements

- Node.js 24
- npm
- A public production URL, preferably a custom domain

## Configure the public URL

The Render Blueprint sets `VITE_SITE_URL` to the Render service's public URL.
If you use a custom domain or a different Render URL, update this value in
`render.yaml` (or in the Render service's build environment) and redeploy. It is
embedded at build time and is used for the canonical URL and absolute Open
Graph/Twitter preview image URL.

## Deploy to Render

The root `render.yaml` defines a Render Node web service using Nitro's
`node-server` preset. In Render, create a Blueprint from this repository.
Render builds with `npm ci && npm run build` and starts the standalone SSR server with
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
