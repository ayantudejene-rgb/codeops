import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

export default function DishCard({ dish }) {
  return (
    <li style={{ marginBottom: "10px" }}>
      <Link href={`/menu/${dish.id}`}>{dish.name}</Link> - {dish.price} ETB
      <br />
      <AddToCartButton dish={dish} />
    </li>
  );
}