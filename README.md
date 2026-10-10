# Wolken Pet Food

Marketing site for **Wolken Pet Food** — Next.js (App Router), TypeScript, Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Local dev server |
| `npm run build` | Production build |
| `npm run start` | Run production build locally |
| `npm run lint` | ESLint |

## Git branches & Hostinger deployment

Hosting: **[Hostinger Web Apps](https://www.hostinger.com/web-apps-hosting)** (Node.js / Next.js), not VPS.

Hostinger maps **one branch → one website**. Use two apps when you want staging + production.

| Branch | Environment | Domain | Status |
| ------ | ----------- | ------ | ------ |
| `main` | Production | `wolkenpetfood.com` | Active now |
| `develop` | Staging / preview | `dev.wolkenpetfood.com` (or `staging.…`) | Set up later |

> This repo uses **`main`**, not `master`. Always select `main` in Hostinger.

### Workflow

1. Day-to-day work on **`develop`** (or feature branches → merge into `develop`).
2. Push `develop` → staging subdomain updates (once that Hostinger app exists).
3. When ready: merge **`develop` → `main`**, push → production updates.

```bash
# Work on staging
git checkout develop
git push origin develop

# Ship to production
git checkout main
git merge develop
git push origin main
```

---

## Production setup (do this first)

**Goal:** `main` → `wolkenpetfood.com` with auto-deploy on push.

### Review build settings (Hostinger)

After selecting the GitHub repo `wolkenpetfood`, use:

| Field | Choose |
| ----- | ------ |
| Framework preset | **Next.js** |
| Branch | **main** |
| Node version | **22.x** |
| Root directory | **./** (leave default) |
| Build and output settings | **Default for Next.js** |
| Environment variables | **None** for now (add later if needed) |

Then click **Deploy** / continue.

### After the first deploy

1. Wait until the build succeeds in **Deployments**.
2. Open `https://wolkenpetfood.com` and confirm the site loads.
3. Keep auto-deploy enabled (default when connected via GitHub).
4. From then on: merge to `main` and `git push origin main` → production updates.

Optional later: set env vars under **Deployments → Deployment settings → Environment variables**.

---

## Staging / dev setup (later)

**Goal:** `develop` → `dev.wolkenpetfood.com` (separate Hostinger app).

1. In hPanel: **Websites → Add Website → Node.js web app**.
2. Create / assign subdomain: `dev.wolkenpetfood.com` (or `staging.wolkenpetfood.com`).
3. Import the **same** GitHub repo `wolkenpetfood`.
4. On **Review build settings**, use the same values as production **except**:

| Field | Choose |
| ----- | ------ |
| Branch | **develop** |
| Everything else | Same as production (Next.js, Node 22.x, `./`, Default for Next.js) |

5. Deploy. Push to `develop` updates only the subdomain; `main` stays production.

Use separate env vars on staging if you add secrets later (don’t reuse production keys unless intentional).

---

## Repo

- GitHub: [flamurbeqiri1/wolkenpetfood](https://github.com/flamurbeqiri1/wolkenpetfood)
