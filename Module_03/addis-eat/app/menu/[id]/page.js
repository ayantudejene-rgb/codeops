import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";

// 1. Generate Metadata
export async function generateMetadata({ params }) {
  const { id } = await params;
  const dish = db.dishes.find((d) => d.id === id);

  if (!dish) {
    return { title: "Dish not found" };
  }

  return {
    title: dish.name,
    description: `${dish.name} – ${dish.price} ETB.`,
  };
}

export async function generateStaticParams() {
  return db.dishes.map((dish) => ({
    id: dish.id,
  }));
}

export default async function DishPage({ params }) {
  const { id } = await params;
  const dish = db.dishes.find((d) => d.id === id);

  if (!dish) notFound();

  // 2. Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MenuItem",
    name: dish.name,
    offers: {
      "@type": "Offer",
      price: dish.price,
      priceCurrency: "ETB",
    },
  };

  return (
    <main>
      {/* Render the JSON-LD script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Exactly one h1 */}
      <h1>{dish.name}</h1>
      <p>Price: {dish.price} ETB</p>
      <Link href="/menu">Back to menu</Link>
    </main>
  );
}