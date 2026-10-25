import { Suspense } from "react";
import MenuClient from "./MenuClient";
import { db } from "@/lib/db";

export const revalidate = 3600;

export default async function MenuPage() {
  // Fetch page 1 on the server
  const initialDishes = db.dishes.slice(0, 2);

  return (
    <main>
      <h1>Menu</h1>
      <Suspense fallback={<p>Loading menu...</p>}>
        <MenuClient 
          initialData={{ data: initialDishes, page: 1, totalPages: 2 }} 
        />
      </Suspense>
    </main>
  );
}