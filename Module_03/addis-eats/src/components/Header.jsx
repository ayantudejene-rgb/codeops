import CartBadge from "./CartBadge";
import TotalDishes from "./TotalDishes";

function Header() {
  return (
    <header>
      <h1>Addis Eats</h1>
      <CartBadge />
      <TotalDishes />
    </header>
  );
}

export default Header;