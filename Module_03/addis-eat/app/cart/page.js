import Link from "next/link";
import CheckoutButton from "./CheckoutButton";

export default function CartPage() {
  return (
    <main>
      <h1>Cart</h1>
      <p>Your cart is empty.</p>
      <CheckoutButton />
      <Link href="/menu">Back to menu</Link>
    </main>
  );
}