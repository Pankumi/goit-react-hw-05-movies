import React, { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { getPopularFilmList } from '../../services/themoviedbApi';
import { Loader } from '../../components/Loader/Loader';

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [trendingList, setTrendingList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const runRequest = async () => {
      setTrendingList([]);
      setError(null);
      try {
        setIsLoading(true);
        const data = await getPopularFilmList();
        setTrendingList(data);
      } catch (err) {
        console.log('err >> ', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    runRequest();
  }, [setTrendingList]);

  return (
    <div>
      <h1>Trending Today</h1>
      {isLoading && <Loader />}
      {Boolean(error) && <p>Oops, some arror occured... Massage: {error}</p>}
      {trendingList.length !== 0 && <MovieList movies={trendingList} />}
    </div>
  );
};
