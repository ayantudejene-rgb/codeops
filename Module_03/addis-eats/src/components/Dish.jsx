import { useState } from "react";
import PropTypes from "prop-types";
import { useCartStore } from "../store/cartStore";
import Modal from "./ui/Modal";

function Dish({ id, name, price, currency = "ETB", spicy = false, crash = false }) {
  const addItem = useCartStore((s) => s.addItem);
  const [open, setOpen] = useState(false);

  // Exercise 2: deliberate crash to prove the boundary catches render errors
  if (crash) {
    throw new Error(`Deliberate crash in Dish: ${name}`);
  }

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
      <button onClick={handleAdd}>Add to Cart</button>{" "}
      <button onClick={() => setOpen(true)}>Quick view</button>

      {open && (
        <Modal onClose={() => setOpen(false)} labelledBy="quick-view-title">
          <h2 id="quick-view-title">{name}</h2>
          <p>
            {price} {currency} — {spicy ? "Spicy" : "Not spicy"}
          </p>
          <p>Category: {dishCategoryFallback(id)}</p>
          <button
            onClick={() => {
              addItem({ id, name, price });
              setOpen(false);
            }}
          >
            Add to Cart
          </button>{" "}
          <button onClick={() => setOpen(false)}>Close</button>
        </Modal>
      )}
    </div>
  );
}

// Tiny helper just to keep the demo simple; real data comes from props in production
function dishCategoryFallback() {
  return "See menu for details";
}

Dish.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string,
  spicy: PropTypes.bool,
  crash: PropTypes.bool,
};

export default Dish;