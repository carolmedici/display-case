import "./ModalContent.css";
import React from "react";

export default function ModalContent({ price, image, titule, description, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
      <button className=" button hover:text-red-300 font-bold" onClick={onClose}>X</button>
        <div className="modal-content flex">
        
        <img className="w-1/2" src={image} alt="Necklace image" />
          <span className="column">
            <h1 className="text-center font-bold text-3xl">{titule}</h1>
            <p className="m-4 text-justify">{description}</p>
            <p className="text-xl font-bold ml-4">Price: {price}</p>
          </span>
          
        </div>
      </div>
    </div>
  );
}
