import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}