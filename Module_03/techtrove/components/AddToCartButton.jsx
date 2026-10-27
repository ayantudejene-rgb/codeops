"use client";

import { useContext } from "react";
import { CartContext } from "@/app/providers";

export default function AddToCartButton({ product }) {
  const { cart, setCart } = useContext(CartContext);

  const handleAdd = () => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <button onClick={handleAdd} style={{ marginTop: "10px" }}>
      Add to Cart
    </button>
  );
}