import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from '../ModalContent';

export default function Modal({description}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        READ MORE
      </button>
      {showModal && createPortal(
        <ModalContent description={description} onClose={() => setShowModal(false)} />,
        document.body
      )}
    </>
  );
}