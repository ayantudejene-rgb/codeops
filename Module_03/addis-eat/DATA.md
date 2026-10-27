# Data Fetching & Queries

| Query / Data | Server or Client | Key / Refresh Rule | Reasoning |
| :--- | :--- | :--- | :--- |
| **Menu & Dishes** | Server | ISR (`revalidate = 3600`) | Public data, needs SEO. Cached for 1 hour for speed. |
| **Order History** | Server | Scoped to `session.id` | Private, must be dynamically rendered per user and scoped to their ID. |
| **Order Status** | Client | `/api/orders/[id]`, `refreshInterval: 5000` | Needs to poll for live updates. Seeded with `fallbackData` from the server to avoid a loading spinner on arrival. |
| **Menu Search** | Client | `/api/dishes?q=[term]`, `null` key if empty | Triggered by typing. Debounced by 300ms. `keepPreviousData: true` prevents flashing. |
| **Cart Contents** | Client | Context API (`Providers.jsx`) | Never needs to hit the server until checkout. Persists in browser state. |