
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { StyledNavLink } from './App.styled';
import { HomePage } from '../pages/HomePage/HomePage';
import { MoviesPage } from '../pages/MoviesPage/MoviesPage'


export const App = () => {
  const [trendingList, setTrendingList] = useState([]);

  return (
    <div>
      <header>
        <nav>
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage trendingList={trendingList} setTrendingList={setTrendingList} />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </div>
  );
};
