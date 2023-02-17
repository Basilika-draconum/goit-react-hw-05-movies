import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const MovieItem = ({ movie }) => {
  const { name, title, id } = movie;
  const location = useLocation();
  return (
    <li>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {title || name}
      </Link>
    </li>
  );
};
export default MovieItem;
