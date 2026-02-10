import Navigation from "../Navigation/Navigation.jsx";
import "./Header.css";

function Header({ onLogInClick, onSignUpClick }) {
  return (
    <header className="header">
      <div className="header__container">
        <Navigation onLogInClick={onLogInClick} onSignUpClick={onSignUpClick} />
      </div>
    </header>
  );
}

export default Header;
