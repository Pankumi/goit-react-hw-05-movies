import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import SearchBar from '../../components/SearchBar/SearchBar';
import { getSearchFilmList } from '../../services/themoviedbApi';
import { Loader } from '../../components/Loader/Loader';

export const SearchMoviesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchList, setSearchList] = useState([]);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const MyQuery = searchParams.get('query');  // виймаю пошуковий запит з адресної строки

  const location = useLocation();
  console.log('SearchMoviesPage location >>', location);

  useEffect(() => {
    setSearchList([]);
    setError(null);
    if (MyQuery === null) return;
    const runRequest = async () => {
      try {
        setIsLoading(true);
        const data = await getSearchFilmList(MyQuery);
        setSearchList(data);
      } catch (err) {
        console.log('err >> ', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    runRequest();
  }, [MyQuery]);

  return (
    <div>
      {isLoading && <Loader />}
      <SearchBar setSearchParams={setSearchParams} defaultValue={MyQuery} />
      {searchList.length !== 0 && <MovieList movies={searchList} location={location} />}
      {Boolean(error) && <p>Oops, some arror occured... Massage: {error}</p>}
    </div>
  );
};
export default SearchMoviesPage;