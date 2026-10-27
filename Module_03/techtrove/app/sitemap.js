import { db } from "@/lib/db";

export default async function sitemap() {
  const baseUrl = "https://techtrove.vercel.app";
  const products = db.products.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "yearly", priority: 1 },
    { url: `${baseUrl}/products`, lastModified: new Date(), changeFrequency: "hourly", priority: 0.9 },
    ...products,
  ];
}