import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'servises/moviesAPI';
import MovieItem from '../../components/MovieItem/MovieItem';

export const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    const fetchTrendMovies = async () => {
      const res = await getTrendingMovies();
      setTrendMovies(res.results);
    };
    fetchTrendMovies();
  }, []);

  return (
    <>
      <h2>Trending Today</h2>
      <ul>
        {trendMovies.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </>
  );
};
