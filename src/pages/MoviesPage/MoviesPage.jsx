
import React, { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import SearchBar from '../../components/SearchBar/SearchBar';
import {getSearchFilmList} from '../../services/themoviedbApi';


export const MoviesPage = ({trendingList, setTrendingList}) => {
    const [showSearch, setShowSearch] = useState(true);
    const [searchRequest, setSearchRequest] = useState('')
    const [searchList, setSearchList] = useState([]);
    const [error, setError] = useState(null);
    console.log('searchRequest 0 >>', searchRequest);

    useEffect(() => {
      console.log('searchRequest 1 >>', searchRequest);
      if (searchRequest === '') return;
        const runRequest = async () => {
          try {
            // setIsLoading(true);
            console.log('searchRequest 2 >>', searchRequest);
            const data = await getSearchFilmList(searchRequest);
            console.log('data >>', data);
            setSearchList(data);
            setError(null);
          } catch (err) {
            console.log('err >> ', err);
            setError(err.message);
          } finally {
            // setIsLoading(false);
          }
        };
        runRequest();
      }, [searchRequest] );

  return (
    <div>
        {showSearch && <SearchBar newSearch={setSearchRequest} />}
        {searchList.length !== 0 && <MovieList movies={searchList} />}
        {error && <p>Oops, some arror occured... Massage: {error}</p>}
    </div>
  );
};
