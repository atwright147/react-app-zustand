import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  gap: .5rem;
  margin-bottom: 1rem;
`;

export const Nav = (): JSX.Element => (
  <StyledNav>
    <Link to="/">Home</Link>
    <Link to="/todos">Todos</Link>
    <Link to="/toggles">Toggles</Link>
    <Link to="/profile-form">Profile Form</Link>
    <Link to="/basic-form">Basic Form</Link>
  </StyledNav>
);
