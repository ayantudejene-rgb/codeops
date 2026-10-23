import { cookies } from "next/headers";
import CheckoutForm from "./CheckoutForm";

export default async function CheckoutPage() {
  // Reading cookies makes this route dynamic
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