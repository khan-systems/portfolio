# Design System Documentation

## Overview

This portfolio site uses a modern, conversion-focused design system built with Tailwind CSS, featuring semantic color tokens, responsive typography, and subtle micro-interactions powered by Framer Motion.

## Design Tokens

### Colors

#### Primary (Deep Blue)
- Used for CTAs, links, and brand elements
- `primary-DEFAULT`: `#0f62fe`
- `primary-600`: `#0b4de6` (hover states)

#### Accent (Teal)
- Used for secondary highlights and visual interest
- `accent-DEFAULT`: `#0ea5a4`

#### Neutral Scale
- Text and UI elements
- `neutral-900`: `#0b1220` (primary text)
- `neutral-700`: `#374151` (secondary text)
- `neutral-100`: `#f1f5f9` (light backgrounds)
- `neutral-50`: `#f8fafc` (page background)

#### Semantic Colors
- `success`: `#16a34a` (metrics, positive outcomes)
- `warning`: `#f59e0b` (alerts, important notices)

### Typography

**Font Family**: Inter (Google Fonts)
- Weights: 400 (body), 600 (medium), 700 (headings)
- Fallback: System fonts for performance

**Scale**:
- Hero: `text-4xl` to `text-6xl` (2.25rem - 3.75rem)
- Sections: `text-3xl` to `text-5xl`
- Body: `text-base` to `text-xl`

### Spacing & Layout

**Container**: `max-w-7xl` (1280px) with responsive padding
- Mobile: `px-4`
- Tablet: `px-6`
- Desktop: `px-8`

**Section Padding**: `py-16` to `py-24`

### Border Radius
- Small elements: `rounded-lg` (8px)
- Cards: `rounded-xl` (12px)
- Large elements: `rounded-4xl` (32px)

### Shadows
- `shadow-card`: Subtle elevation for cards
- `shadow-card-hover`: Enhanced elevation on hover
- `shadow-glass`: Glassmorphism effect for nav

## Dark Mode

Toggle between light and dark themes using the theme toggle in the top nav.

**Implementation**:
- Uses Tailwind's `dark:` variant
- Persists preference in localStorage
- Respects system preference as default

**Key Dark Mode Colors**:
- Background: `neutral-900`
- Cards: `neutral-800`
- Text: `neutral-100`

## Animations & Motion

**Library**: Framer Motion

**Principles**:
- Durations: 250-450ms
- Easing: Ease-out for entrances
- Respects `prefers-reduced-motion`

**Animation Types**:
1. **Entrance animations**: Fade + slide up on scroll
2. **Card lifts**: Hover state with `y: -6px` and shadow
3. **Counters**: Animated number increments for KPIs
4. **Device mockup**: Subtle float animation

## Accessibility

- **Color Contrast**: WCAG AA compliant (4.5:1 minimum)
- **Focus States**: Visible focus rings on all interactive elements
- **Keyboard Navigation**: Full keyboard support
- **Reduced Motion**: Respects `prefers-reduced-motion` preference
- **Semantic HTML**: Proper heading hierarchy and ARIA labels

## Component Classes

### Reusable Utilities

```css
.btn-primary - Primary CTA button
.btn-secondary - Ghost button with border
.card - Standard card styling
.card-hover - Add hover effect to cards
.glass - Glassmorphism background
.container-custom - Responsive container
```

## Customization Guide

### Changing CTA Price

**File**: `src/components/Hero.tsx` and `src/components/ContactSection.tsx`

Update the button text:
```tsx
Book 60-min audit — $90
```

### Updating Calendly Links

**File**: `src/components/ContactSection.tsx`

Replace:
```tsx
href="https://calendly.com/junaidkhan/architecture-session"
href="https://calendly.com/junaidkhan/intro-call"
```

### Modifying Color Scheme

**File**: `tailwind.config.cjs`

Update the `colors` object in `theme.extend`:
```js
primary: {
  DEFAULT: '#0f62fe', // Change to your brand color
  // ... other shades
}
```

### Disabling Animations

**Option 1**: System-level (automatic)
- macOS: System Preferences > Accessibility > Display > Reduce motion
- Windows: Settings > Ease of Access > Display > Show animations

**Option 2**: Code-level (force disable)

**File**: `src/hooks/usePrefersReducedMotion.ts`

Force return `true`:
```ts
export function usePrefersReducedMotion() {
  return true // Force all animations off
}
```

### Using Static Screenshots

Replace animated mockup with static image:

**File**: `src/components/Hero.tsx`

Remove the `motion.div` wrapper and animation props:
```tsx
<div className="relative">
  <img src="/path/to/hero-image.png" alt="Dashboard preview" />
</div>
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11 not supported (uses CSS Grid, CSS custom properties)

## Performance Targets

- **Lighthouse Performance**: ≥ 90
- **Accessibility**: ≥ 90
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s

## Bundle Size

- **Tailwind**: Purged to ~10-20KB (production)
- **Framer Motion**: ~30KB (tree-shaken)
- **Total JS**: Target < 150KB

## Testing Checklist

- [ ] Hero visible and readable on mobile/tablet/desktop
- [ ] KPIs animate on scroll (or show instantly with reduced motion)
- [ ] All interactive elements keyboard-accessible
- [ ] Dark mode toggle works
- [ ] Form submission opens mailto link
- [ ] Links scroll smoothly to sections
- [ ] Build completes without errors
- [ ] Lighthouse performance ≥ 90

## Future Enhancements (Optional)

1. **Analytics**: Add Plausible or Simple Analytics (privacy-friendly)
2. **A/B Testing**: Test CTA copy variations with Vercel Edge Config
3. **Accessibility Audit**: Run axe DevTools for WCAG AAA compliance
4. **Blog/Newsletter**: Add content marketing section
5. **Testimonial Video**: Embed client video testimonials
6. **Live Chat**: Integrate Crisp or Intercom for instant communication

---

**Questions?** Email junaidkhan.engineering@gmail.com
