import React from 'react';
import './GameStatus.css';

const GameStatus = ({ winner, isXTurn }) => {
  const getStatusMessage = () => {
    if (winner) return `${winner} Wins!`;
    return `Turn: ${isXTurn ? 'X' : 'O'}`;
  };

  return (
    <div className="status">
      <h2>{getStatusMessage()}</h2>
    </div>
  );
};

export default GameStatus;
