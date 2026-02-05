import { useEffect } from "react";
import "./ModalWithForm.css";

function ModalWithForm({ title, isOpen, onClose, children }) {
  useEffect(() => {
    if (!isOpen) return;

    function handleEsc(evt) {
      if (evt.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal"
      onMouseDown={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="modal__container"
        onMouseDown={(evt) => evt.stopPropagation()}
      >
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
          aria-label="Close"
        />
        <h2 className="modal__title">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default ModalWithForm;
