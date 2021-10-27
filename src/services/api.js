import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const URL = process.env.REACT_APP_URL;
const headers = { Authorization: `Bearer ${API_KEY}` };

const api = axios.create({ baseURL: URL, headers });

const paginationQuery = (pagination = { page: 1, limit: 10 }) => {
  return `?page=${pagination.page}&limit=${pagination.limit}`;
};

const getCharacters = async (pagination) => {
  const response = await api.get(`/character${paginationQuery(pagination)}`);
  return response.data;
};

const getCharacterById = async (id) => {
  const response = await api.get(`/character/${id}`);
  return response.data;
};

// const getBooks = async () => {
//   const response = await axios.get(`${URL}/book?page=1&limit=10`, headers);
//   return response.data;
// };

// const getBookById = async (id) => {
//   const response = await axios.get(
//     `${URL}/book/${id}?page=1&limit=10`,
//     headers
//   );
//   return response.data;
// };

export { getCharacters, getCharacterById /*, getBooks, getBookById*/ };
