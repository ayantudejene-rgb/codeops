import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  marginRight: "14px",
  textDecoration: "none",
  color: isActive ? "#e74c3c" : "#2c3e50",
  fontWeight: isActive ? "bold" : "normal",
  borderBottom: isActive ? "2px solid #e74c3c" : "none",
  paddingBottom: "2px",
});

export default function Nav() {
  return (
    <nav style={{ marginTop: "10px" }}>
      <NavLink to="/" style={linkStyle} end>Home</NavLink>
      <NavLink to="/menu" style={linkStyle}>Menu</NavLink>
      <NavLink to="/cart" style={linkStyle}>Cart</NavLink>
      <NavLink to="/checkout" style={linkStyle}>Checkout</NavLink>
    </nav>
  );
}