import Link from "next/link";
import { notFound } from "next/navigation";

async function getDish(id) {
  const dishes = {
    kitfo: { name: "Kitfo", price: 180 },
    "doro-wat": { name: "Doro Wat", price: 220 },
    shiro: { name: "Shiro", price: 120 },
  };
  return dishes[id];
}

export async function generateStaticParams() {
  return [{ id: "kitfo" }, { id: "doro-wat" }, { id: "shiro" }];
}

export default async function DishPage({ params }) {
  const { id } = await params;
  const dish = await getDish(id);
  
  if (!dish) notFound();

  return (
    <main>
      <h1>{dish.name}</h1>
      <p>Price: {dish.price} ETB</p>
      <Link href="/menu">Back to menu</Link>
    </main>
  );
}