import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ savedCount }) => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">
        🇪🇹 HealthGuide <span>Ethiopia</span>
      </NavLink>
      <div className="navbar-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/saved">
          ❤️ Saved <span className="badge">{savedCount}</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;