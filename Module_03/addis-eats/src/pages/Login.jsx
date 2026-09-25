import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [phone, setPhone] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname ?? "/menu";

  function handleSubmit(e) {
    e.preventDefault();
    if (phone) {
      login(phone);
      navigate(from, { replace: true });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign in</h2>
      <p style={{ color: "#666" }}>Enter your TeleBirr phone to continue.</p>
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="09... or +2519..."
        style={{ padding: "8px", marginRight: "8px" }}
      />
      <button type="submit" disabled={!phone}>Sign in</button>
    </form>
  );
}