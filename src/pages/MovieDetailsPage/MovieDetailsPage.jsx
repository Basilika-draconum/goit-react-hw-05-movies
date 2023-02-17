import { GoBackButton } from 'components/GoBackButton/GoBackButton';
import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieById } from 'servises/moviesAPI';
import css from './movieDetailsPage.module.scss';

const MovieDetailsPage = () => {
  const [movieData, setMovieData] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  useEffect(() => {
    getMovieById(movieId).then(data => {
      setMovieData(data);
    });
  }, [movieId]);

  return (
    <>
      <GoBackButton />
      {movieData && (
        <section className={css.movie_section}>
          <img
            src={
              !movieData.poster_path
                ? `https://image.tmdb.org/t/p/w500/tntIhdsHDfBYs7k3iBe0O0ZVGVo.jpg`
                : `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
            }
            alt={movieData.title || movieData.name}
            width="300px"
          />
          <div>
            <h2>{movieData.title || movieData.name}</h2>
            <p>User score: {Math.floor(movieData.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{movieData.overview}</p>
            <h3>Genres</h3>
            <p>{movieData.genres.map(item => item.name).join(', ')}</p>
          </div>
        </section>
      )}
      <section className={css.movie_addSection}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: location.state?.from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location.state?.from }}>
              Reviews
            </Link>
          </li>
        </ul>
      </section>
      <section>
        <Outlet />
      </section>
    </>
  );
};
export default MovieDetailsPage;
