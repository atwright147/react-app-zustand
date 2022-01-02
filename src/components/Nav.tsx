import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  gap: .5rem;
  margin-bottom: 1rem;
`;

export const Nav = (): JSX.Element => (
  <StyledNav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/todos">Todos</NavLink>
    <NavLink to="/toggles">Toggles</NavLink>
    <NavLink to="/profile-form">Profile Form</NavLink>
    <NavLink to="/basic-form">Basic Form</NavLink>
  </StyledNav>
);
