// JokeModal.js
import React from 'react';
import './index.css'
 // Create a CSS file for styling your modal

const JokeModal = ({ joke, onClose }) => {
  return (
    <div className="container-pop">
        <h4 className='heading-random-joke'>Random joke</h4>
      <div className="modal-content">
        <span className="close-pop" onClick={onClose}>&times;</span>
        <p>{joke}</p>
      </div>
    </div>
  );
};

export default JokeModal;
