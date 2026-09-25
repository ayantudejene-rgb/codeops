import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>404 — Page not found</h2>
      <p>We couldn't find what you were looking for.</p>
      <Link to="/">Back to home</Link>
    </div>
  );
}