import Link from "next/link";
import DishList from "./DishList";
import CategoryBar from "./CategoryBar";

export default function MenuPage() {
  return (
    <main>
      <h1>Menu</h1>
      <CategoryBar />
      <DishList />
      <Link href="/cart">Go to cart</Link>
    </main>
  );
}