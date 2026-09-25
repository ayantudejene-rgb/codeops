import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";
import { useFetch } from "../hooks/useFetch";
import { useCart } from "../context/CartProvider";

function Menu() {
  const [params, setParams] = useSearchParams();
  const category = params.get("category") ?? "All";
  const { total } = useCart();
  const { data: dishes, loading, error } = useFetch(category);
  const searchInputRef = useRef(null);

  const handleSelectCategory = useCallback(
    (cat) => {
      setParams({ category: cat });
    },
    [setParams]
  );

  const itemCount = useMemo(() => dishes.length, [dishes]);

  useEffect(() => {
    document.title = `Addis Eats - ${itemCount} items`;
  }, [itemCount]);

  useEffect(() => {
    if (searchInputRef.current) searchInputRef.current.focus();
  }, []);

  if (loading) return <p>Loading the menu...</p>;
  if (error) return <p className="err">{error}</p>;

  return (
    <div>
      <input
        ref={searchInputRef}
        type="text"
        placeholder="Search dishes..."
        style={{
          marginBottom: "10px",
          padding: "8px",
          width: "100%",
          boxSizing: "border-box",
        }}
      />

      <CategoryBar selected={category} onSelect={handleSelectCategory} />

      <DishList dishes={dishes} />

      <p style={{ marginTop: "16px" }}>
        <strong>Running total: {total} ETB</strong>
      </p>
    </div>
  );
}

export default Menu;