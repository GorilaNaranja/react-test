import { getBooks } from '../../services/api-books';
import { useState, useEffect } from 'react';
import BookCard from './BookCard';
import { NavLink } from 'react-router-dom';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getAllBooks = async () => {
      const response = await getBooks();
      console.log('Books: ', response);
      setBooks(response);
    };

    getAllBooks();
  }, []);

  return (
    <div className='container h-100'>
      <NavLink className='btn btn-primary' to='/books/create'>
        New Book
      </NavLink>
      <div className='d-flex'>
        <div className='row row-cols-5'>
          {books.map((book) => (
            <div className='col my-2' key={book.id}>
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
