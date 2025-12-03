# ✅ Screenshot Layout - Simple Fix

## Problem
Flexbox layout was cutting off images from the bottom.

## Root Cause
`max-h-96` + `flex-shrink-0` was creating conflicts, causing overflow to be hidden.

## Solution
Reverted to simple block layout:

```tsx
<figure>
  <div>
    <img className="w-full h-auto object-contain" />
  </div>
  <figcaption>
    Caption text
  </figcaption>
</figure>
```

## Why This Works

**Simple block layout:**
- Image container expands to fit image height
- Caption naturally flows below
- No flex conflicts
- No overflow issues

**Key changes:**
- ❌ Removed `flex flex-col` from figure
- ❌ Removed `flex-shrink-0` from image div
- ❌ Removed `mt-auto` from caption
- ❌ Removed `max-h-96` height constraint
- ✅ Kept `h-auto` for natural sizing
- ✅ Kept `object-contain` for aspect ratio

## Result

```
┌─────────────────┐
│                 │
│  [Full Image]   │ ← Expands to full height
│                 │
├─────────────────┤
│ Caption text    │ ← Below image (natural flow)
└─────────────────┘
```

Images display at their natural size (within card width), captions sit below.

## Trade-off

- **Before flexbox**: Caption might have whitespace above it if image is small
- **With flexbox**: Images could get cut off
- **Current solution**: Simple, reliable, no cut-offs

Sometimes the simple solution is the best! 

---

**Status:** ✅ Images won't be cut off, captions below images
