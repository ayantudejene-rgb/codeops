import { getSession } from "@/lib/session";
import CheckoutForm from "./CheckoutForm";

export const metadata = { title: "Checkout", description: "Complete your purchase." };

export default async function CheckoutPage() {
  const user = await getSession();
  return (
    <main>
      <h1>Checkout</h1>
      <p>{user ? `Logged in as ${user.name}` : "Guest checkout"}</p>
      <CheckoutForm />
    </main>
  );
}