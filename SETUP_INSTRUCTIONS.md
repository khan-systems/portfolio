# Setup Instructions

**Complete setup guide for the Junaid Khan Portfolio site**

---

## 📋 Prerequisites

Before you begin, ensure you have:

- **Node.js 20+** installed ([Download](https://nodejs.org/))
- **pnpm 8+** installed (`npm install -g pnpm`)
- A code editor (VS Code recommended)
- Git installed

---

## 🚀 Quick Start (5 minutes)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
pnpm install
```

Expected output:
```
Packages: +222
✓ Installation complete
```

### 3. Start Development Server

```bash
pnpm dev
```

Expected output:
```
VITE v5.0.8  ready in 345 ms
➜  Local:   http://localhost:5173/
```

### 4. Open in Browser

Navigate to: `http://localhost:5173`

You should see:
- Hero section with gradient background
- Metrics banner
- Three case study cards
- How I Work section
- Testimonials
- Contact form
- Footer

---

## ✅ Verify Installation

Run these commands to verify everything works:

```bash
# Run tests (should pass all 10 tests)
pnpm test

# Build for production (should complete without errors)
pnpm build

# Preview production build
pnpm preview
```

**Expected test output:**
```
Test Files  3 passed (3)
Tests  10 passed (10)
```

**Expected build output:**
```
✓ built in 1.38s
dist/index.html                   0.70 kB
dist/assets/index-xxx.css         14.88 kB │ gzip: 3.52 kB
dist/assets/index-xxx.js         191.83 kB │ gzip: 62.09 kB
```

---

## 📝 Customization Steps

### Step 1: Update Personal Information

**Header (`src/components/Header.tsx`):**
- Line 2: Replace Calendly link with your booking URL
- Line 3: Update mailto email address

**Footer (`src/components/Footer.tsx`):**
- Lines 47-75: Update social media URLs
- Replace `junaidkhan` with your usernames

### Step 2: Replace Case Studies

**Option A: Edit Existing Case Studies**

Edit the JSON files in `src/data/case-studies/`:
- `fintech-loan-dashboard.json`
- `design-system-core.json`
- `real-estate-search-ui.json`

**Option B: Add New Case Studies**

1. Create new JSON file: `src/data/case-studies/your-project.json`
2. Add screenshots to `public/assets/screenshots/`
3. Import in `src/pages/HomePage.tsx`:
   ```typescript
   import yourProjectData from '../data/case-studies/your-project.json'
   ```
4. Add to `caseStudies` array

### Step 3: Replace Screenshots

**Current screenshots are placeholders!**

Replace all files in `public/assets/screenshots/` with actual project images:
- Use PNG format
- Minimum 1200x800px resolution
- Compress for web (use tools like TinyPNG)
- Ensure no client PII or sensitive data

**Screenshot naming:**
- Match the paths in your case study JSON files
- Use descriptive names: `project-name-description.png`

### Step 4: Update Testimonials

Edit `src/data/meta.json`:
```json
{
  "testimonials": [
    {
      "name": "Client Name",
      "role": "Title",
      "company": "Company",
      "quote": "Testimonial text"
    }
  ]
}
```

### Step 5: Customize Colors (Optional)

Edit `tailwind.config.cjs` to change the primary color:
```javascript
colors: {
  primary: {
    50: '#your-color',
    // ... etc
  }
}
```

---

## 🧪 Testing Your Changes

After making changes:

```bash
# Check for TypeScript errors
pnpm build

# Run tests
pnpm test

# Lint code
pnpm lint

# Format code
pnpm format
```

---

## 🔧 Development Tips

### Hot Module Replacement (HMR)

Changes to files automatically reload in the browser:
- `.tsx` files: Instant reload
- `.css` files: Instant style update
- JSON files: Requires manual refresh

### VS Code Extensions (Recommended)

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Tailwind CSS IntelliSense** - Tailwind autocomplete
- **TypeScript Vue Plugin (Volar)** - Better TS support

### Browser DevTools

Press F12 to open DevTools:
- **Console:** Check for errors
- **Network:** Verify images load
- **Lighthouse:** Run accessibility audits

---

## 📦 Project Structure Overview

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx       # Hero section - UPDATE THIS
│   │   ├── Footer.tsx       # Footer links - UPDATE THIS
│   │   └── ...
│   ├── data/
│   │   ├── case-studies/    # Case study JSON - UPDATE THIS
│   │   └── meta.json        # Testimonials - UPDATE THIS
│   ├── pages/
│   │   ├── HomePage.tsx     # Main landing page
│   │   └── CaseStudyPage.tsx # Individual case study page
│   └── types/               # TypeScript definitions
├── public/
│   └── assets/
│       └── screenshots/     # Project images - REPLACE THESE
└── dist/                    # Build output (generated)
```

---

## 🚢 Ready to Deploy?

See [DEPLOYMENT.md](DEPLOYMENT.md) for deployment instructions.

**Quick deploy options:**
- GitHub Pages: Free, automatic
- Netlify: Free tier, custom domain
- Vercel: Free tier, excellent performance

---

## 🆘 Common Issues

### Port 5173 already in use

```bash
# Kill the process
pkill -f vite

# Or use a different port
pnpm dev -- --port 3000
```

### TypeScript errors

```bash
# Restart TypeScript server in VS Code
# Cmd+Shift+P → "TypeScript: Restart TS Server"
```

### Images not showing

- Check file paths in JSON (should start with `/assets/`)
- Verify files exist in `public/assets/screenshots/`
- Clear browser cache (Cmd+Shift+R / Ctrl+Shift+R)

### Tests failing

```bash
# Make sure you're on latest code
git pull

# Reinstall dependencies
rm -rf node_modules
pnpm install
```

---

## 📚 Learn More

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

---

## 💬 Need Help?

1. Check existing issues on GitHub
2. Read the [README.md](README.md)
3. Check [DEPLOYMENT.md](DEPLOYMENT.md) for deploy issues
4. Open a new issue with:
   - Error message
   - Steps to reproduce
   - Your Node.js version (`node --version`)

---

## ✅ Setup Checklist

- [ ] Node.js 20+ installed
- [ ] pnpm installed
- [ ] Dependencies installed (`pnpm install`)
- [ ] Dev server runs (`pnpm dev`)
- [ ] Tests pass (`pnpm test`)
- [ ] Build succeeds (`pnpm build`)
- [ ] Updated Header with your Calendly link
- [ ] Updated Footer with your social links
- [ ] Replaced case study JSON files
- [ ] Replaced screenshot placeholders
- [ ] Updated testimonials
- [ ] Tested on multiple browsers
- [ ] Ready to deploy! 🚀
