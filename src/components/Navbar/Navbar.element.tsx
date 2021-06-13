import styled from "styled-components";

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.color.headerBg};
  color: white;
  height: ${({ theme }) => theme.sizes.headerHight}px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const NavbarBrand = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  font-weight: bold;
  cursor: pointer;
  color: white;
  text-decoration: none;
  transition: color 100ms ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.color.primaryLight};
  }
`;

export const NavbarLogo = styled.img`
  width: 100px;
`;
