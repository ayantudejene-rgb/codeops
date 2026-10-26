# Performance Report (Day 43)

## Baseline (Before Optimization)
I ran Lighthouse on a production build (`npm run build && npm run start`) using Mobile throttling (Slow 4G).
- **LCP:** 4.2s 
- **CLS:** 0.25
- **INP:** 150ms
- **Page Weight:** ~3.5 MB

## Changes Made
1. Replaced `<img>` tags with `next/image`, providing explicit `width`, `height`, and `sizes` to prevent layout shift.
2. Added `priority` to the hero image on the home page.
3. Replaced the default browser font with `next/font/google` (Inter) to avoid external requests and layout shift.
4. Moved a third-party script to `next/script` with the `lazyOnload` strategy.
5. Used `Intl.NumberFormat` instead of a date/currency library.

## After Optimization
- **LCP:** 1.8s (Improved by 2.4s)
- **CLS:** 0.01 (Improved drastically due to reserved image space)
- **INP:** 110ms
- **Page Weight:** ~450 kB

## What caused the biggest improvement?
The single biggest change was moving to `next/image`. Resizing the 4MB JPEG to a WebP format and providing explicit dimensions prevented the layout from jumping (CLS) and drastically reduced the LCP time. 