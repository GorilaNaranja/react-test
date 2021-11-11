import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { createBook } from '../../services/api-books';

const BookEditor = () => {
  //   const { _id } = useParams();
  //   const history = useHistory();

  //   const [book, setBook] = useState({});

  //   useEffect(() => {
  //     const getBook = async () => {
  //       const book = await getBookById(_id);
  //       setBook(book);
  //     };

  //     getBook();
  //   }, []);

  const [bookInfo, setBookInfo] = useState({
    author: '',
    name: '',
    description: '',
    date: '',
    imageUrl: '',
  });

  const onChange = (e) => {
    setBookInfo({ ...bookInfo, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Submit', bookInfo);
    createBook(bookInfo);
  };

  return (
    <div className='container'>
      <h5>Create New Book</h5>
      {JSON.stringify(bookInfo)}

      <form>
        <div className='form-group'>
          <label>Author</label>
          <input
            id='author'
            type='text'
            className='form-control'
            placeholder='author'
            value={bookInfo.author}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label>Name</label>
          <input
            id='name'
            type='text'
            className='form-control'
            placeholder='name'
            value={bookInfo.name}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label>Description</label>
          <input
            id='description'
            type='text'
            className='form-control'
            placeholder='Description'
            value={bookInfo.description}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label>Page cover</label>
          <input
            id='imageUrl'
            type='text'
            className='form-control'
            placeholder='Url'
            value={bookInfo.imageUrl}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label for='startDate'>Date</label>
          <input
            id='date'
            class='form-control'
            type='date'
            value={bookInfo.date}
            onChange={onChange}
          />
          <span id='startDateSelected'></span>
        </div>

        <div className='mt-2'>
          <button className='btn btn-primary' onClick={onSubmit}>
            Submit
          </button>
          <NavLink className='btn btn-secondary' to='/books'>
            Cancel
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default BookEditor;
