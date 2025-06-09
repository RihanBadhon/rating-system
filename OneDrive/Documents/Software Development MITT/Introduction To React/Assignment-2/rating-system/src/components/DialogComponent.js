import React from 'react';
import style from '../style/DialogComponent.module.css';

function DialogComponent ({ onClose }) {
  const handleButtonClick = () => {
    onClose();
  };

  return (
    <div className={style.DialogComponent}> 
     <p className={style.message}>
      Please Give Us YOur Valuable Rating. Your Rating Is Very Importanbt For Us For Our 
      Further Improvement. Thank You Very Much Once Again
     </p> 
     <button className={style.button} onClick={handleButtonClick}>Close Dialog</button>
    </div>
  );
};

export default DialogComponent;
