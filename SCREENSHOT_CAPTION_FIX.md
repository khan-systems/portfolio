# ✅ Screenshot Caption Fix

## Problem
Captions floating in the middle of screenshot cards instead of at the bottom.

## Root Cause
The `<figure>` container wasn't using flexbox, so the caption positioned relative to content flow rather than being pushed to bottom.

## Solution

### Before:
```tsx
<figure className="bg-neutral-50 ... rounded-lg overflow-hidden border">
  <div className="p-4 bg-neutral-100">
    <img ... />
  </div>
  <figcaption className="p-4 text-sm ...">
    {screenshot.caption}
  </figcaption>
</figure>
```

### After:
```tsx
<figure className="... flex flex-col">
  <div className="p-4 ... flex-shrink-0">
    <img ... />
  </div>
  <figcaption className="p-4 ... mt-auto">
    {screenshot.caption}
  </figcaption>
</figure>
```

## Changes

1. **`flex flex-col`** on `<figure>`
   - Makes figure a flex container with column direction

2. **`flex-shrink-0`** on image container
   - Prevents image container from shrinking

3. **`mt-auto`** on `<figcaption>`
   - Pushes caption to bottom of flex container
   - This is the key fix!

## How It Works

```
┌─────────────────┐ ← figure (flex flex-col)
│                 │
│  [Image]        │ ← div (flex-shrink-0)
│                 │
│                 │ ← Flexible space
│─────────────────│
│ Caption text    │ ← figcaption (mt-auto = pushes to bottom)
└─────────────────┘
```

The `mt-auto` uses flex's auto margins to push the caption to the bottom, regardless of image height.

## Result

All screenshot captions now:
- ✅ Stick to the bottom of their card
- ✅ Work for any image height
- ✅ Maintain consistent spacing
- ✅ Look professional and aligned

## Test

1. Go to: http://localhost:5173/portfolio/
2. Click "Real Estate Search UI"
3. Scroll to Screenshots section
4. Check all 3 screenshots
5. Captions should be at bottom of each card

---

**Status:** ✅ Fixed with flexbox layout
