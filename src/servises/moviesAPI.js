import axios from 'axios';
const API_KEY = 'bc23d88e8c379b88dcc9e69c75bc8f78';

const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/',
  params: {
    api_key: API_KEY,
  },
});

export const getTrendingMovies = async () => {
  const { data } = await moviesApi.get('/3/trending/all/day');
  return data;
};

export const getMovieById = async id => {
  const { data } = await moviesApi.get(`/3/movie/${id}`);
  return data;
};
export const getMovieReviews = async id => {
  const { data } = await moviesApi.get(`/3/movie/${id}/reviews`);
  return data;
};

export const getMovieCast = async id => {
  const { data } = await moviesApi.get(`/3/movie/${id}/credits`);
  return data;
};

export const getMovieSearch = async query => {
  const { data } = await moviesApi.get(`/3/search/movie`, {
    params: { query },
  });
  return data.results;
};
