# Deploy revaya-site to Vercel (production = preview)

## 1. Vercel project settings

In [Vercel → your project → Settings → General](https://vercel.com/revaya-hosts-projects/revaya-site/settings):

- **Root Directory:** `revaya-site` (no trailing slash)
- **Framework Preset:** Vite (or leave blank; `vercel.json` sets it)
- **Build Command:** leave empty so `vercel.json` is used (`npm run build`)
- **Output Directory:** leave empty so `vercel.json` is used (`dist`)
- **Install Command:** leave empty so `vercel.json` is used (`npm install`)

Do **not** override Build or Output in the dashboard unless you have a reason; this repo’s `vercel.json` already sets them.

## 2. Redeploy with a clean build

1. In Vercel, open your project → **Deployments**.
2. Click the **⋯** on the latest deployment → **Redeploy**.
3. Check **“Redeploy with existing Build Cache”** **off** (clear cache).
4. Click **Redeploy**.

## 3. Check the build log

After the redeploy, open that deployment → **Building** / build log. You should see:

- `npm install` (or your install command)
- `npm run build` / `vite build`
- Output in `dist` (e.g. `dist/index.html`, `dist/assets/...`, `dist/styles/...`)

If you see `echo 'Static site - no build needed'` or output directory `.`, the wrong config is being used.

## 4. Deploy from CLI (optional)

From the **repo root** (one level above `revaya-site`):

```bash
cd "/Users/jolysestultz/Library/CloudStorage/OneDrive-RevayaHospitalityGroup/Revaya Hospitality Group/7. Company Website/New Company Website WIP"
npx vercel --prod
```

Do **not** run `vercel` from inside `revaya-site` when Root Directory is `revaya-site`, or you’ll get a “path does not exist” error.

## 5. After deploy

Hard refresh the production URL (Cmd+Shift+R or Ctrl+Shift+R) or open it in an incognito window so you’re not seeing an old cached version.
