"use client";

import { useState } from "react";

export default function FilterShell({ children }) {
  const [filter, setFilter] = useState("All");

  return (
    <div>
      <div>
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Meat")}>Meat</button>
        <button onClick={() => setFilter("Vegetarian")}>Vegetarian</button>
      </div>
      <p>Filtering by: {filter}</p>
      {children}
    </div>
  );
}