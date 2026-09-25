import { Link } from "react-router-dom";
import TotalDishes from "../components/TotalDishes";

export default function Home() {
  return (
    <div>
      <h2>Welcome to Addis Eats</h2>
      <p>Today's specials are waiting for you.</p>
      <p><TotalDishes /></p>
      <Link to="/menu">Browse the full menu →</Link>
    </div>
  );
}