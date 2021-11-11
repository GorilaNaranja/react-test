import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getBookById, deleteBook } from '../../services/api-books';
import { useHistory } from 'react-router';

const BookDetail = () => {
  const { _id } = useParams();
  const history = useHistory();

  const [book, setBook] = useState({});

  useEffect(() => {
    const getBook = async () => {
      const book = await getBookById(_id);
      setBook(book);
    };

    getBook();
  }, []);

  const remove = async () => {
    await deleteBook(_id);
    history.push(`/books`);
  };

  return (
    <div className='card text-center mx-auto' style={{ width: '500px' }}>
      <img src={book.imageUrl} className='card-img-top' alt='page cover' />
      <div className='card-body bg-light'>
        <p className='card-title text-center fs-4 text-truncate'>{book.name}</p>
      </div>
      <div className='card-body'>
        <p className='fw-light'>
          {book.description} - {book.date}
        </p>
      </div>
      <div className='card-footer d-grid gap-2 text-center'>
        <button className='btn btn-secondary'>Edit</button>
        <button className='btn btn-danger' onClick={remove}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookDetail;
