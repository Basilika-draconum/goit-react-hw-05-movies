import React from 'react';
import { Link } from 'react-router-dom';

export const MovieItem = ({ movie }) => {
  const { name, title, id } = movie;
  return (
    <li>
      <Link to={`/movies/${id}`}>{title || name}</Link>
    </li>
  );
};
export default MovieItem;
