import Link from "next/link";

const dishes = [
  { id: "kitfo", name: "Kitfo" },
  { id: "doro-wat", name: "Doro Wat" },
  { id: "shiro", name: "Shiro" },
];

export default function DishList() {
  return (
    <ul>
      {dishes.map((dish) => (
        <li key={dish.id}>
          <Link href={`/menu/${dish.id}`}>{dish.name}</Link>
        </li>
      ))}
    </ul>
  );
}