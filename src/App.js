import React, { useState } from 'react';
import './App.css';
import Game from './components/Game';

function App() {
  return (
    <div className='App'>
      <StarMatch></StarMatch>
    </div>
  );
}

/* 
*****************************************************
REACT EXAMPLE STARMATCH GAME
This is a simple game to practice with react concepts
*****************************************************
*/

// STAR MATCH COMPONENT
const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
};

export default App;
