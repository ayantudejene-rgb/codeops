# Authentication & Authorization Layers

| Route | Protected By | What It Proves |
| :--- | :--- | :--- |
| `/menu` | Nothing (Public) | Intentionally public and indexable for SEO. |
| `/orders` | Middleware + Page + Scoped Query | Middleware proves a cookie exists. Page verifies the session and fetches data. The query scopes to `session.id` so a user can only see their own orders. |
| `/checkout` | Middleware + Page | Middleware proves a cookie exists. Page verifies the session. The `placeOrder` action re-verifies the session before writing. |
| `/kitchen` | Middleware + Page + Action | Middleware checks for a cookie. Page checks `role === 'staff'`. |

## The Three Attacks (and what stopped them)

1. **Attack 1: Call a server action from the console while signed out.**
   * *Action:* `await cancelOrder("ord_123")` in the browser console.
   * *What stopped it:* The `getSession()` check inside `cancelOrder` returned `null` and threw `401 Unauthorized: Not signed in`.
2. **Attack 2: Sign in as one account and call an action with another account's order ID.**
   * *Action:* Log in as `customer@addis.com`, then run `await cancelOrder("staff_order_id")` in the console.
   * *What stopped it:* The authorisation check `if (order.userId !== user.id)` inside `cancelOrder` threw `403 Forbidden: Not yours`.
3. **Attack 3: Craft a sign-in link pointing at an external site.**
   * *Action:* Visit `/signin?next=https://evil-site.com` and sign in.
   * *What stopped it:* The `signIn` action checks `next.startsWith("/")`. It rejected the absolute URL and redirected to `/` instead.