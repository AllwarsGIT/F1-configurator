import React, { useState } from 'react';

function Card(){

  const [activeGradient, setActiveGradient] = useState(false);
  const [fixedOpacity, setFixedOpacity] = useState(false);

  const handleClick = () => {
    setActiveGradient(!activeGradient);
    setFixedOpacity(!fixedOpacity);
  }

  return (
    <div className={fixedOpacity ? '' : 'card-container'}>
      <div className="card-rotate">
           <div className={`card ${activeGradient ? 'active-gradient' : ''} ${fixedOpacity ? 'card-opacity-set' : ''}`}onClick={ handleClick}>
              
          </div>
      </div>
    </div>

  );
}

export default Card;