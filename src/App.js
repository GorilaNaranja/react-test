import React, { Component, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

// function Hello(props) {
//   return <h1>{props.title}</h1>
// }

const Hello = (props) => <h3>{props.title}</h3>;

class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 1 };

    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  render() {
    return <span>{this.state.count}</span>;
  }
}

class Hola extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <h3>{this.props.defautlName}</h3>
      </div>
    );
  }
}

Hola.defaultProps = {
  title: 'My default title',
  defautlName: 'Felipe',
};

class Text extends Component {
  render() {
    const { isActive, ages, text, number, car, multiply, description } =
      this.props;
    const info = isActive ? 'Show info' : 'Dont show info';
    const mappedAges = ages.map((age) => age * 2);
    return (
      <div>
        <p>{text}</p>
        <p>{number}</p>
        {description}
        <p>{info}</p>
        <p>{mappedAges.join(', ')}</p>
        <p>{car.marca}</p>
        <p>{multiply(5)}</p>
      </div>
    );
  }
}

function App() {
  return (
    <div className='App'>
      <StarMatch></StarMatch>

      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Counter />
        <Hello title='Component from function' />
        <Hola title='Component from class' />
        <Text
          text='My favourite number: '
          description={<p>My description</p>}
          number={22}
          car={{ marca: 'Toyota', model: 'Yaris' }}
          isActive={true}
          ages={[20, 30, 40]}
          multiply={(number) => number * 2}
        />
      </header>
    </div>
  );
}

/* 
*****************************************************
REACT EXAMPLE STARMATCH GAME
This is a simple game to practice with react concepts
*****************************************************
*/

const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};

const utils = {
  sum: (arr) => arr.reduce((acc, curr) => acc + curr, 0),

  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

  random: (min, max) => min + Math.floor(max * Math.random()),

  randomSumIn: (arr, max) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0, sums.length - 1)];
  },
};

// NUMBER KEYBOARD COMPONENT
const NumberKeyboard = (props) => (
  <button
    className='number'
    style={{ backgroundColor: colors[props.status] }}
    onClick={() => props.onClick(props.number, props.status)}
  >
    {props.number}
  </button>
);

// STARS DISPLAY COMPONENT
const StarsDisplay = (props) =>
  utils
    .range(1, props.count)
    .map((starId) => <div key={starId} className='star'></div>);

// PLAY AGAIN COMPONENT
const PlayAgain = (props) => (
  <div className='game-done'>
    <div
      className='message'
      style={{ color: props.gameStatus === 'lost' ? 'red' : 'green' }}
    >
      {props.gameStatus === 'lost' ? 'Game Over' : 'Nice!'}
    </div>
    <button onClick={props.onClick}>Play Again</button>
  </div>
);

// GAME COMPONENT
const Game = (props) => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    if (secondsLeft > 0 && availableNums.length > 0) {
      const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  });

  const candidatesAreWrong = utils.sum(candidateNums) > stars;
  const gameStatus =
    availableNums.length === 0 ? 'won' : secondsLeft === 0 ? 'lost' : 'active';

  // const resetGame = () => {
  //   setStars(utils.random(1, 9));
  //   setAvailableNums(utils.range(1, 9));
  //   setCandidateNums([]);
  // };

  const numberStatus = (number) => {
    if (!availableNums.includes(number)) {
      return 'used';
    }
    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }
    return 'available';
  };

  const onNumberClick = (number, currentStatus) => {
    if (gameStatus !== 'active' || currentStatus === 'used') {
      return;
    }

    const newCandidateNums =
      currentStatus === 'available'
        ? candidateNums.concat(number)
        : candidateNums.filter((cn) => cn !== number);

    if (utils.sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(
        (n) => !newCandidateNums.includes(n)
      );
      setStars(utils.randomSumIn(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  };

  return (
    <div className='game'>
      <div className='help'>
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className='body'>
        <div className='left'>
          {gameStatus !== 'active' ? (
            <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus} />
          ) : (
            <StarsDisplay count={stars} />
          )}
        </div>

        <div className='right'>
          {utils.range(1, 9).map((number) => (
            <NumberKeyboard
              key={number}
              number={number}
              status={numberStatus(number)}
              onClick={onNumberClick}
            />
          ))}
        </div>
      </div>
      <div className='timer'>Time Remaining: {secondsLeft}</div>
    </div>
  );
};

// STAR MATCH COMPONENT
const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
};

export default App;
