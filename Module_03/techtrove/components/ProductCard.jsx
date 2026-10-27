import Link from "next/link";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard({ product }) {
  return (
    <li style={{ marginBottom: "20px", listStyle: "none", border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={300}
        sizes="(max-width: 768px) 100vw, 400px"
        style={{ objectFit: "cover", borderRadius: "4px" }}
      />
      <h3><Link href={`/products/${product.id}`}>{product.name}</Link></h3>
      <p>Price: ${product.price}</p>
      <AddToCartButton product={product} />
    </li>
  );
}