
// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { StyledNavLink } from './App.styled';
import { HomePage } from '../pages/HomePage/HomePage';
import { SearchMoviesPage } from '../pages/SearchMoviesPage/SearchMoviesPage'
import { MoviePage } from '../pages/MoviePage/MoviePage'


export const App = () => {
  // const [movieItem, setMovieItem] = useState(null);

  return (
    <div>
      <header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<SearchMoviesPage />} />
        <Route path="/movies/:movieiD" element={<MoviePage />} />
      </Routes>
    </div>
  );
};
