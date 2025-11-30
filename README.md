# Junaid Khan — Portfolio

**Production-ready portfolio site for a frontend architecture consultant**

A lightweight, fast, and accessible single-page application built with **Vite + React + TypeScript + Tailwind CSS**.

---

## 🚀 Quick Start

**Requirements:** Node.js 20+ and pnpm 8+

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev
# → Opens at http://localhost:5173

# Run tests
pnpm test

# Build for production
pnpm build

# Preview production build
pnpm preview
```

---

## ✨ Features

- ⚡ **Lightning Fast** - Built with Vite, optimized bundles, lazy loading
- 📱 **Fully Responsive** - Mobile-first design with Tailwind CSS
- ♿ **Accessible** - WCAG 2.1 AA compliant, semantic HTML, keyboard navigation
- 🎨 **Modern Design** - Clean UI with gradient accents, smooth transitions
- 🔒 **Privacy-First** - No tracking, no cookies, no analytics
- 📊 **Case Studies** - Three featured projects with detailed pages
- 🧪 **Tested** - Vitest unit tests for core components
- 🚀 **CI/CD Ready** - GitHub Actions workflow for automated deployment
- 🎯 **SEO Optimized** - Dynamic meta tags per case study

---

## 📁 Project Structure

```
junaid-khan-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Pages deployment
├── public/
│   ├── assets/
│   │   └── screenshots/            # Case study images (REPLACE_ME)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── __tests__/              # Component tests
│   │   ├── CaseStudyCard.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── HowIWork.tsx
│   │   ├── MetricsBanner.tsx
│   │   └── Testimonials.tsx
│   ├── data/
│   │   ├── case-studies/           # JSON case study files
│   │   │   ├── fintech-loan-dashboard.json
│   │   │   ├── design-system-core.json
│   │   │   └── real-estate-search-ui.json
│   │   └── meta.json               # Testimonials data
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   └── CaseStudyPage.tsx
│   ├── test/
│   │   └── setup.ts
│   ├── types/
│   │   ├── case-study.ts
│   │   └── meta.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.cjs
└── README.md
```

---

## 🎨 Customization

### 1. Update Personal Information

**Header CTA** (`src/components/Header.tsx`):
```typescript
const calendlyLink = 'YOUR_CALENDLY_LINK' // REPLACE_ME
```

**Footer Links** (`src/components/Footer.tsx`):
- Update social media links (LinkedIn, GitHub, Twitter)
- Change email address

### 2. Add/Edit Case Studies

Case studies are defined in `src/data/case-studies/*.json`. Each file follows this schema:

```typescript
{
  "id": "unique-slug",
  "title": "Project Title",
  "subtitle": "Brief description",
  "role": "Your Role",
  "duration": "Time period",
  "stack": ["Tech1", "Tech2"],
  "problem": "Problem statement",
  "solution": "How you solved it",
  "outcomes": ["Result 1", "Result 2"],
  "techHighlights": ["Highlight1", "Highlight2"],
  "screenshots": [
    {
      "path": "/assets/screenshots/image.png",
      "caption": "Image description",
      "alt": "Accessibility text"
    }
  ],
  "demoLink": null,
  "privateRepoInvite": "Access note"
}
```

**To add a new case study:**
1. Create a new JSON file in `src/data/case-studies/`
2. Add screenshots to `public/assets/screenshots/`
3. Import the JSON in `src/pages/HomePage.tsx`
4. Add to the caseStudies array

### 3. Replace Screenshot Placeholders

All screenshots in `public/assets/screenshots/` are placeholders. Replace them with:
- Real project screenshots (redacted/anonymized)
- 1200x800px minimum resolution
- PNG format, compressed for web
- No client PII or sensitive data

See `public/assets/screenshots/README.md` for details.

### 4. Update Testimonials

Edit `src/data/meta.json` to add/modify client testimonials.

### 5. Customize Theme Colors

Edit `tailwind.config.cjs` to change the primary color palette:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... customize colors
  }
}
```

---

## 🧪 Testing

Run tests with Vitest:

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test -- --watch

# Run tests with coverage
pnpm test -- --coverage
```

**Test files:** `src/components/__tests__/`

Includes tests for:
- Header component rendering
- CaseStudyCard with props
- Footer links and social media

---

## 🚀 Deployment

### GitHub Pages

1. **Update base path** in `vite.config.ts`:
   ```typescript
   base: '/your-repo-name/',
   ```

2. **Enable GitHub Pages:**
   - Go to repo Settings → Pages
   - Source: GitHub Actions

3. **Push to main branch** - The workflow automatically builds and deploys

**Required GitHub Secret:** None - uses `GITHUB_TOKEN` automatically

### Netlify

1. **Push to GitHub**
2. **Import project** on Netlify
3. **Settings auto-detected** from `netlify.toml`:
   - Build command: `pnpm build`
   - Publish directory: `dist`

### Vercel

1. **Import project** from GitHub
2. **Auto-detected settings:**
   - Framework: Vite
   - Build command: `pnpm build`
   - Output directory: `dist`

---

## ♿ Accessibility

This site follows WCAG 2.1 AA guidelines:

- ✅ Semantic HTML5 elements
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus indicators on all interactive elements
- ✅ Alt text for all images (from JSON)
- ✅ Color contrast ratios meet AA standards
- ✅ Responsive text sizing

**Test accessibility:**

```bash
# Install Lighthouse CI
npm install -g @lhci/cli

# Run Lighthouse audit
lhci autorun --collect.url=http://localhost:5173
```

**Expected Lighthouse scores:**
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

---

## 📊 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.2+ | UI library |
| TypeScript | 5.2+ | Type safety |
| Vite | 5.0+ | Build tool & dev server |
| Tailwind CSS | 3.4+ | Styling |
| React Router | 6.21+ | Client-side routing |
| Vitest | 1.1+ | Unit testing |
| ESLint | 8.55+ | Code linting |
| Prettier | 3.1+ | Code formatting |

---

## 🛠️ Scripts

```bash
pnpm dev        # Start dev server (localhost:5173)
pnpm build      # Build for production (outputs to dist/)
pnpm preview    # Preview production build
pnpm test       # Run Vitest tests
pnpm lint       # Run ESLint
pnpm format     # Format code with Prettier
pnpm deploy:gh  # Build and deploy to GitHub Pages
```

---

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration and Vitest setup
- `tsconfig.json` - TypeScript compiler options
- `tailwind.config.cjs` - Tailwind CSS theme customization
- `postcss.config.cjs` - PostCSS plugins (Tailwind, Autoprefixer)
- `.eslintrc.cjs` - ESLint rules
- `.prettierrc` - Prettier formatting rules
- `netlify.toml` - Netlify deployment config
- `.github/workflows/deploy.yml` - GitHub Actions CI/CD

---

## 📦 Bundle Size

Production build (optimized):
- **HTML:** ~1 KB
- **CSS:** ~10 KB (gzipped)
- **JS:** ~50 KB (gzipped)
- **Total:** ~61 KB gzipped

No heavy dependencies. Only React, React Router, and Tailwind CSS.

---

## 🔒 Privacy & Security

- ✅ No cookies
- ✅ No tracking scripts
- ✅ No analytics (by default)
- ✅ No third-party JavaScript
- ✅ No external API calls
- ✅ Static site - no server-side data collection

---

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Junaid Khan**  
Frontend Architecture Consultant

- 🌐 Portfolio: [junaidkhan.com](https://junaidkhan.com)
- 💼 LinkedIn: [linkedin.com/in/junaidkhan](https://linkedin.com/in/junaidkhan)
- 🐙 GitHub: [github.com/junaidkhan](https://github.com/junaidkhan)
- 🐦 Twitter: [@junaidkhan](https://twitter.com/junaidkhan)
- 📧 Email: hello@junaidkhan.com

---

## 🙏 Acknowledgments

Built with modern web technologies:
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [React](https://react.dev/) - The library for web and native interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vitest](https://vitest.dev/) - Blazing fast unit test framework

---

## 📞 Support

For questions or issues:
1. Check existing [GitHub Issues](https://github.com/junaidkhan/portfolio/issues)
2. Open a new issue with details
3. Email: hello@junaidkhan.com
