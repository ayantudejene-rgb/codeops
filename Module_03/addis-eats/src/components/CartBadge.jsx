import { useCart } from "../context/CartProvider";

export default function CartBadge() {
  const { items } = useCart();
  return <span className="badge">Cart: {items.length}</span>;
}