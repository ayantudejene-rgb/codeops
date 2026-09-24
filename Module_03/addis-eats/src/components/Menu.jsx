import { useState } from "react";
import PropTypes from "prop-types";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";
import OrderForm from "./OrderForm";

function Menu({ dishes }) {
  const [category, setCategory] = useState("All");
  const [total, setTotal] = useState(0);

  const filteredDishes =
    category === "All"
      ? dishes
      : dishes.filter((d) => d.category === category);

  function addToOrder(price) {
    setTotal(total + price);
  }

  return (
    <div>
      <CategoryBar selected={category} onSelect={setCategory} />
      
      <DishList dishes={filteredDishes} onAddToOrder={addToOrder} />
      
      <div className="order-total">
        <h3>Order Total: {total} ETB</h3>
      </div>

      <OrderForm />
    </div>
  );
}

Menu.propTypes = {
  dishes: PropTypes.array.isRequired,
};

export default Menu;