import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>404 - Not Found</h1>
      <p>We could not find what you were looking for.</p>
      <Link href="/products">Back to products</Link>
    </main>
  );
}