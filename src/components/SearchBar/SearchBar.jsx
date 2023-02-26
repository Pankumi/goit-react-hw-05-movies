import React, { useState } from 'react';
import css from './SearchBar.module.css';


export const SearchBar = ({newSearch}) => {
  const [search, setSearch] = useState('');

  const handleChange = evt => {
    setSearch(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (search.length < 1) return
    
    newSearch(search); // *************
    reset();
  };

  const reset = () => {
    setSearch('');
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
          name="search"
          value={search}
          onChange={handleChange}
        />
        <button className={css.SearchForm_button} type="submit">Search</button>
      </form>
    </section>
  );
};


export default SearchBar;