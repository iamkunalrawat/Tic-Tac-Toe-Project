import React from 'react';

const GameBoard = ({ board, onClick, winningSquares }) => {
  return (
    <div className="board">
      {board.map((value, index) => (
        <button
          key={index}
          className={`square ${winningSquares.includes(index) ? 'winning' : ''}`}
          onClick={() => onClick(index)}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default GameBoard;
