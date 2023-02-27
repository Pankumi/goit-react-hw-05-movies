import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage';
import { SearchMoviesPage } from '../pages/SearchMoviesPage/SearchMoviesPage';
import { MoviePage } from '../pages/MoviePage/MoviePage';
import css from './App.module.css';
import { StyledNavLink } from './App.styled';

export const App = () => {
  return (
    <div>
      <header className={css.Header}>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </header>

      <div className={css.StyledRoute}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<SearchMoviesPage />} />
          <Route path="/movies/:movieiD/*" element={<MoviePage />} />
        </Routes>
      </div>
    </div>
  );
};
