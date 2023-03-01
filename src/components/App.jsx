import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// import { SharedLayoutPage } from '../pages/SharedLayoutPage/SharedLayoutPage';
// import { HomePage } from '../pages/HomePage/HomePage';
// import { SearchMoviesPage } from '../pages/SearchMoviesPage/SearchMoviesPage';
// import { MoviePage } from '../pages/MoviePage/MoviePage';
// import { MovieCastPage } from '../pages/MovieCastPage/MovieCastPage';
// import { MovieReviewsPage } from '../pages/MovieReviewsPage/MovieReviewsPage';
import { Loader } from './Loader/Loader';

const LazySharedLayoutPage = lazy(()=>import('../pages/SharedLayoutPage/SharedLayoutPage'));
const LazyHomePage = lazy(()=>import('../pages/HomePage/HomePage'));
const LazySearchMoviesPage = lazy(()=>import('../pages/SearchMoviesPage/SearchMoviesPage'));
const LazyMoviePage = lazy(() => import('../pages/MoviePage/MoviePage'));
const LazyMovieCastPage = lazy(() => import('../pages/MovieCastPage/MovieCastPage'));
const LazyMovieReviewsPage = lazy(() => import('../pages/MovieReviewsPage/MovieReviewsPage'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />} >
        <Routes>
          <Route path="/" element={<LazySharedLayoutPage />}>
            <Route index element={<LazyHomePage />} />
            <Route path="movies" element={<LazySearchMoviesPage />} />
            <Route path="movies/:movieiD/" element={<LazyMoviePage />}>
              <Route path="cast" element={<LazyMovieCastPage />} />
              <Route path="revievs" element={<LazyMovieReviewsPage />} />
            </Route>
          </Route>
          <Route path="*" element={<LazySharedLayoutPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
