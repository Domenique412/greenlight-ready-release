import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

function RegisterModal({ isOpen, onClose, onSwitch }) {
  return (
    <ModalWithForm title="Sign up" isOpen={isOpen} onClose={onClose}>
      <form className="auth" noValidate>
        <label className="auth__label" htmlFor="registerName">
          Name
        </label>
        <input
          className="auth__input"
          type="text"
          id="registerName"
          placeholder="Name"
          required
        />
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
          Register
        </button>
        <button className="auth__switch" type="button" onClick={onSwitch}>
          Already have an account? Sign in
        </button>
      </form>
    </ModalWithForm>
  );
}

export default RegisterModal;
