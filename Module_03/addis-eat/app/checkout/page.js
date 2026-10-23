import Link from "next/link";
import { cookies } from "next/headers";

export default async function CheckoutPage() {
  // Reading cookies makes this route dynamic because the response depends on the user.
  const cookieStore = await cookies();
  const session = cookieStore.get("session");

  return (
    <main>
      <h1>Checkout</h1>
      <p>Order placed (demo).</p>
      {session ? <p>Logged in</p> : <p>Guest checkout</p>}
      <Link href="/">Home</Link>
    </main>
  );
}