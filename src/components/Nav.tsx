import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  gap: .5rem;
  margin-bottom: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  border-bottom: 5px solid transparent;
  box-sizing: border-box;
  padding: .35rem;
  text-decoration: none;

  &[aria-current="page"] {
    border-bottom-color: #ccc;
  }
`;

export const Nav = (): JSX.Element => (
  <StyledNav>
    <StyledNavLink to="/">Home</StyledNavLink>
    <StyledNavLink to="/todos">Todos</StyledNavLink>
    <StyledNavLink to="/toggles">Toggles</StyledNavLink>
    <StyledNavLink to="/profile-form">Profile Form</StyledNavLink>
    <StyledNavLink to="/basic-form">Basic Form</StyledNavLink>
  </StyledNav>
);
