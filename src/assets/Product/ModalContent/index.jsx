import "./ModalContent.css";
import React from "react";

const ModalContent = ({ price, image, title, description, onClose, discount }) => {
  const discountedPrice = discount ? price - (price * discount) / 100 : price;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="button hover:text-red-300 font-bold" onClick={onClose}>
          X
        </button>
        <div className="modal-content flex">
          <img className="w-1/2" src={image} alt="Necklace image" />
          <div className="column">
            <h1 className="text-center font-bold text-3xl">{title}</h1>
            <p className="m-4 text-justify">{description}</p>
            {discount ? (
              <div className="price-container">
                <div className="original-price text-xl ml-4 line-through"> ${price}</div> 
                <br />
                <div className="discounted-price text-xl font-bold ml-4">Now ${discountedPrice} !</div>
              </div>
            ) : (
              <p className="text-xl font-bold ml-4">Price: ${price}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
