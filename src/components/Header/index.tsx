import { HeaderContainer, Nav, NavLocation, StyledNavLink } from "./styles";
import logo from "../../assets/logo.png";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { NavLink } from "react-router-dom";

export function Header() {
  const theme = useTheme();

  return (
    <HeaderContainer>
      <NavLink to={"/"} title="Home">
        <img src={logo} alt="Logo" />
      </NavLink>
      <Nav>
        <NavLocation>
          <MapPin size={22} color={theme.purple} weight="fill" />
          <span>Porto Alegre, RS</span>
        </NavLocation>
        <StyledNavLink to={"/checkout"} title="Checkout">
          <ShoppingCart size={22} color={theme["yellow-dark"]} weight="fill" />
        </StyledNavLink>
      </Nav>
    </HeaderContainer>
  );
}
