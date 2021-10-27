import { useHistory } from 'react-router';

const Character = ({ character }) => {
  const history = useHistory();

  const visitDetails = () => {
    history.push(`/characters/${character._id}`);
  };

  return (
    <div className='container'>
      <div className='card'>
        <img
          src='https://bit.ly/30VFZnD'
          className='card-img-top'
          alt='Character-profile'
        />
        <div className='card-body'>
          <p className='card-title text-center fs-4'>{character.name}</p>
          <p className='fw-light'>
            {character.race} - {character.gender}
          </p>
        </div>
        <div className='card-footer d-grid gap-2 text-center'>
          <a href={character.wikiUrl} className='btn btn-primary fs-9'>
            See Wiki
          </a>
          <button className='btn btn-secondary' onClick={visitDetails}>
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Character;
