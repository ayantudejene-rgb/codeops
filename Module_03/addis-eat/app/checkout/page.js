import Link from "next/link";
import { cookies } from "next/headers";
import CheckoutButton from "./CheckoutButton";

export default async function CheckoutPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session");

  return (
    <main>
      <h1>Checkout</h1>
      {session ? <p>Logged in</p> : <p>Guest checkout</p>}
      <CheckoutButton />
      <Link href="/">Home</Link>
    </main>
  );
}