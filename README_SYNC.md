# Case Studies Sync Guide

This portfolio automatically syncs case studies and screenshots from demo projects.

## Quick Start

```bash
# Sync case studies and screenshots from demo projects
pnpm run sync:case-studies

# Start dev server
pnpm dev

# Build (automatically runs sync before build)
pnpm build
```

## How It Works

The sync script (`scripts/sync-case-studies.js`) automatically:

1. **Copies case study JSON files** from each demo project to `src/data/case-studies/`
2. **Copies screenshot images** from each demo to `public/assets/screenshots/`
3. **Normalizes filenames** (lowercase, hyphenated, with project prefix)
4. **Updates JSON paths** to point to the correct screenshot locations
5. **Handles both `path` and `url` fields** in screenshot metadata

## Demo Project Structure

The sync script expects demo projects to follow this structure:

```
Projects/
├── fintech-loan-dashboard-demo/
│   ├── src/data/case-study.json
│   └── public/assets/screenshots/
│       ├── fintech-hero.png
│       └── fintech-table.png
├── design-system-demo/
│   ├── src/data/case-study.json
│   └── public/assets/screenshots/
│       ├── designsystem-hero.png
│       └── designsystem-button-grid.png
└── real-estate-search-demo/
    ├── src/data/case-study.json
    └── public/assets/screenshots/
        ├── realestate-search.png
        ├── realestate-mobile.png
        └── realestate-filters.png
```

## Regenerating Screenshots

When you update screenshots in a demo project:

1. **Generate new screenshots** in the demo project:
   ```bash
   cd ../fintech-loan-dashboard-demo
   pnpm run screenshot
   ```

2. **Re-sync to portfolio**:
   ```bash
   cd ../portfolio
   pnpm run sync:case-studies
   ```

3. **Verify the changes**:
   ```bash
   pnpm dev
   ```

The sync is **idempotent** - running it multiple times produces the same result.

## Configuration

Edit `scripts/sync-case-studies.js` to add/remove demo projects:

```js
const DEMOS = [
  { 
    id: 'fintech-loan-dashboard', 
    path: join(portfolioRoot, '..', 'fintech-loan-dashboard-demo'),
    displayName: 'Fintech Loan Dashboard'
  },
  // Add more demos here...
]
```

## CI/CD Integration

### Option 1: Manual Sync (Recommended for Local Development)

Run sync manually before deploying:

```bash
pnpm run sync:case-studies
pnpm build
```

### Option 2: Automatic Sync (Included)

The `prebuild` script automatically runs sync before every build:

```json
{
  "scripts": {
    "prebuild": "pnpm run sync:case-studies",
    "build": "tsc && vite build"
  }
}
```

### Option 3: GitHub Actions (Optional)

**Note**: This only works if demo repos are available in CI.

```yaml
# .github/workflows/deploy.yml
name: Deploy Portfolio

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      # Clone demo repos (if public)
      - name: Clone demo projects
        run: |
          cd ..
          git clone https://github.com/youruser/fintech-demo fintech-loan-dashboard-demo
          git clone https://github.com/youruser/design-system design-system-demo
          git clone https://github.com/youruser/real-estate real-estate-search-demo
      
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Sync case studies
        run: pnpm run sync:case-studies
      
      - name: Build
        run: pnpm build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

**For local-only demos**: Commit the synced files to git before pushing:

```bash
pnpm run sync:case-studies
git add src/data/case-studies/ public/assets/screenshots/
git commit -m "Update case studies and screenshots"
git push
```

## File Locations

After running sync:

- **Case study JSON files**: `src/data/case-studies/*.json`
- **Screenshot images**: `public/assets/screenshots/*.png`
- **Dynamic loader**: `src/data/index.ts`
- **TypeScript types**: `src/types/case-study.ts`

## Troubleshooting

### Sync script fails

Check that demo project paths are correct:

```bash
ls ../fintech-loan-dashboard-demo/src/data/case-study.json
ls ../design-system-demo/src/data/case-study.json
ls ../real-estate-search-demo/src/data/case-study.json
```

### Images not loading

1. Check that screenshots were copied:
   ```bash
   ls -lh public/assets/screenshots/
   ```

2. Check that JSON paths are correct:
   ```bash
   cat src/data/case-studies/fintech-loan-dashboard.json | grep "path"
   ```

3. Verify images exist at the paths specified in JSON

### Case studies not appearing

1. Check that JSON files exist:
   ```bash
   ls -lh src/data/case-studies/
   ```

2. Check browser console for import errors

3. Verify `src/data/index.ts` is importing correctly

## Schema

Case study JSON must follow this schema (defined in `src/types/case-study.ts`):

```typescript
interface CaseStudy {
  id: string
  title: string
  subtitle: string
  role: string
  duration: string
  stack: string[]
  problem: string
  solution: string
  outcomes: string[]
  techHighlights: string[]
  screenshots: Screenshot[]
  demoLink: string | null
  privateRepoInvite: string | null
}

interface Screenshot {
  path: string  // Must be '/assets/screenshots/filename.png'
  caption: string
  alt: string
}
```

## Best Practices

1. **Always sync before building**: The `prebuild` script handles this automatically
2. **Keep demo filenames consistent**: Use lowercase, hyphenated names
3. **Test locally**: Run `pnpm dev` after syncing to verify everything works
4. **Commit synced files**: If using CI without access to demo repos
5. **Re-sync after screenshot updates**: Any time you regenerate screenshots in demos

## Summary

The sync system provides:
- ✅ **Automatic integration** of demo projects into portfolio
- ✅ **No manual copying** of files
- ✅ **Consistent naming** and paths
- ✅ **Idempotent operations** (safe to run multiple times)
- ✅ **Type-safe** case study loading
- ✅ **Easy regeneration** of screenshots

Just run `pnpm run sync:case-studies` whenever you update demos!
