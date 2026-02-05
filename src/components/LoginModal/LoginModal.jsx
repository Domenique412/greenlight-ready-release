import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, onSwitch }) {
  return (
    <ModalWithForm title="Sign in" isOpen={isOpen} onClose={onClose}>
      <form className="auth" noValidate>
        <label className="auth__label" htmlFor="loginEmail">
          Email
        </label>
        <input
          className="auth__input"
          type="email"
          placeholder="Email"
          id="loginEmail"
          required
        />
        <label className="auth__label" htmlFor="loginPassword">
          Password
        </label>
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          id="loginPassword"
          required
        />
        <button className="auth__submit" type="submit">
          {" "}
          Sign in
        </button>
        <button className="auth__switch" type="button" onClick={onSwitch}>
          Need an account? Sign up
        </button>
      </form>
    </ModalWithForm>
  );
}

export default LoginModal;
