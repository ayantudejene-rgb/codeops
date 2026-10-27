import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>TechTrove</h1>
      <p>Premium electronics, delivered.</p>
      <Link href="/products">Shop Now</Link>
    </main>
  );
}