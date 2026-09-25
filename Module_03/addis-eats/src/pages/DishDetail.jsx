import { useParams, Link } from "react-router-dom";
import { useDish } from "../hooks/useDish";
import { useCart } from "../context/CartProvider";

export default function DishDetail() {
  const { id } = useParams();
  const { dish, loading, error, notFound } = useDish(id);
  const { dispatch } = useCart();

  if (loading) return <p>Loading dish...</p>;
  if (error) return <p className="err">{error}</p>;
  if (notFound || !dish) {
    return (
      <div>
        <p>No dish called "{id}" was found.</p>
        <Link to="/menu">Back to menu</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{dish.name}</h2>
      <p>{dish.price} ETB</p>
      <p>Category: {dish.category}</p>
      {dish.spicy && <p>· Spicy</p>}
      <button onClick={() => dispatch({ type: "add", dish })}>
        Add to Cart
      </button>
      <p style={{ marginTop: "16px" }}>
        <Link to="/menu">← Back to menu</Link>
      </p>
    </div>
  );
}