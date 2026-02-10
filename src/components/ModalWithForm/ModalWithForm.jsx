import "./ModalWithForm.css";
import closeModalIcon from "../../images/white_close_btn.svg";

function ModalWithForm({
  title,
  isOpen,
  onClose,
  onSubmit,
  children,
  contentClassName,
}) {
  function handleSubmit(evt) {
    evt.preventDefault();
    if (onSubmit) onSubmit();
  }

  return (
    <div
      className={`modal ${isOpen ? "modal__open" : ""}`}
      onMouseDown={onClose}
    >
      <div
        className={`modal__container ${contentClassName || ""}`}
        onMouseDown={(evt) => evt.stopPropagation()}
      >
        <h2 className="modal__title">{title}</h2>
        <button className="modal__close" type="button" onClick={onClose}>
          <img src={closeModalIcon} alt="Close" className="modal__close-icon" />
        </button>
        <form className="modal__form" onSubmit={handleSubmit} noValidate>
          {children}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
