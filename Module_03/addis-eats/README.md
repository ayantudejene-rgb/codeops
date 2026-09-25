# Addis Eats

## Day 27 - Props & Rendering Patterns
- Implemented PropTypes for type checking and documentation.
- Added default props for `currency`.
- Created a reusable `Card` wrapper using the `children` prop.
- Implemented conditional rendering for the "Spicy" badge using `&&`.
- Created a `Menu` component that filters dishes by category and renders an empty state.
- Rendered lists using `map` and stable `id` keys.
## Day 30 - Project: Addis Eats Assembled
- `useFetch` custom hook for API data (loading, error, abort).
- `cartReducer` pure function handling add, remove, clear.
- `CartProvider` using `useReducer` and `useContext` for global cart state.
- Header cart badge & checkout panel read cart without prop drilling.
- Provider value memoised with `useMemo`.
- `React.memo` on DishList and `useCallback` on category handler for performance.
## Day 31 - Addis Eats, Routed

- Nested routes with a shared `Layout` (Header + Nav + Outlet + Footer).
- `NavLink` highlights the active tab.
- Category filter stored in the URL via `useSearchParams` (shareable).
- `RequireAuth` guards `/checkout` and returns the user to it after login.
## Day 32 - Cart Moved to a Zustand Store

### What lives where, and why
- Cart (`store/cartStore.js`, Zustand):Many components need it, it changes on every click,
  and it must survive a full page reload. Zustand's selectors prevent unrelated re-renders, and
  `persist` middleware writes to localStorage automatically.
- Auth (`context/AuthContext.jsx`): The session changes rarely and only a few screens read it.
  Context with a guarded `useAuth` hook is simpler than a store here.
- Theme (`context/ThemeContext.jsx`): Changes almost never; context is the right tool.

### Changes from Day 31
- Deleted `CartProvider.jsx` and `cartReducer.js`. No provider above the router.
- `useCart()` (in `hooks/useCart.js`) is now backed by the Zustand store.
- Every consumer uses a narrow selector (e.g. `useCartStore(s => s.addItem)`).
- Cart persists across refresh via the `addis-eats-cart` localStorage key.
## Day 33 - The Addis Eats Checkout
### Form features
- one state object for `name`, `phone`, `area`, `notes` — one `handleChange` for all fields.
- **Pure `validate(form)`** in `src/utils/validate.js`, derived on every render.
- Touched tracking — an error only appears after the field is blurred,
  then updates live as the value is corrected.
- Accessible — every field has a real `<label htmlFor>`, plus `aria-invalid`,
  `aria-describedby`, and `role="alert"` on each error message.
- Submitting state — the button is disabled and reads `Sending...`;
  otherwise it shows the ETB total.
- Failure path — the mock server (`src/utils/placeOrder.js`) rejects if
  the name contains "fail". The form keeps every value and focuses the first
  invalid field.

# Testing the failure path
Type `fail` in the Name field and submit. You will see the server error,
your phone and area will still be filled in, and focus will move back to the
phone input.