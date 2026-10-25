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

## API Endpoints & Actions

| Endpoint / Action | Method / Type | Status Codes / Return |
| `/api/dishes` | GET | `200 OK` (Returns full menu JSON) |
| `/api/dishes/[id]` | GET | `200 OK` (Returns dish), `404 Not Found` (Standard error shape) |
| `/api/orders` | POST | `201 Created` (Returns new order), `422 Unprocessable Entity` (Returns fieldErrors) |
| `placeOrder` | Server Action | Returns `{ success: true }` or `{ fieldErrors }` |
| `cancelOrder` | Server Action | Throws Error if unauthorized, otherwise updates status |

## Build output for day40
PS C:\Users\USER\Desktop\codeops> cd Module_03/addis-eat
PS C:\Users\USER\Desktop\codeops\Module_03\addis-eat> npm run dev

> addis-eat@0.1.0 dev
> next dev

▲ Next.js 16.4.2 (Turbopack)
- Local:         http://localhost:3000
- Network:       http://192.168.43.76:3000
✓ Ready in 35.9s
✓ Running next.config.mjs took 714ms
⚠ Slow filesystem detected. The benchmark took 669ms. If \\?\C:\Users\USER\Desktop\codeops\Module_03\addis-eat\.next\dev is a network drive, consider moving it to a local folder.
○ Compiling /checkout ...
 GET / 200 in 4.6s (next.js: 2.7s, application-code: 1871ms)PS C:\Users\USER\Desktop\codeops\Module_03\addis-eat> 
                                                      npm run build

> addis-eat@0.1.0 build
> next build

▲ Next.js 16.4.2 (Turbopack)
✓ Running next.config.mjs took 198ms

  Creating an optimized production build ...
✓ Compiled successfully in 59s
  Running TypeScript ...
  Finished TypeScript in 9ms ...
  Collecting page data using 3 workers ...
✓ Finished filesystem cache database compaction in 10.2s
✓ Collecting page data using 3 workers in 19.3s
  Generating static pages using 3 workers (0/12) ...
  Generating static pages using 3 workers (3/12) 
  Generating static pages using 3 workers (6/12) 
  Generating static pages using 3 workers (9/12) 
✓ Generating static pages using 3 workers (12/12) in 1802ms
  Finalizing page optimization ...
✓ Finalizing page optimization in 47ms

Route (app)           Revalidate  Expire
┌ ○ /
├ ○ /_not-found
├ ƒ /api/dishes
├ ƒ /api/dishes/[id]
├ ƒ /api/orders
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

PS C:\Users\USER\Desktop\codeops\Module_03\addis-eat>

## Network Tab Observations (Day 41)

- **Typing in Search:** Typing 5 characters rapidly in the menu search box fires only **1 network request**, thanks to the 300ms debounce hook.
- **Pagination:** Clicking "Next" or "Previous" on the menu does not cause the dish list to flash empty or show a loading spinner, thanks to `keepPreviousData`.
- **Order Status:** The order status page loads instantly with the server-rendered data (`fallbackData`) and then fires a request every 5 seconds in the background to poll for updates.