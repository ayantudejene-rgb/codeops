"use client";

import { useState } from "react";

export default function Sidebar() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Categories</h3>
      <ul>
        <li>Computers</li>
        <li>Mobile</li>
        <li>Audio</li>
        <li>Watches</li>
        <li>TVs</li>
        <li>Wi-Fi Routers </li>
      </ul>
      <hr />
      <p>Cart Items: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add an Item</button>
    </div>
  );
}