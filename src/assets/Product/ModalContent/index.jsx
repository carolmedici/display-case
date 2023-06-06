import "./ModalContent.css";
import React from "react";

export default function ModalContent({ description, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <div>{description}</div>
          <button onClick={onClose}>X</button>
        </div>
      </div>
    </div>
  );
}
