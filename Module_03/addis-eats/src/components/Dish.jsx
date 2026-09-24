import PropTypes from "prop-types";
import { useCart } from "../context/CartProvider";

function Dish({ id, name, price, currency = "ETB", spicy = false }) {
  const { dispatch } = useCart();

  function handleAdd() {
    dispatch({ type: "add", dish: { id, name, price } });
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