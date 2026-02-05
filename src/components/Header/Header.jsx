import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation.jsx";
import "./Header.css";

function Header({ onSignInClick }) {
  return (
    <header className="header">
      <div className="header__container">
        <Link className="header__logo" to="/">
          GRR
        </Link>
        <Navigation onSignInClick={onSignInClick} />
      </div>
    </header>
  );
}

export default Header;
