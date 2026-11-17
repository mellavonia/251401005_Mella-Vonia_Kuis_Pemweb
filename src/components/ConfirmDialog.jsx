function ConfirmDialog({ message, onConfirm, onCancel }) {
  return (
    <div className="overlay">
      <div className="modal small">
        <h3>{message}</h3>
        <p>Tindakan ini tidak dapat dibatalkan.</p>
        <div className="actions">
          <button className="btn" onClick={onCancel}>
            Batal
          </button>
          <button className="btn btn-danger" onClick={onConfirm}>
            Ya, Hapus
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;