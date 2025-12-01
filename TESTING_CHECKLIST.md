# Testing Checklist

## Prerequisites
- [ ] `pnpm install` completes without errors
- [ ] `pnpm dev` starts development server successfully
- [ ] `pnpm build` completes without TypeScript or build errors

## Visual & Functional Tests

### 1. Hero Section
- [ ] Hero visible and readable on mobile (≤640px)
- [ ] Hero visible and readable on tablet (641-1023px)
- [ ] Hero visible and readable on desktop (≥1024px)
- [ ] Primary CTA button ("Book 60-min audit — $90") is clickable
- [ ] Secondary CTA button ("View case studies") scrolls to case studies section
- [ ] Device mockup cards visible on desktop (hidden on mobile)
- [ ] Animations play smoothly (or disabled with reduced motion)

### 2. KPI Strip
- [ ] Three metrics visible on all screen sizes
- [ ] Counter animations work (numbers increment from 0)
- [ ] Icons display correctly
- [ ] Metrics are in view triggers animation once

### 3. Navigation
- [ ] Top nav is sticky on scroll
- [ ] Nav becomes glass/blur effect after scroll
- [ ] Theme toggle switches between light and dark mode
- [ ] Theme preference persists after page reload
- [ ] Mobile hamburger menu opens/closes
- [ ] All nav items scroll smoothly to their sections
- [ ] "Work with me" CTA visible and functional
- [ ] Logo/brand name clicks scroll to top

### 4. Services Section
- [ ] Six service cards display in grid
- [ ] Cards lift on hover (desktop)
- [ ] Prices are visible on each card
- [ ] Icons render correctly
- [ ] Responsive: stacks on mobile, 2 cols on tablet, 3 cols on desktop

### 5. Case Studies Section
- [ ] Three case study cards visible
- [ ] Screenshots load correctly
- [ ] Metrics extracted and displayed (3 metrics per card)
- [ ] Tech stack badges visible
- [ ] "View case study" links navigate to detail pages
- [ ] Hover effects work (image zoom, card lift)
- [ ] Duration badge displays

### 6. Process Timeline
- [ ] Four process steps visible
- [ ] Icons display correctly
- [ ] Step numbers (01-04) visible
- [ ] Connector lines visible on desktop
- [ ] Responsive layout: stacks on mobile, grid on desktop

### 7. Testimonials
- [ ] Three testimonial cards visible
- [ ] Quote icon displays
- [ ] Author name, role, and company visible
- [ ] Cards have consistent height
- [ ] Responsive: stacks on mobile, 3 cols on desktop

### 8. Contact Section
- [ ] Two CTA cards visible (Audit $90, Free intro call)
- [ ] Calendly links work (open in new tab)
- [ ] Contact form visible
- [ ] Form fields accept input
- [ ] Character counter works (300 max for project brief)
- [ ] Form submit opens mailto link with prefilled data
- [ ] Email fallback link works

### 9. Footer
- [ ] Four columns visible on desktop
- [ ] Links scroll to sections correctly
- [ ] Social icons (GitHub, LinkedIn, Email) work
- [ ] Copyright year is current
- [ ] Footer stacks properly on mobile

### 10. Keyboard Navigation
- [ ] Tab through top nav items
- [ ] Tab to theme toggle
- [ ] Tab to primary CTA in hero
- [ ] Tab to first service card
- [ ] Tab through contact form fields
- [ ] Focus rings visible on all interactive elements
- [ ] Enter key activates buttons/links

### 11. Dark Mode
- [ ] Toggle switches theme
- [ ] All text remains readable (contrast check)
- [ ] Cards have proper background colors
- [ ] Icons change color appropriately
- [ ] Images/screenshots remain visible
- [ ] No jarring color flashes on toggle

### 12. Accessibility
- [ ] All images have alt text
- [ ] Headings follow hierarchy (h1 → h2 → h3)
- [ ] Color contrast ≥ 4.5:1 (WCAG AA)
- [ ] Focus states visible
- [ ] ARIA labels on icon-only buttons
- [ ] No console warnings about accessibility

### 13. Performance
- [ ] Page loads in < 3 seconds (on good connection)
- [ ] Images use lazy loading
- [ ] No layout shift during load
- [ ] Smooth scrolling works
- [ ] Animations don't cause jank
- [ ] Bundle size < 150KB (check dist folder)

### 14. Reduced Motion
- [ ] With reduced motion ON: animations disabled
- [ ] With reduced motion ON: counters show final value instantly
- [ ] With reduced motion ON: page remains functional
- [ ] CSS animations respect prefers-reduced-motion

### 15. Production Build
- [ ] `pnpm build` succeeds
- [ ] `pnpm preview` serves built site
- [ ] All assets load correctly from dist
- [ ] No console errors in preview
- [ ] Lighthouse Performance ≥ 90 (run in incognito)
- [ ] Lighthouse Accessibility ≥ 90

## Browser Compatibility
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## Responsive Breakpoints
- [ ] Mobile: 375px (iPhone SE)
- [ ] Mobile: 414px (iPhone Pro Max)
- [ ] Tablet: 768px (iPad)
- [ ] Desktop: 1280px
- [ ] Desktop: 1920px

## Common Issues Checklist

### If animations don't work:
1. Check browser console for Framer Motion errors
2. Verify `framer-motion` is installed
3. Check if `prefers-reduced-motion` is enabled

### If dark mode doesn't work:
1. Check localStorage for 'theme' key
2. Verify Tailwind `darkMode: 'class'` is set
3. Check if `dark` class is added to `<html>`

### If styles look broken:
1. Verify Tailwind config includes all content paths
2. Check if Google Fonts (Inter) loaded
3. Clear browser cache and rebuild

### If smooth scroll doesn't work:
1. Check if elements have correct IDs
2. Verify `scrollIntoView` is called with `behavior: 'smooth'`
3. Some browsers require CSS `scroll-behavior: smooth`

## Lighthouse Audit (Production)

Run in Chrome DevTools (Incognito mode):
1. Open DevTools → Lighthouse
2. Select: Performance, Accessibility, Best Practices, SEO
3. Device: Mobile or Desktop
4. Click "Analyze page load"

**Target Scores:**
- Performance: ≥ 90
- Accessibility: ≥ 90
- Best Practices: ≥ 90
- SEO: ≥ 90

## Manual Testing Commands

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build production
pnpm build

# Preview production build
pnpm preview

# Run tests (if configured)
pnpm test

# Lint code
pnpm lint

# Format code
pnpm format
```

## Notes for QA

- Test on actual mobile devices, not just browser DevTools
- Use keyboard-only navigation for accessibility check
- Test with screen reader (NVDA, VoiceOver, JAWS)
- Verify in different network conditions (throttle to 3G)
- Check with browser extensions disabled
- Test with JavaScript disabled (graceful degradation)

---

**Last Updated:** 2024
**Version:** 1.0.0
