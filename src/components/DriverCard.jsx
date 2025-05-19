import React, { useState } from 'react';

function DriverCard({ name= "Driver" , team="Team" }){

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
              <h3>{name}</h3>
              <h4>{team}</h4>
          </div>
      </div>
    </div>

  );
}

export default DriverCard;