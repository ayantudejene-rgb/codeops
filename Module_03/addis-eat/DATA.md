# Data Fetching (SWR)

| Query / Key | Refresh Rule | Reasoning |
| `/api/orders/[id]` | `refreshInterval: 5000`, `fallbackData` | Polls every 5 seconds to update the live order status. `fallbackData` ensures the server-rendered initial state shows instantly without a loading spinner. |
| `/api/dishes?q=[term]` | `keepPreviousData: true`, `null` key if empty | Debounced by 300ms to prevent a request per keystroke. `null` key prevents fetching when the search box is empty. `keepPreviousData` stops the list from flashing empty while typing. |
| `/api/dishes?page=[page]` | `keepPreviousData: true`, `fallbackData` (page 1) | URL-driven pagination. `fallbackData` makes the initial page fast. `keepPreviousData` avoids flashing while navigating between pages. |