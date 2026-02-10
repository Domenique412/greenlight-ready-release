import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__signature">Developed by Domenique Watkins-Wise</p>
      <NavLink className="footer__navigation-link" to="/about">
        About
      </NavLink>
      <p className="footer__year">2026</p>
    </footer>
  );
}

export default Footer;
