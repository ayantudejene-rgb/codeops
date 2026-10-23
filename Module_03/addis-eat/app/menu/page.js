import { Suspense } from "react";
import DishList from "./DishList";

// Revalidate at most once an hour
export const revalidate = 3600;

export default function MenuPage() {
  return (
    <main>
      <h1>Menu</h1>
      <Suspense fallback={<p>Loading dishes...</p>}>
        <DishList />
      </Suspense>
    </main>
  );
}