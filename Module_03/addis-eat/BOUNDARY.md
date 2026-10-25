# Server & Client Boundary

| Component | Side | Why |
| `app/layout.js` | Server | Holds no state, wraps children. |
| `app/menu/page.js` | Server | Fetches data directly from `lib/db.js`. |
| `components/DishList.jsx` | Server | Pure markup, ships zero JS. |
| `components/DishCard.jsx` | Server | Pure markup, ships zero JS. |
| `components/FilterShell.jsx` | Client | Requires `useState` for interactive filtering. |
| `components/Sidebar.jsx` | Client | Requires `useState` for the counter. |
| `components/AddToCartButton.jsx` | Client | Requires an `onClick` event handler. |
| `app/checkout/page.js` | Server | Reads cookies to determine auth state. |
| `app/checkout/CheckoutForm.jsx` | Client | Requires `useActionState` and form interactivity. |