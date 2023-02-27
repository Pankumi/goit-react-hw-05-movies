
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmIdReviews } from '../../services/themoviedbApi';

export const MovieReviewsPage = () => {
  const [serviceResponse, setServiceResponse] = useState(null);
  const [error, setError] = useState(null);
  const { movieiD } = useParams();

  useEffect(() => {
    const runRequest = async () => {
      try {
        // setIsLoading(true);
        const {results} = await getFilmIdReviews(movieiD);
          console.log('results Reviews >>', results);

        setServiceResponse(results);
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
      {Boolean(error) && <p> Oops, some arror occured... Massage: {error}</p>}
      {serviceResponse.length ===0 && <p>We don`t have any reviews for this movie.</p>}
      {/* {Boolean(serviceResponse) && <p>{serviceResponse}</p>} */}
    </>
  );
};

export default MovieReviewsPage;
