import axios from 'axios';

const URL = process.env.REACT_APP_BOOK_URL;
const headers = { Authorization: `Bearer` };

const api = axios.create({ baseURL: URL, headers });

const getBooks = async () => {
  const response = await api.get(`/books`);
  return response.data;
};

const getBookById = async (id) => {
  const response = await api.get(`/books/${id}`);
  return response.data;
};

const createBook = async (book) => {
  const response = await api.post(`/books`, book);
  return response.data;
};

const editBook = async (id, book) => {
  const response = await api.put(`/books/${id}`, book);
  return response.data;
};

const deleteBook = async (id) => {
  const response = await api.delete(`/books/${id}`);
  return response.data;
};

const getAuthors = async () => {
  const response = await api.get(`/authors`);
  return response.data;
};

export { getBooks, getBookById, createBook, editBook, deleteBook, getAuthors };
