# Vitae CMS authentication Worker

This Worker lets Decap CMS authenticate with the GitHub repository through a GitHub OAuth App.

The authentication implementation is vendored unchanged from
[`sveltia-cms-auth`](https://github.com/sveltia/sveltia-cms-auth) commit
`5de9b9785fd4fb1a58776dc4912aaf252ddc5f3d` (MIT licence).

## Deployment

Run these commands from this directory:

```sh
npm ci
npx wrangler login
npm run deploy
```

The first deployment reveals the stable Worker URL. Create a GitHub OAuth App with:

- Homepage URL: `https://vitae.mrbt-software.com`
- Authorization callback URL: `<WORKER_URL>/callback`

Then add its credentials as encrypted Worker secrets and deploy again:

```sh
npx wrangler secret put GITHUB_CLIENT_ID
npx wrangler secret put GITHUB_CLIENT_SECRET
npm run deploy
```

Finally, replace the placeholder `base_url` in `static/admin/config.yml` with the Worker URL.

Do not commit OAuth credentials or place them in `wrangler.toml`.
