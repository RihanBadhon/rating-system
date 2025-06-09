import React from 'react';
import { FaStar } from 'react-icons/fa';
import style from '../style/StarComponent.module.css';


function StarComponent ({ index, selected, onClick }) {
  return (
    <FaStar
        className={`${style['star-icon']} ${selected ? style.selected : ''}`}
        onClick={() => onClick(index)}
    />
  );
};

export default StarComponent;