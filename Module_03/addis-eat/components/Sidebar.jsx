"use client";

import { useState } from "react";

export default function Sidebar() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Categories</h3>
      <ul>
        <li>All</li>
        <li>Meat</li>
        <li>Vegetarian</li>
      </ul>
      <hr />
      <p>Layout State: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}