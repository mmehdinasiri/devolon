import { FC } from "react";
import { Nav, NavbarBrand, NavbarLogo } from "./Navbar.element";

const Navbar: FC = () => {
  return (
    <Nav>
      <NavbarBrand href="/" data-testid="NavbarBrand">
        Devolon Test Project
      </NavbarBrand>
      <a href="https://www.devolon.fi/en/" target="_blank" rel="noreferrer">
        <NavbarLogo
          src="./images/Devolon-logopurple.png"
          alt="logo"
          data-testid="DevolonLogo"
        />
      </a>
    </Nav>
  );
};

export default Navbar;
