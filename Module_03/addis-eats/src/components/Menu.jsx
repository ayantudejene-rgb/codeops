import PropTypes from "prop-types";
import Dish from "./Dish";
import Card from "./Card";

function Menu({ dishes, category = "All" }) {
  if (!dishes || dishes.length === 0) {
    return <p>No dishes found.</p>;
  }

  const filteredDishes =
    category === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === category);

  if (filteredDishes.length === 0) {
    return <p>No dishes found in {category}.</p>;
  }

  return (
    <div className="menu">
      {filteredDishes.map((dish) => (
        <Card key={dish.id}>
          <Dish {...dish} />
        </Card>
      ))}
    </div>
  );
}

Menu.propTypes = {
  dishes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      spicy: PropTypes.bool,
    })
  ).isRequired,
  category: PropTypes.string,
};

export default Menu;