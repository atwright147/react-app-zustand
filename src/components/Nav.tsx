import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  gap: .5rem;
`;

export const Nav = () => (
  <StyledNav>
    <Link to="/">Home</Link>
    <Link to="/todos">Todos</Link>
  </StyledNav>
);
