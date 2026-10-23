import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Addis Eats</h1>
      <p>Order Ethiopian food, delivered.</p>
      <Link href="/menu">See the menu</Link>
    </main>
  );
}