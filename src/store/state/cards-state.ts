import { useState } from 'react';


const CardState = () => {
  const [reveal, toggleReveal] = useState(false);
  
  const revealCards = () => {
    toggleReveal(!reveal);
  };


  return {
    reveal,
    revealCards,
  };
}

export default CardState;