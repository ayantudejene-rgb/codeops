import CartBadge from "./CartBadge";
import Nav from "./Nav";
import ErrorBoundary from "./ErrorBoundary";
import CartUnavailable from "./CartUnavailable";

export default function Header() {
  return (
    <header style={{ padding: "16px", borderBottom: "1px solid #ddd" }}>
      <h1 style={{ margin: 0 }}>
        Addis Eats{" "}
        {/* Exercise 3 */}
        <ErrorBoundary fallback={<span className="badge badge-err">Cart ?</span>}>
          <CartBadge />
        </ErrorBoundary>
      </h1>
      <Nav />
    </header>
  );
}