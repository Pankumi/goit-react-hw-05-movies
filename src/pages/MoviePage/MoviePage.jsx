import React, { useState, useEffect } from 'react';
import { useParams, NavLink, Routes, Route } from 'react-router-dom';
import { getFilmID } from '../../services/themoviedbApi';
import { MovieCastPage } from '../MovieCastPage/MovieCastPage';
import { MovieReviewsPage } from '../MovieReviewsPage/MovieReviewsPage'

export const MoviePage = () => {
  const [filmInfo, setFilmInfo] = useState(null);
  const [error, setError] = useState(null);
  const { movieiD } = useParams();

  useEffect(() => {
    if (!Boolean(movieiD)) return;
    const runRequest = async () => {
      try {
        // setIsLoading(true);
        const data = await getFilmID(movieiD);

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
      {Boolean(error) && <p>Oops, some arror occured... Massage: {error}</p>}
      {Boolean(filmInfo) && (
        <div>
          <NavLink to="/" ><button type='button' > ← Go back</button></NavLink>
          
          <div>
            {Boolean(filmInfo.poster_path) && <img
              src={`https://image.tmdb.org/t/p/w500${filmInfo.poster_path}`}
              alt={filmInfo.title}
              width="300px"
            />}
            <div>
              <p>{filmInfo.title}</p>
              <p>Uset Score: {Math.round(filmInfo.popularity)}%</p>
              <p>Overview</p>
              <p>{filmInfo.overview}</p>
              <p>Genres</p>
              <p>{filmInfo.genres.map(el => `${el.name} `)}</p>
            </div>
          </div>

          <div>
            <p>Additional Information</p>
            <ul>
              <li>
                <NavLink to="cast">Cast</NavLink>
              </li>
              <li>
                <NavLink to="revievs">Revievs</NavLink>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path='cast' element={<MovieCastPage />} />
            <Route path='revievs' element={<MovieReviewsPage />} />
          </Routes>
        </div>
      )}
    </>
  );
};

export default MoviePage;
