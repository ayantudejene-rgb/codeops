import DishCard from "./DishCard";

export default function DishList({ dishes }) {
  return (
    <ul>
      {dishes.map((dish) => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </ul>
  );
}