import Link from "next/link";
import { notFound } from "next/navigation";

const dishes = {
  kitfo: { name: "Kitfo", price: 180 },
  "doro-wat": { name: "Doro Wat", price: 220 },
  shiro: { name: "Shiro", price: 120 },
};

export default async function DishPage({ params }) {
  const { id } = await params; // Next 15: params is a Promise; still props, not a hook
  const dish = dishes[id];
  if (!dish) notFound();
  return (
    <main>
      <h1>{dish.name}</h1>
      <p>Route id: {id}</p>
      <p>Price: {dish.price} ETB</p>
      <Link href="/menu">Back to menu</Link>
    </main>
  );
}