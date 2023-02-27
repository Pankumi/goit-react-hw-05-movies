import React, { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { getPopularFilmList } from '../../services/themoviedbApi';

export const HomePage = () => {
  const [trendingList, setTrendingList] = useState([]);
  const [error, setError] = useState(null);
  // console.log(setTrendingList);

  useEffect(() => {
    const runRequest = async () => {
      try {
        // setIsLoading(true);
        const data = await getPopularFilmList();
        setTrendingList(data);
        setError(null);
      } catch (err) {
        console.log('err >> ', err);
        setError(err.message);
      } finally {
        // setIsLoading(false);
      }
    };
    runRequest();
  }, [setTrendingList]);

  return (
    <div>
      <h1>Trending Today</h1>
      {trendingList.length !== 0 && <MovieList movies={trendingList} />}
      {Boolean(error) && <p>Oops, some arror occured... Massage: {error}</p>}
    </div>
  );
};
