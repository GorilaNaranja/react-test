import './styles.css';
import Character from './Character';
// import { getCharacters } from '../../services/api';
// import { useState, useEffect } from 'react';

// const useCharactersState = async () => {
//   const [characters, setCharacters] = useState([]);

//   try {
//     const response = await getCharacters();
//     setCharacters(response.docs);
//   } catch (error) {
//     console.log('ERROR: ', error);
//   }

//   return { characters, setCharacters };
// };

const Characters = () => {
  // useEffect(() => {
  //   const response = await getCharacters();
  //   setCharacters(response.docs);
  // }, []);

  // const { characters } = useCharactersState();
  // console.log('CHARACTERS: ', characters);

  const characters = [
    {
      name: 'Sauron',
      haracter: 'a',
      death: '2021',
      gender: 'Male',
      hair: 'Red',
      race: 'Elf',
      realm: 'asd',
      spouse: 'ASD',
      wikiUrl: 'https://lotr.fandom.com/wiki/Sauron',
      _id: '123',
    },
    {
      name: 'Gandalf',
      haracter: 'b',
      death: '2020',
      gender: 'Male',
      hair: 'White',
      race: 'Wizard',
      realm: 'dsa',
      spouse: 'DSA',
      wikiUrl: 'https://lotr.fandom.com/wiki/Gandalf',
      _id: '123',
    },
  ];

  return (
    <div className='container'>
      <div className='d-flex'>
        {characters.map((character) => (
          <Character character={character} />
        ))}{' '}
      </div>
    </div>
  );
};

export default Characters;
