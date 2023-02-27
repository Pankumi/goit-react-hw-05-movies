import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmIdCredits } from '../../services/themoviedbApi';
import { Cast } from '../../components/Cast/Cast';
import { Loader } from '../../components/Loader/Loader';

export const MovieCastPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [serviceResponse, setServiceResponse] = useState([]);
  const [error, setError] = useState(null);
  const { movieiD } = useParams();

  useEffect(() => {
    const runRequest = async () => {
      try {
        setIsLoading(true);
        const { cast } = await getFilmIdCredits(movieiD);
        setServiceResponse(cast);
        setError(null);
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
      {Boolean(error) && <p> Oops, some arror occured... Massage: {error}</p>}
      {serviceResponse.length === 0 && (
        <p>We don`t have any cast for this movie.</p>
      )}
      {serviceResponse.length > 0 && <Cast serviceResponse={serviceResponse} />}
    </>
  );
};

export default MovieCastPage;
