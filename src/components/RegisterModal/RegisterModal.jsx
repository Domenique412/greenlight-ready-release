import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

function RegisterModal({ isOpen, onClose, onSwitch }) {
  return (
    <ModalWithForm
      title="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onClose}
      contentClassName="register-modal"
    >
      <div className="register__modal">
        <label className="modal__label" htmlFor="registerName">
          Name
        </label>
        <input
          className="modal__input"
          type="text"
          id="registerName"
          placeholder="Name"
          required
        />
        <label className="modal__label" htmlFor="registerEmail">
          Email
        </label>
        <input
          className="modal__input"
          type="email"
          placeholder="Email"
          id="registerEmail"
          required
        />
        <label className="modal__label" htmlFor="registerPassword">
          Password
        </label>
        <input
          className="modal__input"
          type="password"
          placeholder="Password"
          id="registerPassword"
          required
        />
        <button className="modal__submit" type="submit">
          {" "}
          Register
        </button>
        <button className="modal__switch" type="button" onClick={onSwitch}>
          Already have an account? Sign in
        </button>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
