import { useState } from "react";
import PropTypes from "prop-types";

function Dish({ name, price, currency = "ETB", spicy = false, onAdd }) {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
    if (onAdd) onAdd(price); // Notify parent to update total
  }

  return (
    <div className="dish">
      <h3>
        {name} {spicy && <span>· Spicy</span>}
      </h3>
      <p>
        {price} {currency}
      </p>
      <button onClick={handleAdd}>
        Add ({count})
      </button>
    </div>
  );
}

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string,
  spicy: PropTypes.bool,
  onAdd: PropTypes.func,
};

export default Dish;