import { useCartStore } from "../store/cartStore";

export default function CartBadge() {
  // Select only what we need
  const count = useCartStore((s) => s.items.length);
  return <span className="badge">Cart: {count}</span>;
}