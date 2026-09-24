import { useState, useEffect, useRef } from "react";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";
import OrderForm from "./OrderForm";
import { fetchDishes } from "../api";

function Menu() {
  const [dishes, setDishes] = useState([]);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);

  // Exercise 7: useRef for the search input
  const searchInputRef = useRef(null);

  // Derive the filtered list
  const filteredDishes =
    category === "All"
      ? dishes
      : dishes.filter((d) => d.category === category);

  // Exercise 1: Update document.title based on the number of dishes shown
  useEffect(() => {
    document.title = `Addis Eats - ${filteredDishes.length} items`;
  }, [filteredDishes]);

  // Exercise 7: Focus the search input on mount
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  // Exercises 2, 3, 5, 6: Fetch data, handle loading/error, category dependency, AbortController
  useEffect(() => {
    const ctrl = new AbortController();
    setLoading(true);
    setError(null);

    async function load() {
      try {
        const data = await fetchDishes(ctrl.signal);
        setDishes(data);
      } catch (e) {
        if (e.name !== "AbortError") {
          setError(e.message);
        }
      } finally {
        // Exercise 3: setLoading(false) in finally so the spinner never gets stuck
        setLoading(false);
      }
    }
    load();

    // Exercise 6: Cleanup function to abort the previous request
    return () => ctrl.abort();
  }, [category]); // Exercise 5: category is in the dependency array

  function addToOrder(price) {
    setTotal(total + price);
  }

  // Exercise 3: Early returns for loading and error states
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
      
      <CategoryBar selected={category} onSelect={setCategory} />
      
      <DishList dishes={filteredDishes} onAddToOrder={addToOrder} />
      
      <div className="order-total">
        <h3>Order Total: {total} ETB</h3>
      </div>

      <OrderForm />
    </div>
  );
}

export default Menu;