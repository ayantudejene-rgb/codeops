import { Suspense } from "react";
import ProductCatalog from "./ProductCatalog";
import { db } from "@/lib/db";

export const revalidate = 3600;

export const metadata = {
  title: "Products",
  description: "Browse our wide selection of premium electronics.",
  alternates: { canonical: "/products" },
};

export default async function ProductsPage() {
  const initialProducts = db.products.slice(0, 2);

  return (
    <main>
      <h1>Products</h1>
      <Suspense fallback={<p>Loading products...</p>}>
        <ProductCatalog initialData={{ data: initialProducts, page: 1, totalPages: 2 }} />
      </Suspense>
    </main>
  );
}