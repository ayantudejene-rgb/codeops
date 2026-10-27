import CheckoutButton from "./CheckoutButton";
import Link from "next/link";
export const metadata = {
  title: "Cart",
  description: "Review your order before checkout.",
};

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