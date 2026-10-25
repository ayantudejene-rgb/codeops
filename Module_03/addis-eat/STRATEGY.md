# Rendering Strategy

| Route | Strategy | Why |
|---|---|---|
| `/` | Static (SSG) | The landing page content never changes between builds. |
| `/menu` | ISR (`revalidate = 3600`) | Dishes change occasionally; an hourly refresh balances freshness and speed. |
| `/menu/[id]` | Static (SSG) | Pre-rendered at build time using `generateStaticParams`; every known dish is a static HTML file. |
| `/cart` | Client (CSR) | The cart is private, stateful data that exists only in the user's browser. |
| `/checkout` | Dynamic (SSR) | Reads cookies to identify the user's session, forcing a server render per request. |
| `/api/*` | Dynamic | Route handlers always execute on demand to process requests. |