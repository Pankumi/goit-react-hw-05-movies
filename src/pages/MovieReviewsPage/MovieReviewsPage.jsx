import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmIdReviews } from '../../services/themoviedbApi';
import { Reviews } from '../../components/Reviews/Reviews';
import { Loader } from '../../components/Loader/Loader';

export const MovieReviewsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [serviceResponse, setServiceResponse] = useState([]);
  const [error, setError] = useState(null);
  const { movieiD } = useParams();

  useEffect(() => {
    setServiceResponse([]);
    setError(null);
    const runRequest = async () => {
      try {
        setIsLoading(true);
        const { results } = await getFilmIdReviews(movieiD);
        setServiceResponse(results);
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
        <p>We don`t have any reviews for this movie.</p>
      )}
      {serviceResponse.length > 0 && (
        <Reviews serviceResponse={serviceResponse} />
      )}
    </>
  );
};

export default MovieReviewsPage;
