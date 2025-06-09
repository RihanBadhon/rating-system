import React, { useState } from 'react';
import StarRating from './components/StarRatingComponent';
import Dialog from './components/DialogComponent';
import './App.css';

function App() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);

  const handleOpenDialog = (event) => {
    event.preventDefault(); 
    setSelectedRating(0);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };

  return (
    <div className="App">
      {!isDialogOpen && (
        <div>
          <StarRating selectedRating={selectedRating} onRatingChange={handleRatingChange} />
          <button onClick={handleOpenDialog}>Open Dialog</button>
        </div>
      )}
      {isDialogOpen && (
        <Dialog onClose={handleCloseDialog} />
      )}
    </div>
  );
}

export default App;
