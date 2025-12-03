# Portfolio Commands Reference

## Quick Start (First Time Setup)

```bash
cd Projects/portfolio
pnpm install
pnpm run sync:case-studies
pnpm dev
```

Open http://localhost:5173 in your browser.

## Essential Commands

### Development

```bash
# Sync case studies from demo projects
pnpm run sync:case-studies

# Start development server
pnpm dev

# Format code
pnpm run format

# Lint code
pnpm run lint

# Run tests
pnpm test
```

### Building & Deployment

```bash
# Build for production (auto-runs sync first)
pnpm build

# Preview production build
pnpm preview

# Deploy to GitHub Pages
pnpm run deploy:gh
```

## Sync Workflow

### Update Screenshots in Demo

```bash
# 1. Go to demo project
cd ../fintech-loan-dashboard-demo

# 2. Regenerate screenshots
pnpm run screenshot

# 3. Go back to portfolio
cd ../portfolio

# 4. Sync the changes
pnpm run sync:case-studies

# 5. Verify
pnpm dev
```

### Add a New Demo Project

1. Edit `scripts/sync-case-studies.js`:
   ```js
   const DEMOS = [
     // ... existing demos ...
     { 
       id: 'new-project-id', 
       path: join(portfolioRoot, '..', 'new-project-folder'),
       displayName: 'New Project Name'
     }
   ]
   ```

2. Run sync:
   ```bash
   pnpm run sync:case-studies
   ```

3. Verify in browser:
   ```bash
   pnpm dev
   ```

## Deployment Workflow

### For Vercel/Netlify (Automatic)

Just push to main branch - CI will handle everything:

```bash
git add .
git commit -m "Update portfolio"
git push
```

The `prebuild` script automatically syncs before building.

### For GitHub Pages

```bash
pnpm run deploy:gh
```

### Manual Deployment

```bash
# 1. Sync case studies
pnpm run sync:case-studies

# 2. Build
pnpm build

# 3. Deploy dist/ folder to your host
```

## Common Issues

### Case studies not showing

```bash
# Check if files were synced
ls -lh src/data/case-studies/
ls -lh public/assets/screenshots/

# Re-run sync
pnpm run sync:case-studies

# Check for errors
pnpm dev
```

### Screenshots not loading

```bash
# Verify screenshot files exist
ls public/assets/screenshots/ | grep fintech

# Check JSON paths
cat src/data/case-studies/fintech-loan-dashboard.json | grep "path"

# Clear cache and restart
rm -rf node_modules/.vite
pnpm dev
```

### Build fails

```bash
# Check TypeScript errors
pnpm run build

# If sync fails, check demo paths
ls ../fintech-loan-dashboard-demo/src/data/case-study.json
ls ../design-system-demo/src/data/case-study.json
ls ../real-estate-search-demo/src/data/case-study.json
```

## Expected Output

### After Sync

```
✅ Successful: 3/3
📸 Total screenshots copied: 7
📁 Case studies: /path/to/portfolio/src/data/case-studies
📁 Screenshots: /path/to/portfolio/public/assets/screenshots
```

### After Build

```
vite v5.0.8 building for production...
✓ 120 modules transformed.
✓ built in 2.5s
```

## File Structure After Sync

```
portfolio/
├── src/
│   └── data/
│       └── case-studies/
│           ├── fintech-loan-dashboard.json
│           ├── design-system-demo.json
│           └── real-estate-search-demo.json
└── public/
    └── assets/
        └── screenshots/
            ├── fintech-loan-dashboard-fintech-hero.png
            ├── fintech-loan-dashboard-fintech-table.png
            ├── design-system-demo-designsystem-hero.png
            ├── design-system-demo-designsystem-button-grid.png
            ├── real-estate-search-demo-realestate-search.png
            ├── real-estate-search-demo-realestate-mobile.png
            └── real-estate-search-demo-realestate-filters.png
```

## Tips

- Always run `sync:case-studies` after updating demo screenshots
- The sync is idempotent - safe to run multiple times
- `prebuild` automatically syncs before building
- Test locally with `pnpm dev` before deploying
- Commit synced files if CI doesn't have access to demo repos

## Summary

Most common workflow:

```bash
# Day-to-day development
pnpm dev

# After updating demo screenshots
pnpm run sync:case-studies
pnpm dev

# Before deploying
pnpm build
```
