import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { getCharacterById } from '../../services/api';

const CharacterDetail = () => {
  const { _id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    const getCharacter = async () => {
      const character = await getCharacterById(_id);
      setCharacter(character.docs[0]);
    };

    getCharacter();

    console.log('character: ', character);
  }, []);

  return (
    <div>
      <h5>Character detail: {_id}</h5>
      <p>Name: {character.name}</p>
    </div>
  );
};

export default CharacterDetail;
