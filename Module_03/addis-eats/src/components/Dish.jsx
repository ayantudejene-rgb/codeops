import PropTypes from "prop-types";
import { useCartStore } from "../store/cartStore";

function Dish({ id, name, price, currency = "ETB", spicy = false }) {
  // Narrow selector: only re-render if addItem changes (never happens)
  const addItem = useCartStore((s) => s.addItem);

  function handleAdd() {
    addItem({ id, name, price });
  }

  return (
    <div className="dish">
      <h3>
        {name} {spicy && <span>· Spicy</span>}
      </h3>
      <p>
        {price} {currency}
      </p>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}

Dish.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string,
  spicy: PropTypes.bool,
};

export default Dish;