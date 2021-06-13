import { FC } from "react";
import { Nav, NavbarBrand, NavbarLogo } from "./Navbar.element";

const Navbar: FC = () => {
  return (
    <Nav>
      <NavbarBrand href="/">Devolon Test Project</NavbarBrand>
      <a href="https://www.devolon.fi/en/" target="_blank" rel="noreferrer">
        <NavbarLogo src="./images/Devolon-logopurple.png" alt="logo" />
      </a>
    </Nav>
  );
};

export default Navbar;
