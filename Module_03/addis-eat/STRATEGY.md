# Rendering Strategies

| Route | Strategy | Why |
|---|---|---|
| `/` | Static | The home page content (story, address) doesn't change between builds. |
| `/menu` | ISR (revalidate = 3600) | Dishes change occasionally, but speed matters. 1 hour is a safe staleness window. |
| `/menu/[id]` | Static via `generateStaticParams` | Every dish is known at build time. Pre-rendering them makes them load instantly. |
| `/cart` | Client | The person's own state, private, stored in the browser. |
| `/checkout` | Dynamic (SSR) | Reads the session cookie to identify the user, forcing a server render per request. |