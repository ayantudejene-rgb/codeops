"use client";

export default function AddToCartButton({ dish }) {
  return (
    <button onClick={() => alert(`Added ${dish.name} to cart`)}>
      Add to Cart
    </button>
  );
}