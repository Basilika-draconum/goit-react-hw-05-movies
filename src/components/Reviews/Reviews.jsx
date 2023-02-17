import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'servises/moviesAPI';

export const Reviews = () => {
  const [movieReview, setMovieReview] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieReviews(movieId).then(data => {
      setMovieReview(data.results);
    });
  }, [movieId]);

  return (
    <>
      {movieReview.length ? (
        <ul>
          {movieReview.map(movie => {
            return (
              <li key={movie.id}>
                <h4>Author: {movie.author}</h4>
                <p>{movie.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We do not have any reviews for this movie.</p>
      )}
    </>
  );
};
