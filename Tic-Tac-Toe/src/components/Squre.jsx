import React from 'react';
import cross from '../assets/cross.jpg'
import circle from '../assets/circle.png'
import './Squre.css'; // optional for styling

const Square = ({ value, onClick }) => {
  const renderSymbol = () => {
    if (value === 'X') return <img src={cross} alt="X" width="40" />;
    if (value === 'O') return <img src={circle} alt="O" width="40" />;
    return null;
  };

  return (
    <button className="square" onClick={onClick}>
      {renderSymbol()}
    </button>
  );
};

export default Square;
