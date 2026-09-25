import { useCartStore } from "../store/cartStore";

export function useCart() {
  const items = useCartStore((s) => s.items);
  const addItem = useCartStore((s) => s.addItem);
  const remove = useCartStore((s) => s.remove);
  const clear = useCartStore((s) => s.clear);
  const total = items.reduce((sum, d) => sum + d.price, 0);

  return { items, addItem, remove, clear, total };
}