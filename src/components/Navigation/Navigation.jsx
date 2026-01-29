// src/components/Navigation/Navigation.jsx
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink className="navigation__link" to="/">
        Home
      </NavLink>
      <NavLink className="navigation__link" to="/about">
        About
      </NavLink>
      <button className="navigation__button" type="button">
        Sign in
      </button>
    </nav>
  );
}

export default Navigation;
