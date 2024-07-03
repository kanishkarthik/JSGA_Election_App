import Modal from 'react-modal';

// create type for VoteConfirmationModal arguments params
type ConfirmationModalProps = {
    onConfirm: () => void,
    onCancel: () => void,
    isOpen: boolean,
    title : string,
    message : string
}

const ConfirmationModal = ({ isOpen, title, message, onCancel, onConfirm } : ConfirmationModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCancel}
      contentLabel="Vote Confirmation"
      className="vote-modal"
      overlayClassName="vote-modal-overlay"
    >
      <h2>{title}</h2>
      <p>{message}</p>
      <div className="modal-buttons">
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onCancel}>No</button>
      </div>
    </Modal>
  );
};
export default ConfirmationModal;
