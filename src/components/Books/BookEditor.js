import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { createBook } from '../../services/api-books';
import { getBookById, getAuthors } from '../../services/api-books';
import { useParams } from "react-router";

const BookEditor = ({ title }) => {
  const { _id } = useParams();
  // const history = useHistory();

  const [book, setBook] = useState({});
  const [authors, setAuthors] = useState([]);
  const [bookInfo, setBookInfo] = useState({
    authorId: '', name: '', description: '', date: '', imageUrl: '',
  });

  useEffect(() => {
    getBook();
    getAllAuthors();
  }, []);

  const getBook = async () => {
    setBook(await getBookById(_id));
  };

  const getAllAuthors = async () => {
    setAuthors(await getAuthors());
  };

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
      <h5>{title}</h5>

      {authors.map((author) => {
        <p>{JSON.stringify(author)}</p>
      })}

      <form>
        <select className="form-select">
          <option defaultValue value="3">Authors</option>
          {authors.map((author) => {
            <option value={author.id}>{author.firstName}</option>
          })}
        </select>

        <div className='form-group'>
          <label>Author</label>
          <input
            id='authorId'
            type='text'
            className='form-control'
            placeholder='author id'
            value={bookInfo.authorId}
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
          <label htmlFor='startDate'>Date</label>
          <input
            id='date'
            className='form-control'
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
