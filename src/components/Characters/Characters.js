import './styles.css';
import Character from './Character';
import { getCharacters } from '../../services/api';
import { useState, useEffect } from 'react';
import Pagination from '../Pagination';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [pagination, setPagination] = useState({
    limit: null,
    page: null,
    pages: null,
    total: null,
  });

  useEffect(() => {
    const getAllCharacters = async () => {
      const characters = await getCharacters();
      setCharacters(characters.docs);
      setPagination({
        limit: characters.limit,
        page: characters.page,
        pages: characters.pages,
        total: characters.total,
      });
    };

    getAllCharacters();
  }, []);

  const onChangePagination = async (newPagination) => {
    setPagination({ ...newPagination });
    const characters = await getCharacters(pagination);
    setCharacters(characters.docs);
  };

  return (
    <div className='container'>
      <div className='flex'>
        <div className='row row-cols-5'>
          {characters.map((character) => (
            <div className='col my-2' key={character._id}>
              <Character character={character} />
            </div>
          ))}
        </div>
      </div>
      <Pagination
        pagination={pagination}
        handlePagination={(e) => onChangePagination(e)}
      />
    </div>
  );
};

export default Characters;
