import React, { useState, useEffect } from 'react';
import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import { getFilmID } from '../../services/themoviedbApi';
import { Loader } from '../../components/Loader/Loader';
import css from './MovieP.module.css';

export const MoviePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [filmInfo, setFilmInfo] = useState(null);
  const [error, setError] = useState(null);
  const { movieiD } = useParams();

  const location = useLocation();
  console.log('MoviePage location >>', location);

  useEffect(() => {
    setFilmInfo(null);
    setError(null);
    if (!Boolean(movieiD)) return;
    const runRequest = async () => {
      setIsLoading(true);
      try {
        const data = await getFilmID(movieiD);
        setFilmInfo(data);
      } catch (err) {
        console.log('err >> ', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    runRequest();
  }, [movieiD]);

  return (
    <>
      {isLoading && <Loader />}
      {Boolean(error) && <p>Oops, some arror occured... Massage: {error}</p>}
      {Boolean(filmInfo) && (
        <div>
          <NavLink to={location.state?.from ?? '/'}>
            <button type="button"> ← Go back</button>
          </NavLink>

          <div>
            {Boolean(filmInfo.poster_path) && (
              <img
                className={css.Poster}
                src={`https://image.tmdb.org/t/p/w500${filmInfo.poster_path}`}
                alt={filmInfo.title}
                width="300px"
              />
            )}
            <div>
              <p>{filmInfo.title}</p>
              <p>Uset Score: {Math.round(filmInfo.popularity)}%</p>
              <p>Overview</p>
              <p>{filmInfo.overview}</p>
              <p>Genres</p>
              <p>{filmInfo.genres.map(el => `${el.name} `)}</p>
            </div>
          </div>

          <div className={css.AdditionalInfo}>
            <p>Additional Information</p>
            <ul>
              <li>
                <NavLink to="cast" state={{from: location.state?.from ?? '/'}} >
                  {' '}
                  <p>Cast</p>{' '}
                </NavLink>
              </li>
              <li>
                <NavLink to="revievs" state={{from: location.state?.from ?? '/'}} >
                  {' '}
                  <p>Revievs</p>{' '}
                </NavLink>
              </li>
            </ul>
          </div>
          <Outlet/>
        </div>
      )}
    </>
  );
};

export default MoviePage;
