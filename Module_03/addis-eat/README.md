Special files:
- `app/layout.js` — root shell
- `app/menu/loading.js` — loading UI for the menu segment
- `app/menu/error.js` — error boundary for the menu segment
- `app/not-found.js` — 404 UI

Colocated, not routes:
- `app/menu/DishList.jsx`
- `app/menu/CategoryBar.jsx`
- `app/cart/CheckoutButton.jsx`


PS C:\Users\USER\Desktop\codeops\Module_03\addis-eat> npm run build

> addis-eat@0.1.0 build
> next build

▲ Next.js 16.4.2 (Turbopack)
✓ Running next.config.mjs took 504ms

  Creating an optimized production build ...
✓ Compiled successfully in 2.6min
  Running TypeScript ...
  Finished TypeScript in 23ms ...
  Collecting page data using 3 workers ...
✓ Finished writing to filesystem cache in 33.6s
✓ Collecting page data using 3 workers in 2.0min
  Generating static pages using 3 workers (0/10) ...
  Generating static pages using 3 workers (2/10) 
  Generating static pages using 3 workers (4/10) 
  Generating static pages using 3 workers (7/10) 
✓ Generating static pages using 3 workers (10/10) in 6.3s
  Finalizing page optimization ...
✓ Finalizing page optimization in 379ms

Route (app)           Revalidate  Expire
┌ ○ /
├ ○ /_not-found
├ ○ /cart
├ ƒ /checkout
├ ○ /menu                     1h      1y
└   /menu/[id]
  ├ ● /menu/kitfo
  ├ ● /menu/doro-wat
  └ ● /menu/shiro


○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
ƒ  (Dynamic)  server-rendered on demand