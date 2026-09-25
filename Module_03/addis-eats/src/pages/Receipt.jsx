import { useParams, Link } from "react-router-dom";

export default function Receipt() {
  const { id } = useParams();
  return (
    <div>
      <h2>Order confirmed</h2>
      <p>Your order number is <code>{id}</code>.</p>
      <p>We'll call you shortly to confirm delivery.</p>
      <Link to="/menu">Back to menu</Link>
    </div>
  );
}