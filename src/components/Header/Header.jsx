import { StyledNavLink } from './Header.styled';
import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={css.Header}>
      <nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </nav>
    </header>
  );
};
