import "./modal.css";

function Modal({ isOpen, onClose, children, title = "Janela" }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-window">
        
        <div className="modal-header">
          <span>{title}</span>
          <button className="close-btn" onClick={onClose}>X</button>
        </div>

        <div className="modal-body">
          {children}
        </div>

      </div>
    </div>
  );
}

export default Modal;