function Dialog({ onClose }) {
  return (
    <div className="dialog-overlay">
      <div className="dialog">
        <h2>Rate Your Experience</h2>
        <p>Thank you for taking the time to share your feedback!</p>
        <button className="dialog-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
 
export default Dialog;