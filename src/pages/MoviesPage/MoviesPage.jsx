import React from 'react';
import css from './moviesPage.module.scss';

export const MoviesPage = () => {
  return (
    <div>
      <form className={css.form}>
        <input
          className={css.input_search}
          type="text"
          placeholder="Enter title film"
        />
        <button className={css.button_search} type="button">
          Search
        </button>
      </form>
    </div>
  );
};
