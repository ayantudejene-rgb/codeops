import { Suspense } from "react";
import DishList from "@/components/DishList";
import FilterShell from "@/components/FilterShell";

export const revalidate = 3600;

// Simulating a database fetch
async function getDishes() {
  return [
    { id: "kitfo", name: "Kitfo", price: 180, category: "Meat" },
    { id: "doro-wat", name: "Doro Wat", price: 220, category: "Meat" },
    { id: "shiro", name: "Shiro", price: 120, category: "Vegetarian" },
  ];
}

export default async function MenuPage() {
  const dishes = await getDishes();

  return (
    <main>
      <h1>Menu</h1>
      {/* FilterShell is a Client Component receiving Server JSX via children */}
      <FilterShell>
        <Suspense fallback={<p>Loading dishes...</p>}>
          <DishList dishes={dishes} />
        </Suspense>
      </FilterShell>
    </main>
  );
}