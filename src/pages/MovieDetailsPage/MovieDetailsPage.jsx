import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieById } from 'servises/moviesAPI';
import css from './movieDetailsPage.module.scss';

export const MovieDetailsPage = () => {
  const [movieData, setMovieData] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieById(movieId).then(data => {
      setMovieData(data);
    });
  }, [movieId]);

  return (
    <>
      {movieData && (
        <section className={css.movie_section}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieData?.poster_path}`}
            alt={movieData?.title || movieData?.name}
            width="300px"
          />
          <div>
            <h2>{movieData?.title || movieData?.name}</h2>
            <p>User score: {Math.floor(movieData?.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{movieData?.overview}</p>
            <h3>Genres</h3>
            <p></p>
          </div>
        </section>
      )}
      <section className={css.movie_addSection}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="cast">Reviews</Link>
          </li>
        </ul>
      </section>
    </>
  );
};
