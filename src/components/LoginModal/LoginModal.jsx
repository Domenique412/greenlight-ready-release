import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, onSwitch, contentClassName }) {
  return (
    <ModalWithForm
      title="Log in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onClose}
      contentClassName="login-modal"
    >
      <div className="login__modal">
        <label className="modal__label" htmlFor="loginEmail">
          Email
        </label>
        <input
          className="modal__input"
          type="email"
          placeholder="Email"
          id="loginEmail"
          required
        />
        <label className="modal__label" htmlFor="loginPassword">
          Password
        </label>
        <input
          className="modal__input"
          type="password"
          placeholder="Password"
          id="loginPassword"
          required
        />
        <button className="modal__submit" type="submit">
          {" "}
          Log in
        </button>
        <button className="modal__switch" type="button" onClick={onSwitch}>
          Need an account? Sign up
        </button>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
