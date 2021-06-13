import styled, { createGlobalStyle } from "styled-components";

const size = {
  mobile: "576px",
  tablet: "768px",
  laptop: "992px",
  desktop: "1200px",
  desktopL: "1400px",
};
export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopL})`,
};

// gl
const GlobalStyle = createGlobalStyle`
html {
	scroll-behavior: smooth;
}
body {
	font-family: sans-serif;
	margin: 0;
	padding: 0;
	overflow-x: hidden;
  color: #444;
}
`;
export default GlobalStyle;

// Layout
export const Aside = styled.aside`
  position: fixed;
  width: ${({ theme }) => theme.sizes.sideBarWidth}px;
  background-color: ${({ theme }) => theme.color.bodyBg};
  height: 100%;
  display: flex;
  flex-direction: column;
  top: ${({ theme }) => theme.sizes.headerHight}px;
  left: 0;
`;
export const MainContent = styled.main`
  margin: ${({ theme }) => theme.sizes.headerHight}px 0;
  padding-top: 1rem;
  width: calc(100% - ${({ theme }) => theme.sizes.sideBarWidth}px);
  float: right;
`;
