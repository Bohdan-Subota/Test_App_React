import './LogoutModal.scss';

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const LogoutModal = ({ isOpen, onClose, onConfirm }: LogoutModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal__title">Confirm Logout</h2>
        <p className="modal__text">Are you sure you want to logout?</p>
        <div className="modal__buttons">
          <button 
            className="modal__button modal__button--secondary" 
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            className="modal__button modal__button--primary" 
            onClick={onConfirm}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal; 