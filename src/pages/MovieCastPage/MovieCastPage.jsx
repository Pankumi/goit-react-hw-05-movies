import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmIdCredits } from '../../services/themoviedbApi';

export const MovieCastPage = () => {
  const [serviceResponse, setServiceResponse] = useState(null);
  const [error, setError] = useState(null);
  // const { movieiD } = useParams();

  useEffect(() => {
    const runRequest = async () => {
      try {
        // setIsLoading(true);
        const data = await getFilmIdCredits();

        console.log('data >>', data);

        setServiceResponse(data);
        setError(null);
      } catch (err) {
        console.log('err >> ', err);
        setError(err.message);
      } finally {
        // setIsLoading(false);
      }
    };
    runRequest();
  }, []);

  return (
    <>
      {Boolean(error) && <p> Oops, some arror occured... Massage: {error}</p>}
      {Boolean(serviceResponse) && <p>{serviceResponse}</p>}
    </>
  );
};

export default MovieCastPage;
