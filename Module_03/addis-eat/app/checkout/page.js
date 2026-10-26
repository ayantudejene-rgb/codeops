import { cookies } from "next/headers";
import CheckoutForm from "./CheckoutForm";
export const metadata = {
  title: "Checkout",
  description: "Complete your order securely.",
};

export default async function CheckoutPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session");

  return (
    <main>
      <h1>Checkout</h1>
      <p>{session ? "Logged in" : "Guest checkout"}</p>
      <CheckoutForm />
    </main>
  );
}