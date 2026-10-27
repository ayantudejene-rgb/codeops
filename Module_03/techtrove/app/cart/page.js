"use client";

import { useContext } from "react";
import { CartContext } from "@/app/providers";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const { cart, setCart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <main>
      <h1>Your Cart</h1>
      
      {cart.length === 0 ? (
        <div>
          <p>Your cart is currently empty.</p>
          <Link href="/products">Continue Shopping</Link>
        </div>
      ) : (
        <div>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item) => (
              <li key={item.id} style={{ borderBottom: "1px solid #ccc", padding: "10px 0", display: "flex", alignItems: "center", gap: "20px" }}>
                <Image src={item.image} alt={item.name} width={80} height={80} style={{ objectFit: "cover" }} />
                <div>
                  <h3>{item.name}</h3>
                  <p>${item.price} x {item.quantity}</p>
                  <button onClick={() => removeItem(item.id)} style={{ color: "red", background: "none", border: "none", cursor: "pointer" }}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          
          <h2>Total: ${totalPrice}</h2>
          <Link href="/checkout">
            <button style={{ padding: "10px 20px", marginTop: "10px" }}>Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </main>
  );
}