import React from 'react';

const ScoreBoard = ({ scores, xPlaying }) => {
  const { xScore, oScore } = scores;
  return (
    <div className="scoreboard">
      <span className={`score x-score ${xPlaying ? 'active' : ''}`}>X - {xScore}</span>
      <span className={`score o-score ${!xPlaying ? 'active' : ''}`}>O - {oScore}</span>
    </div>
  );
};

export default ScoreBoard;
