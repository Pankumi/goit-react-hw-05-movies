import { StyledNavLink } from './App.styled'
const styleApp = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101',
};

export const App = () => {
  return (
    <div style={styleApp}>
      <header>
        <nav>
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
          <StyledNavLink to="/about">Movies</StyledNavLink>
          <StyledNavLink to="/products">Products</StyledNavLink>
        </nav>
      </header>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes> */}
    </div>
  );
};
