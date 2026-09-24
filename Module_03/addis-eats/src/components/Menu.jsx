import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";
import OrderForm from "./OrderForm";
import { useFetch } from "../hooks/useFetch";
import { useCart } from "../context/CartProvider";

function Menu() {
  const [category, setCategory] = useState("All");
  const { total } = useCart();
  const { data: dishes, loading, error } = useFetch(category);
  const searchInputRef = useRef(null);

  // Exercise 7: useCallback for a function passed to a memoized child
  const handleSelectCategory = useCallback((cat) => {
    setCategory(cat);
  }, []);

  // Justified useMemo: deriving a value from fetched data
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
      
      <DishList dishes={dishes} />
      
      <div className="order-total">
        <h3>Order Total: {total} ETB</h3>
      </div>

      <OrderForm />
    </div>
  );
}

export default Menu;