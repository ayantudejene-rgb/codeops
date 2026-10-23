# Server & Client Component Boundaries

| Component | Runs On | Justification |
| `app/layout.js` | Server | Fetches nothing, holds no state, passes `children` to `Providers`. |
| `app/menu/page.js` | Server | Fetches dishes directly from the database (simulated). |
| `app/menu/layout.js` | Server | Pure layout markup, passes `children` into the sidebar shell. |
| `app/menu/Sidebar.jsx` | Client | Requires `useState` to keep the counter state alive across navigation. |
| `app/menu/FilterShell.jsx` | Client | Requires `useState` to track the selected filter category and handle clicks. |
| `app/menu/DishList.jsx` | Server | Pure markup rendering, ships zero JS to the browser. |
| `app/menu/DishCard.jsx` | Server | Pure markup rendering, ships zero JS to the browser. |
| `app/menu/AddToCartButton.jsx` | Client | Requires `onClick` handler to trigger an action. |
| `app/menu/error.js` | Client | Next.js requires error boundaries to be client components to handle `reset`. |
| `app/checkout/page.js` | Server | Reads cookies via `cookies()` to check the session. |
| `app/checkout/CheckoutButton.jsx` | Client | Requires `useRouter` to programmatically push to a new route. |
| `app/providers.jsx` | Client | Context provider requires `useState` to hold cart data. |