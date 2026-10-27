import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = db.products.find((p) => p.id === id);
  if (!product) return { title: "Product not found" };
  return { title: product.name, description: `Buy ${product.name} for $${product.price}.` };
}

export async function generateStaticParams() {
  return db.products.map((product) => ({ id: product.id }));
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = db.products.find((p) => p.id === id);

  if (!product) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    offers: { "@type": "Offer", price: product.price, priceCurrency: "USD" },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <Link href="/products">Back to products</Link>
    </main>
  );
}