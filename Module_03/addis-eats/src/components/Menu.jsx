import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";
import ErrorBoundary from "./ErrorBoundary";
import MenuUnavailable from "./MenuUnavailable";
import { useFetch } from "../hooks/useFetch";
import { useCart } from "../hooks/useCart";

function Menu() {
  const [params, setParams] = useSearchParams();
  const category = params.get("category") ?? "All";
  const { total } = useCart();
  const { data: dishes, loading, error } = useFetch(category);
  const searchInputRef = useRef(null);
  const [crashNextDish, setCrashNextDish] = useState(false);

  const handleSelectCategory = useCallback(
    (cat) => setParams({ category: cat }),
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
        style={{ marginBottom: "10px", padding: "8px", width: "100%", boxSizing: "border-box" }}
      />

      <CategoryBar selected={category} onSelect={handleSelectCategory} />

      {/* Exercise 1: wrap the menu list in an ErrorBoundary */}
      <ErrorBoundary fallback={<MenuUnavailable />}>
        <DishList dishes={dishes} crashFirstDish={crashNextDish} />
      </ErrorBoundary>

      <p style={{ marginTop: "16px" }}>
        <strong>Running total: {total} ETB</strong>
      </p>

      {/* Just for testing the boundary. Delete this in a real app. */}
      <label style={{ fontSize: "0.85em", color: "#888" }}>
        <input
          type="checkbox"
          checked={crashNextDish}
          onChange={(e) => setCrashNextDish(e.target.checked)}
        />{" "}
        Simulate a render crash in the first dish
      </label>
    </div>
  );
}

export default Menu;