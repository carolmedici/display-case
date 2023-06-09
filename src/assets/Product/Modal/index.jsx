import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from '../ModalContent';
import "./Modal.css"

export default function Modal({ discount, price, description, title, image }) {
  const [showModal, setShowModal] = useState(false);

  
  const discountTag = discount ? <div className="text-red-500 text-right animate-swing">Discount!!</div> : null;

  return (
    <>
      <button className='relative inset-x-3/4 rounded-2xl botton-1 my-2 bg-gray-200 p-2 hover:bg-gray-400 hover:text-white' onClick={() => setShowModal(true)}>
        SEE MORE
      </button>
      {showModal && createPortal(
        <ModalContent discount={discount} price={price} title={title} image={image} description={description} onClose={() => setShowModal(false)} />,
        document.body
      )}
      {discountTag}
    </>
  );
}
