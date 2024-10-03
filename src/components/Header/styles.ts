import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const breakpoints = {
  mobile: "425px",
  tablet: "768px",
};

export const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  gap: 0.75rem;
`;

export const NavLocation = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme["purple-light"]};
  border-radius: 6px;
  color: ${(props) => props.theme["purple-dark"]};
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  padding: 0.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const StyledNavLink = styled(NavLink)`
  align-items: center;
  background-color: ${(props) => props.theme["yellow-light"]};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
`;
