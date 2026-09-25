import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Dish from "./Dish";
import Card from "./Card";

const DishList = React.memo(function DishList({ dishes }) {
  if (dishes.length === 0) {
    return <p>No dishes in this category yet.</p>;
  }

  return (
    <div className="menu">
      {dishes.map((dish) => (
        <Card key={dish.id}>
          <Dish {...dish} />
          <Link to={`/menu/${dish.id}`} style={{ fontSize: "0.9em" }}>
            View details →
          </Link>
        </Card>
      ))}
    </div>
  );
});

DishList.propTypes = {
  dishes: PropTypes.array.isRequired,
};

export default DishList;