import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import ScoreBoard from './components/ScoreBoard';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [winningSquares, setWinningSquares] = useState([]);

  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (updatedBoard) => {
    for (let condition of WIN_CONDITIONS) {
      const [a, b, c] = condition;
      if (updatedBoard[a] && updatedBoard[a] === updatedBoard[b] && updatedBoard[b] === updatedBoard[c]) {
        setWinningSquares(condition);
        return updatedBoard[a]; // 'X' or 'O'
      }
    }
    return null;
  };

  const handleBoxClick = (boxIdx) => {
    if (board[boxIdx] || gameOver) return;

    const updatedBoard = board.map((value, index) =>
      index === boxIdx ? (xPlaying ? 'X' : 'O') : value
    );

    const winner = checkWinner(updatedBoard);
    if (winner) {
      setScores(prev => ({
        ...prev,
        xScore: winner === 'X' ? prev.xScore + 1 : prev.xScore,
        oScore: winner === 'O' ? prev.oScore + 1 : prev.oScore,
      }));
      setGameOver(true);
    }

    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  };

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setGameOver(false);
    setWinningSquares([]);
  };

  return (
    <div className="app">
      <Header />
      <ScoreBoard scores={scores} xPlaying={xPlaying} />
      <GameBoard board={board} onClick={handleBoxClick} winningSquares={winningSquares} />
      <button className="reset-button" onClick={resetBoard}>
        Reset Game
      </button>
    </div>
  );
};

export default App;
