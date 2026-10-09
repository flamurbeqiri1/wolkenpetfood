# Wolken Pet Food

Marketing site for **Wolken Pet Food** — Next.js (App Router), TypeScript, Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Git branches & deployment

| Branch    | Purpose   | Typical URL (after DNS + Vercel)   |
| --------- | --------- | ---------------------------------- |
| `develop` | Staging   | `staging.wolkenpetfood.com`        |
| `main`    | Production | `wolkenpetfood.com` / `www`       |

Workflow:

1. Work on feature branches, merge into **`develop`**, push → staging updates automatically.
2. When ready for production, merge **`develop`** → **`main`**, push → production updates automatically.

### Connect Vercel to this repo (one-time)

1. [Import the GitHub repo in Vercel](https://vercel.com/new).
2. **Production Branch**: set to `main`.
3. **Domains**: add `wolkenpetfood.com` (production) and `staging.wolkenpetfood.com`.
4. In **Project → Settings → Domains**, assign `staging.wolkenpetfood.com` to the **`develop`** branch (Git Branch domain).
5. Point your domain registrar DNS to Vercel (nameservers or A/CNAME records Vercel shows you).

After that, every `git push` to `develop` or `main` deploys — no manual uploads.

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run start` — run production build locally
- `npm run lint` — ESLint
