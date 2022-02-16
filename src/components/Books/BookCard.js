import { useHistory } from 'react-router';

const BookCard = ({ book }) => {
  const history = useHistory();

  const goToBookDetail = () => {
    history.push(`/books/${book.id}`);
  };

  return (
    <div className='card'>
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
        <button className='btn btn-secondary' onClick={goToBookDetail}>
          See Details
        </button>
      </div>
    </div>
  );
};

export default BookCard;
