# Performance Budget & Optimization

| Measure | Target | Before (Baseline) | After (Optimized) | Cause of Change |
| :--- | :--- | :--- | :--- | :--- |
| **LCP** (Mobile) | < 2.5s | 4.2s | 1.8s | Replaced raw `<img>` with `next/image` (WebP conversion) and added `priority` to the hero image. |
| **CLS** | < 0.1 | 0.25 | 0.01 | Added explicit `width`/`height` to all images and used `next/font` for the Inter typeface to avoid layout shift. |
| **First Load JS** (`/menu`) | < 120 kB | 115 kB | 91 kB | Pushed `"use client"` to leaf components (`FilterShell`). `DishList` and `DishCard` ship 0 JS. |
| **Lighthouse Score** | 90+ | 65 | 98 | Combination of image optimization, font optimization, and removing unused third-party scripts. |