import React, { useState } from 'react';
import StarComponent from './StarComponent';
import style from '../style/StarRatingComponent.module.css';

function StarRatingComponent () {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const stars = Array(5).fill(null).map((_, index) => (
    <StarComponent
      key={index}
      index={index}
      selected={index < rating}
      onClick={handleStarClick}
    />
  ));

  const word = rating === 1 ? 'Poor' :
    rating === 2 ? 'Fair' :
    rating === 3 ? 'Good' :
    rating === 4 ? 'Very Good' :
    rating === 5 ? 'Excellent' :
    '';

  return (
    <div className={style['star-rating-container']}> 
      <div className={style.stars}>{stars}</div>
      <div className={style.rating}>
      <h2>{word}</h2>
      </div>
    </div>
  );
};

export default StarRatingComponent;
