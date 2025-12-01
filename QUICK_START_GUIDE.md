# 🚀 Quick Start Guide

## Install & Run (30 seconds)

```bash
# 1. Install dependencies
pnpm install

# 2. Start dev server
pnpm dev

# 3. Open browser to http://localhost:5173/portfolio/
```

## ✅ Visual Verification Checklist

Open the site and verify these 10 things:

### 1. Top Navigation (Sticky Header)
- [ ] Logo "JK" visible on left
- [ ] Navigation items: Work, Services, Process, Contact
- [ ] Theme toggle icon (sun/moon) works
- [ ] "Work with me" button visible
- [ ] Nav becomes glass/blur effect when scrolling down
- [ ] Mobile: Hamburger menu appears on small screens

### 2. Hero Section
- [ ] Large headline: "I build fast, maintainable frontends..."
- [ ] Subheadline about reducing load times
- [ ] Two buttons: "Book 60-min audit — $90" and "View case studies"
- [ ] Desktop: Floating device mockup with 3 stacked cards on right side
- [ ] Mobile: Hero stacks vertically, mockup hidden

### 3. KPI Strip (Metrics)
- [ ] Three metrics with large numbers (79%, 65%, 40%)
- [ ] Icons above each number
- [ ] Numbers animate from 0 when scrolled into view
- [ ] Labels: "Lighthouse Performance", "Bundle Reduction", "Conversion Uplift"

### 4. Services Section
- [ ] Heading: "What I do"
- [ ] Six service cards in grid
- [ ] Each card has: icon, title, description, price tag
- [ ] Cards lift slightly on hover
- [ ] Services: Architecture Audit, Migration, Dashboard, Design System, Performance Sprint, Training

### 5. Case Studies Section
- [ ] Heading: "Selected work"
- [ ] Three project cards
- [ ] Each card shows: screenshot, title, metrics (3 numbers), tech stack
- [ ] Fintech, Design System, Real Estate projects
- [ ] "View case study" links work

### 6. Process Timeline
- [ ] Heading: "How I work"
- [ ] Four steps with icons: Discovery, Proposal, Execution, Delivery
- [ ] Step numbers: 01, 02, 03, 04
- [ ] Short description under each

### 7. Testimonials
- [ ] Heading: "What clients say"
- [ ] Three testimonial cards
- [ ] Quote marks icon
- [ ] Client name, role, and company

### 8. Contact Section
- [ ] Heading: "Let's work together"
- [ ] Two cards side by side:
  - "60-min Architecture Audit — $90" with Calendly link
  - "15-min Intro Call — Free" with Calendly link
- [ ] Contact form below with Name, Email, Project brief
- [ ] Character counter shows "0/300"
- [ ] "Send message" button

### 9. Footer
- [ ] Four columns: Brand, Quick Links, Connect, Stay Updated
- [ ] Social icons: GitHub, LinkedIn, Email
- [ ] Copyright year is current (2024)
- [ ] Quick links scroll smoothly to sections

### 10. Dark Mode
- [ ] Click theme toggle in top nav
- [ ] Background changes from light to dark
- [ ] All text remains readable
- [ ] Cards have darker background
- [ ] Toggle again to return to light mode

## 🎨 Quick Theme Check

### Light Mode Colors
- Background: Very light gray/white
- Text: Dark gray/black
- Primary buttons: Bright blue
- Cards: White with subtle shadow

### Dark Mode Colors
- Background: Very dark gray/black
- Text: Light gray/white
- Primary buttons: Same bright blue
- Cards: Dark gray with border

## ⌨️ Keyboard Navigation Test (2 minutes)

1. Click in browser address bar
2. Press `Tab` repeatedly and verify:
   - [ ] Focus visible on theme toggle
   - [ ] Focus visible on "Work with me" button
   - [ ] Focus visible on hero CTAs
   - [ ] Focus visible on service cards
   - [ ] Focus visible on contact form fields
   - [ ] Focus visible on footer links
3. Press `Enter` on focused button to activate

## 📱 Mobile Test

