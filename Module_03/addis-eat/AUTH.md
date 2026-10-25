# Authentication & Authorization Layers

| Route | Middleware | Page Check | Action Check | What it proves |
| `/checkout` | Yes (Redirects if no cookie) | Yes (Reads cookie for UI) | Yes (PlaceOrder action) | Middleware proves a cookie exists. Page proves who it is. Action proves the request is genuine. |
| `/orders` | Yes (Redirects if no cookie) | Yes (Scopes DB query to `user.id`) | Yes (`cancelOrder` checks ownership) | Prevents reading or modifying another user's orders. |
| `/kitchen` | Yes (Redirects if no cookie) | Yes (Checks `role === 'staff'`) | N/A | Prevents customers from accessing staff-only screens. |

## The Three Attacks (and why they fail)

1. **Attack:** Call `cancelOrder("ord_123")` from the browser console while signed out.
   * **Result:** Fails. The action throws `401 Unauthorized` because `getSession()` returns null.
2. **Attack:** Sign in as Almaz (`usr_1`), but use the console to call `cancelOrder` with an order ID belonging to Staff (`usr_2`).
   * **Result:** Fails. The action throws `403 Forbidden: Not yours`. Middleware let the request through (Almaz is signed in), but the action verified ownership.
3. **Attack:** Craft a sign-in link: `/signin?next=https://evil-site.com`.
   * **Result:** Fails safely. The `signIn` action checks `next.startsWith("/")`. It rejects the absolute URL and redirects to `/` instead.