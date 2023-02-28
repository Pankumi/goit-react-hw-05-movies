import React, { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import SearchBar from '../../components/SearchBar/SearchBar';
import { getSearchFilmList } from '../../services/themoviedbApi';
import { Loader } from '../../components/Loader/Loader';

export const SearchMoviesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchRequest, setSearchRequest] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setSearchList([]);
    setError(null);
    if (searchRequest === '') return;
    const runRequest = async () => {
      try {
        setIsLoading(true);
        const data = await getSearchFilmList(searchRequest);
        setSearchList(data);
      } catch (err) {
        console.log('err >> ', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    runRequest();
  }, [searchRequest]);

  return (
    <div>
      {isLoading && <Loader />}
      <SearchBar newSearch={setSearchRequest} />
      {searchList.length !== 0 && <MovieList movies={searchList} />}
      {Boolean(error) && <p>Oops, some arror occured... Massage: {error}</p>}
    </div>
  );
};
