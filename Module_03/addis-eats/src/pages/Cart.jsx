import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export default function Cart() {
  const { items, total, remove } = useCart();

  if (items.length === 0) {
    return (
      <p>
        Your cart is empty. <Link to="/menu">Go to the menu</Link>
      </p>
    );
  }

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: "6px" }}>
            {item.name} — {item.price} ETB{" "}
            <button onClick={() => remove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p><strong>Total: {total} ETB</strong></p>
      <Link to="/checkout">Go to checkout →</Link>
    </div>
  );
}