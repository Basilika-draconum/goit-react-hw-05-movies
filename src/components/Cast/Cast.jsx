import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'servises/moviesAPI';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieCast(movieId).then(data => {
      setMovieCast(data.cast);
    });
  }, [movieId]);

  return (
    <>
      <ul>
        {movieCast &&
          movieCast.map(item => (
            <li key={item.id}>
              <img
                src={
                  !item.profile_path
                    ? `https://image.tmdb.org/t/p/w500/jNxRHZ2cxVkNRtxgHuCtv7GY4JP.jpg`
                    : `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                }
                alt={item.name}
                width="180px"
              />
              <p>{item.name}</p>
              <p>Character:{item.character}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Cast;
