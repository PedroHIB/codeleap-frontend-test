import { Modal } from "../Modal";

type DeletePostModalProps = {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

export function DeletePostModal({
  isOpen,
  onCancel,
  onConfirm,
}: DeletePostModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onCancel}>
      <h3>Are you sure you want to delete this item?</h3>

      <div className="modal-actions">
        <button className="cancel" onClick={onCancel}>
          Cancel
        </button>
        <button className="danger" onClick={onConfirm}>
          Delete
        </button>
      </div>
    </Modal>
  );
}
