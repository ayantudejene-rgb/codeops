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