import './Modal.scss';
import React from 'react';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "pokemon-modal display-block" : "pokemon-modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="pokemon-modal-main">
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};


export default Modal;