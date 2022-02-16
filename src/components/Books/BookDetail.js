import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getBookById, deleteBook } from '../../services/api-books';
import { useHistory } from 'react-router';

const BookDetail = () => {
  const { _id } = useParams();
  const history = useHistory();

  console.log(useParams());

  const [book, setBook] = useState({});

  useEffect(() => {
    getBook();
  }, []);

  const getBook = async () => {
    const book = await getBookById(_id);
    setBook(book);
  };

  const remove = async () => {
    await deleteBook(_id);
    history.push(`/books`);
  };

  const goToBookEditor = () => {
    history.push(`/books/${book.id}/edit`);
  }

  return (
    <div class="row m-4">
      <div class="col text-center">
        <img src={book.imageUrl} style={{ width: '250px', height: 'auto' }} alt='page cover' />
      </div>
      <div class="col">
        <p className='card-title fs-4 text-truncate'>{book.name}</p>
        <p className='fw-light'>
          {book.description} - {book.date}
        </p>
        <div className='d-grid gap-2 text-center'>
          <button className='btn btn-secondary' onClick={goToBookEditor}>Edit</button>
          <button className='btn btn-danger' onClick={remove}>
            Delete
          </button>
        </div>
      </div>



    </div>
  );
};

export default BookDetail;
