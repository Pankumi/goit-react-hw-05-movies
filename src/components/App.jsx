import { Routes, Route } from 'react-router-dom';
import { SharedLayoutPage } from '../pages/SharedLayoutPage/SharedLayoutPage';

import { HomePage } from '../pages/HomePage/HomePage';
import { SearchMoviesPage } from '../pages/SearchMoviesPage/SearchMoviesPage';
import { MoviePage } from '../pages/MoviePage/MoviePage';
import { MovieCastPage } from '../pages/MovieCastPage/MovieCastPage';
import { MovieReviewsPage } from '../pages/MovieReviewsPage/MovieReviewsPage';

export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<SharedLayoutPage />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<SearchMoviesPage />} />
        <Route path="movies/:movieiD/" element={<MoviePage />}>
          <Route path="cast" element={<MovieCastPage />} />
          <Route path="revievs" element={<MovieReviewsPage />} />
        </Route>
      </Route>
    </Routes>
    </>
  );
};
