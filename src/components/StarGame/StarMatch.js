import React, { useState } from 'react';
import Game from './Game';

/* 
*****************************************************
REACT EXAMPLE STARMATCH GAME
This is a simple game to practice with react concepts
*****************************************************
*/

const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
};

export default StarMatch;
