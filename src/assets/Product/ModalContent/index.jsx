export default function ModalContent({ items, onClose }) {
  
    return (
      <div className="modal">
        <div>Modal test</div>
        <button onClick={onClose}>X</button>
      </div>
    );
  }