import MovieItem from 'components/MovieItem/MovieItem';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieSearch } from 'servises/moviesAPI';
import css from './moviesPage.module.scss';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [movieName, setMovieName] = useState(query || '');
  const [movieSearch, setMovieSearch] = useState(null);
  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: movieName });
  };
  useEffect(() => {
    getMovieSearch(query).then(setMovieSearch);
  }, [query]);

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input_search}
          type="text"
          placeholder="Enter title film"
          name="movieName"
          value={movieName}
          onChange={e => setMovieName(e.target.value)}
        />
        <button className={css.button_search} type="submit">
          Search
        </button>
      </form>
      <ul>
        {movieSearch?.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
