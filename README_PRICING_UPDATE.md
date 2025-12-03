# Pricing Update - Public Site Changes

## Change Summary

Public site does not list prices — pricing is discussed during discovery or paid architecture sessions.

## What Changed

### Price Removal
- Removed all visible pricing from Hero, Header, Services, and Contact sections
- Service cards no longer display "From $X,XXX" pricing
- CTAs updated to neutral language without dollar amounts

### CTA Updates
All CTAs now use consistent, price-free labels:
- Primary CTA: "Book a 60-minute architecture session"
- Secondary CTA: "Book a 15-minute intro"

### Testimonials Replaced
Replaced the testimonials section with three credibility-focused sections:

1. **Case Study Highlights** - 3 cards with real metrics from case studies
2. **Client Outcomes** - Compact bullet strip of typical results
3. **Why Teams Hire Me** - Trust signals and experience highlights

### Technical Changes
- Deleted: `src/components/TestimonialsSection.tsx` (fake quotes)
- Created: `src/components/CaseStudyHighlightsSection.tsx` (real data)
- Updated: `HomePage.tsx`, `Hero.tsx`, `Header.tsx`, `ServicesSection.tsx`, `ServiceCard.tsx`, `ContactSection.tsx`

## Calendly Links Preserved

All Calendly booking links remain functional:
- 60-minute architecture audit: https://calendly.com/junaidkhan-engineering/60-min-architecture-audit
- 15-minute intro call: https://calendly.com/junaidkhan-engineering/15-minute-intro

Pricing is now discussed during these sessions rather than shown publicly.

## Verification

Run the following to verify no prices remain:
```bash
# Search for dollar signs in source
grep -r "\$[0-9]" src/ --include="*.tsx" --include="*.ts"

# Should return no results
```
