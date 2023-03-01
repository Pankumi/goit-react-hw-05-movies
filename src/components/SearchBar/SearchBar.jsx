import React, { useState } from 'react';
import css from './SearchBar.module.css';

export const SearchBar = ({ setSearchParams, defaultValue }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = evt => {
    setSearchValue(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    setSearchParams({ query: searchValue });
    reset();
  };

  const reset = () => {
    setSearchValue('');
  };

  return (
    <section className={css.SearchBar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <input
          className={css.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchValue"
          value={searchValue}
          defaultValue={defaultValue} // (зразок) не працює разом з value, щоб працювало треба переписати useState на useRef (21.02.23 0:45)
          onChange={handleChange}
          required
        />
        <button className={css.SearchForm_button} type="submit">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchBar;
