import PropTypes from "prop-types";
import Dish from "./Dish";
import Card from "./Card";

function DishList({ dishes, onAddToOrder }) {
  if (dishes.length === 0) {
    return <p>No dishes in this category yet.</p>;
  }

  return (
    <div className="menu">
      {dishes.map((dish) => (
        <Card key={dish.id}>
          <Dish {...dish} onAdd={onAddToOrder} />
        </Card>
      ))}
    </div>
  );
}

DishList.propTypes = {
  dishes: PropTypes.array.isRequired,
  onAddToOrder: PropTypes.func.isRequired,
};

export default DishList;