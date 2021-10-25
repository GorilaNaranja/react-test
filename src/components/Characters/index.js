import './styles.css';
import Character from './Character';
import { getCharacters } from '../../services/api';
import { useState, useEffect } from 'react';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getAllCharacters = async () => {
      const characters = await getCharacters();
      setCharacters(characters.docs);
    };

    getAllCharacters();
  }, []);

  return (
    <div className='container'>
      <div className='d-flex'>
        {characters.map((character) => (
          <Character character={character} />
        ))}
      </div>
    </div>
  );
};

export default Characters;
