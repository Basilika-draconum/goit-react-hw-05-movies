import axios from 'axios';
const API_KEY = 'bc23d88e8c379b88dcc9e69c75bc8f78';

const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/',
  params: {
    api_key: API_KEY,
  },
});

export const getTrendingMovies = async params => {
  const { data } = await moviesApi.get('/3/trending/all/day', { params });
  return data;
};
