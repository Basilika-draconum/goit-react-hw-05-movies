import { HomePage } from 'pages/HomePage/HomePage';
import { MovieDetailsPage } from 'pages/MovieDetailsPage/MovieDetailsPage';
import { MoviesPage } from 'pages/MoviesPage/MoviesPage';
import { Routes, Route, NavLink } from 'react-router-dom';
import css from './app.module.scss';

export const App = () => {
  return (
    <div>
      <header className={css.header}>
        <nav>
          <NavLink to="/" className={css.mainLink}>
            Home
          </NavLink>
          <NavLink to="/movies" className={css.mainLink}>
            Movies
          </NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}></Route>
      </Routes>
    </div>
  );
};

// const API_KEY = 'bc23d88e8c379b88dcc9e69c75bc8f78';
