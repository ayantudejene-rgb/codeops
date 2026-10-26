import Link from "next/link";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";

export default function DishCard({ dish }) {
  return (
    <li style={{ marginBottom: "20px", listStyle: "none", border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
      <Image 
        src={dish.image}
        alt={`A plate of ${dish.name}`}
        width={400} 
        height={300}
        sizes="(max-width: 768px) 100vw, 400px"
        style={{ objectFit: "cover", borderRadius: "4px" }}
      />
      <h3><Link href={`/menu/${dish.id}`}>{dish.name}</Link></h3>
      <p>Price: {dish.price} ETB</p>
      <AddToCartButton dish={dish} />
    </li>
  );
}