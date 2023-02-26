import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import MovieList from '../../components/MovieList/MovieList';
// import SearchBar from '../../components/SearchBar/SearchBar';
import { getFilmID } from '../../services/themoviedbApi';

export const MoviePage = () => {
  // const [filmID] = useState(852096);
  const [filmInfo, setFilmInfo] = useState(null);
  const [error, setError] = useState(null);
  const {movieiD} = useParams();
  // console.log('movieiD >>', movieiD);

  console.log('filmInfo >>', filmInfo);

  useEffect(() => {
    // if (filmID === null) return;
    const runRequest = async () => {
      try {
        // setIsLoading(true);
        const data = await getFilmID(movieiD);

        console.log(
          'genres >>',
          data.genres.map(el => el.name)
        );

        setFilmInfo(data);
        setError(null);
      } catch (err) {
        console.log('err >> ', err);
        setError(err.message);
      } finally {
        // setIsLoading(false);
      }
    };
    runRequest();
  }, [movieiD]);

  return (
    <>
      <p>start</p>
      {filmInfo && (
        <div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${filmInfo.poster_path}`}
              alt={filmInfo.title}
              width="300px"
            />
            <div>
              <p>{filmInfo.title}</p>
              <p>Uset Score: {Math.round(filmInfo.popularity)}%</p>
              <p>Overview</p>
              <p>{filmInfo.overview}</p>
              <p>Genres</p>
              <p>{filmInfo.genres.map(el => `${el.name} `)}</p>
            </div>
          </div>
          <p>Additional Information</p>
          <ul>
            <li>
              <a href="">Cast</a>
            </li>
            <li>
              <a href="">Revievs</a>
            </li>
          </ul>
        </div>
      )}

      {/* {showSearch && <SearchBar newSearch={setSearchRequest} />} */}
      {/* {searchList.length !== 0 && <MovieList movies={searchList} />} */}
      {error && <p>Oops, some arror occured... Massage: {error}</p>}
    </>
  );
};

export default MoviePage;
