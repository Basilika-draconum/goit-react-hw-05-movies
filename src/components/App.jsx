// import { HomePage } from 'pages/HomePage/HomePage';
// import { MovieDetailsPage } from 'pages/MovieDetailsPage/MovieDetailsPage';
// import { MoviesPage } from 'pages/MoviesPage/MoviesPage';
import { lazy, Suspense } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import css from './app.module.scss';
// import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const Cast = lazy(() => import('./Cast/Cast'));

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
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};

// const API_KEY = 'bc23d88e8c379b88dcc9e69c75bc8f78';