Resize browser to 375px width (iPhone SE) or use DevTools device mode:

- [ ] Hero stacks vertically
- [ ] Device mockup disappears
- [ ] Hamburger menu appears in nav
- [ ] All sections stack properly
- [ ] Buttons remain tappable
- [ ] Text is readable (not too small)
- [ ] Images fit within screen

## 🏗️ Build Test

```bash
# Build for production
pnpm build

# Should output:
# ✓ 345 modules transformed
# dist/assets/index-*.css   ~35 kB
# dist/assets/index-*.js    ~313 kB (gzipped: ~100 kB)
```

```bash
# Preview production build
pnpm preview

# Visit http://localhost:4173/portfolio/
# Verify everything works same as dev
```

## 🎯 Critical Interactions

### Test These 5 User Flows

1. **Book Audit Flow**
   - Click "Book 60-min audit — $90" in hero
   - Should scroll to contact section
   - Click "Book now" button
   - Should open Calendly in new tab

2. **View Case Study Flow**
   - Click "View case studies" in hero
   - Should scroll to case studies section
   - Click "View case study" on any project card
   - Should navigate to case study detail page

3. **Contact Form Flow**
   - Scroll to contact section
   - Fill in name, email, and project brief
   - Click "Send message"
   - Should open email client with prefilled data

4. **Navigation Flow**
   - Click nav items (Work, Services, Process, Contact)
   - Each should smooth scroll to corresponding section
   - Click logo to scroll back to top

5. **Theme Toggle Flow**
   - Click theme toggle (sun/moon icon)
   - Theme should switch immediately
   - Refresh page
   - Theme should persist (same as before refresh)

## 🐛 Common Issues

### Dev server won't start?
```bash
# Stop any running servers
pkill -f vite

# Try again
pnpm dev
```

### Animations not working?
- Check browser console for errors
- Verify framer-motion is installed: `ls node_modules/framer-motion`

### Build fails?
```bash
# Reinstall dependencies
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

### Styles look broken?
- Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
- Clear cache and rebuild

## 📊 Performance Check

Open Chrome DevTools:
1. Go to Lighthouse tab
2. Select "Desktop" and all categories
3. Click "Analyze page load"
4. Expected scores:
   - Performance: ≥ 90
   - Accessibility: ≥ 90
   - Best Practices: ≥ 90
   - SEO: ≥ 90

## ✨ Customization Quick Wins

### Change the audit price
**File**: `src/components/Hero.tsx` (line ~74)
```tsx
Book 60-min audit — $150  // Change $90 to $150
```
**Also**: `src/components/ContactSection.tsx` (line ~83)

### Update Calendly links
**File**: `src/components/ContactSection.tsx`
```tsx
// Line 99
href="https://calendly.com/YOUR-USERNAME/session"

// Line 124
href="https://calendly.com/YOUR-USERNAME/intro"
```

### Change primary color
**File**: `tailwind.config.cjs` (line 10)
```js
primary: {
  DEFAULT: '#0f62fe', // Change to #e74c3c for red
}
```
Then rebuild: `pnpm dev` (auto-reloads)

## 📚 Next Steps

After verifying everything works:

1. **Customize content**:
   - Update Calendly links
   - Change pricing if needed
   - Update social links in footer

2. **Add your case studies**:
   - Edit JSON files in `src/data/case-studies/`
   - Add screenshots to `/public/assets/screenshots/`

3. **Deploy**:
   - See `DEPLOYMENT.md` for hosting options
   - Test on real mobile devices
   - Run Lighthouse audit in production

4. **Read full docs**:
   - `README_DESIGN_TOKENS.md` - Design system
   - `TESTING_CHECKLIST.md` - Comprehensive tests
   - `IMPLEMENTATION_SUMMARY.md` - Technical details

## 🎉 You're Ready!

If all 10 visual checks pass and the 5 user flows work:
- ✅ Site is production-ready
- ✅ Time to customize and deploy
- ✅ Refer to other docs for advanced features

---

**Need help?** Check `UPDATE_NOTES.md` for troubleshooting or email junaidkhan.engineering@gmail.com
