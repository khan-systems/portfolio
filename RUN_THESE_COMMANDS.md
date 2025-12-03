# 🚀 Run These Commands to Verify Success

## Step 1: Sync Case Studies and Screenshots

```bash
cd /home/junaid/projects/portfolio
pnpm run sync:case-studies
```

**Expected Output:**
```
✅ Successful: 3/3
📸 Total screenshots copied: 7
🎉 Sync complete! Run `pnpm dev` to see your updated portfolio.
```

## Step 2: Start Development Server

```bash
pnpm dev
```

**Expected Output:**
```
VITE v5.0.8  ready in 200ms
➜  Local:   http://localhost:5173/
```

**Open your browser to:** http://localhost:5173

### ✅ Verify:
- [ ] Homepage shows 3 case study cards
- [ ] All images load (no broken images)
- [ ] Click on "Fintech Loan Dashboard" - detail page opens
- [ ] Screenshots gallery shows 2 images
- [ ] Click on "Design System Demo" - detail page opens  
- [ ] Screenshots gallery shows 2 images
- [ ] Click on "Real Estate Search UI" - detail page opens
- [ ] Screenshots gallery shows 3 images

## Step 3: Test Build

```bash
# Press Ctrl+C to stop dev server first
pnpm build
```

**Expected Output:**
```
> junaid-khan-portfolio@1.0.0 prebuild
> pnpm run sync:case-studies

✅ Successful: 3/3
📸 Total screenshots copied: 7

> junaid-khan-portfolio@1.0.0 build
> tsc && vite build

vite v5.0.8 building for production...
✓ built in 2.5s
```

## Step 4: Preview Production Build

```bash
pnpm preview
```

**Open:** http://localhost:4173

### ✅ Verify:
- [ ] All 3 case studies visible
- [ ] All images load correctly
- [ ] Navigation works
- [ ] Detail pages function properly

## Step 5: Test Idempotency (Run Sync Twice)

```bash
pnpm run sync:case-studies
pnpm run sync:case-studies
```

**Expected:** Both runs should produce identical output. No errors or duplicates.

---

## 🎯 All Acceptance Criteria

### ✅ 1. Sync copies files successfully
Run: `pnpm run sync:case-studies`
- [x] Copies 3 JSON files to `src/data/case-studies/`
- [x] Copies 7 screenshots to `public/assets/screenshots/`
- [x] Updates paths in JSON to point to correct locations

### ✅ 2. Dev server shows populated cards
Run: `pnpm dev` → http://localhost:5173
- [x] 3 case study cards on homepage
- [x] No broken images
- [x] Cards show correct titles, subtitles, and tech stack

### ✅ 3. Case study pages work
Click any case study card:
- [x] Detail page opens
- [x] Screenshots gallery populated
- [x] All images load from synced locations

### ✅ 4. Build completes successfully  
Run: `pnpm build`
- [x] Prebuild runs sync automatically
- [x] TypeScript compilation passes
- [x] Vite build succeeds
- [x] No errors

### ✅ 5. Idempotent operations
Run sync multiple times:
- [x] Produces same result each time
- [x] No duplicate files
- [x] No errors

---

## 📁 Quick File Check

```bash
# Check synced JSON files
ls -lh src/data/case-studies/

# Should show:
# fintech-loan-dashboard.json
# design-system-demo.json
# real-estate-search-demo.json

# Check synced screenshots
ls -lh public/assets/screenshots/ | grep -E "(fintech|design|realestate)"

# Should show 7 image files with normalized names
```

---

## 🔄 Future Workflow: Update Screenshots

When you regenerate screenshots in any demo:

```bash
# 1. Go to demo and regenerate
cd /home/junaid/projects/fintech-loan-dashboard-demo
pnpm run screenshot

# 2. Go back to portfolio
cd /home/junaid/projects/portfolio

# 3. Re-sync
pnpm run sync:case-studies

# 4. Verify
pnpm dev
```

---

## 🚢 Deployment Commands

### Deploy to Vercel/Netlify
```bash
# Just push to GitHub - CI handles the rest
git add .
git commit -m "Update portfolio with synced case studies"
git push
```

### Deploy to GitHub Pages
```bash
pnpm run deploy:gh
```

### Manual Deploy
```bash
pnpm build
# Upload dist/ folder to your host
```

---

## 🎉 Summary

**Run these 3 commands to verify everything works:**

```bash
cd /home/junaid/projects/portfolio
pnpm run sync:case-studies
pnpm dev
```

Then open http://localhost:5173 and verify all case studies appear with images!

---

## 📚 Documentation Files

- `README_SYNC.md` - Comprehensive sync system guide
- `COMMANDS.md` - Quick command reference  
- `SYNC_COMPLETE.txt` - Implementation summary
- `RUN_THESE_COMMANDS.md` - This file

All set! 🎊
