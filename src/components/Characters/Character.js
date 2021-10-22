const Character = ({ character }) => {
  return (
    <div className='container'>
      <div class='card'>
        <img
          src='https://bit.ly/30VFZnD'
          class='card-img-top'
          alt='Character-profile'
        />
        <div class='card-body'>
          <h5 class='card-title character-info'>{character.name}</h5>
          <p class='card-text'>{character.birth}</p>
          <p class='card-text'>Death: {character.death}</p>
          <p class='card-text'>Gender: {character.gender}</p>
          <p class='card-text'>Hair: {character.hair}</p>
          <p class='card-text'>Race: {character.race}</p>
          <p class='card-text'>Realm: {character.realm}</p>
          <p class='card-text'>Spouse: {character.spouse}</p>
          <a href={character.wikiUrl} class='btn btn-primary'>
            See Wiki
          </a>
        </div>
      </div>
    </div>
  );
};

export default Character;
