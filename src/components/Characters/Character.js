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
        <div className='card-title character-info accordion' id={character._id}>
          <div className='accordion-item'>
            <h2 className='accordion-header' id={character._id}>
              <button
                className='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target={`#collapse-${character._id}`}
                aria-expanded='false'
                aria-controls={`collapse-${character._id}`}
              >
                {character.name}
              </button>
            </h2>
            <div
              id={`collapse-${character._id}`}
              className='accordion-collapse collapse show'
              aria-labelledby={character._id}
              data-bs-parent={`#accordion-${character._id}`}
            >
              <div className='accordion-body'>
                birth: {character.birth}
                Death: {character.death}
                Gender: {character.gender}
                Hair: {character.hair}
                Race: {character.race}
                Realm: {character.realm}
                Spouse: {character.spouse}
              </div>
            </div>
          </div>
        </div>
        <div className='card-body d-flex justify-content-between'>
          <a href={character.wikiUrl} className='btn btn-primary'>
            See Wiki
          </a>

          <button className='btn btn-primary' onClick={visitDetails}>
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Character;
