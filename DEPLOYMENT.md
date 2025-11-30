# Deployment Guide

## Quick Deploy Instructions

### Prerequisites
- Node.js 20+
- pnpm 8+
- GitHub account (for GitHub Pages)
- OR Netlify/Vercel account

---

## GitHub Pages Deployment

### Step 1: Update Base Path

Edit `vite.config.ts` and set the base path to your repo name:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Change this!
  // ...
})
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**

### Step 3: Push to Main Branch

```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

The GitHub Actions workflow will automatically:
- Install dependencies
- Run tests
- Build the site
- Deploy to GitHub Pages

**Your site will be live at:** `https://yourusername.github.io/your-repo-name/`

### Required Secrets

**None!** The workflow uses `GITHUB_TOKEN` which is automatically provided by GitHub.

---

## Netlify Deployment

### Option 1: Using Netlify UI

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Import on Netlify**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repo

3. **Auto-detected Settings**
   - Build command: `pnpm build`
   - Publish directory: `dist`
   - (These are configured in `netlify.toml`)

4. **Deploy!**
   - Click "Deploy site"
   - Your site will be live at a Netlify subdomain

### Option 2: Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

---

## Vercel Deployment

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Import on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

3. **Auto-detected Settings**
   - Framework Preset: Vite
   - Build Command: `pnpm build`
   - Output Directory: `dist`

4. **Deploy!**
   - Vercel will automatically deploy on every push

---

## Manual Deployment (Any Static Host)

Build the site:

```bash
pnpm build
```

Upload the contents of the `dist/` folder to your static hosting provider:
- AWS S3 + CloudFront
- DigitalOcean Spaces
- Cloudflare Pages
- Firebase Hosting
- Any static file server

---

## Environment Variables

This site doesn't require environment variables. All configuration is in:
- `src/components/Header.tsx` - Calendly link
- `src/components/Footer.tsx` - Social media links
- Case study JSON files

---

## Custom Domain

### GitHub Pages

1. Add a `CNAME` file to `public/`:
   ```bash
   echo "yoursite.com" > public/CNAME
   ```

2. Configure DNS:
   - Add a CNAME record pointing to `yourusername.github.io`
   - OR add A records to GitHub's IPs

3. Enable custom domain in repo Settings → Pages

### Netlify

1. Go to Site Settings → Domain management
2. Add custom domain
3. Follow DNS instructions

### Vercel

1. Go to Project Settings → Domains
2. Add custom domain
3. Configure DNS as instructed

---

## Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml dist
pnpm install
pnpm build
```

### Tests Fail

```bash
# Run tests locally
pnpm test
```

### Broken Links After Deploy

- Check the `base` path in `vite.config.ts`
- Ensure it matches your deployment path

### Images Not Loading

- Verify screenshot files exist in `public/assets/screenshots/`
- Check paths in case study JSON files
- Images should start with `/assets/...` (not `./assets/...`)

---

## Performance Optimization

After deployment, test with Lighthouse:

```bash
# Install Lighthouse CI
npm install -g @lhci/cli

# Run audit on your deployed URL
lhci autorun --collect.url=https://yoursite.com
```

**Target scores:**
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

---

## Monitoring

### GitHub Pages

- Check Actions tab for deployment status
- View deployment logs for errors

### Netlify

- Dashboard shows deploy status and logs
- Automatic preview deploys for PRs

### Vercel

- Dashboard shows all deployments
- Preview URLs for every commit

---

## Update Site Content

1. Edit JSON files in `src/data/`
2. Replace screenshots in `public/assets/screenshots/`
3. Commit and push:
   ```bash
   git add .
   git commit -m "Update case studies"
   git push
   ```

4. Site automatically rebuilds and deploys

---

## Rollback

### GitHub Pages

```bash
# Revert to previous commit
git revert HEAD
git push
```

### Netlify/Vercel

- Use the dashboard to rollback to a previous deployment
- One-click rollback available

---

## Support

If deployment fails:
1. Check build logs for errors
2. Verify Node.js version is 20+
3. Ensure all dependencies installed
4. Run `pnpm build` locally first
5. Open an issue on GitHub with error details
