import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({ onLogInClick, onSignUpClick }) {
  return (
    <nav className="navigation">
      <NavLink className="navigation__logo" to="/">
        GRR
      </NavLink>
      <div className="navigation__controls">
        <button
          className="navigation__button"
          type="button"
          onClick={onSignUpClick}
        >
          Sign up
        </button>
        <button
          className="navigation__button"
          type="button"
          onClick={onLogInClick}
        >
          Log in
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
