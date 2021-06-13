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
export const Container = styled.div`
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  @media ${device.mobile} {
    max-width: calc(540px - ${({ theme }) => theme.sizes.sideBarWidth}px);
  }
  @media ${device.tablet} {
    max-width: calc(720px - ${({ theme }) => theme.sizes.sideBarWidth}px);
  }
  @media ${device.laptop} {
    max-width: calc(960px - ${({ theme }) => theme.sizes.sideBarWidth}px);
  }
  @media ${device.desktop} {
    max-width: calc(1140px - ${({ theme }) => theme.sizes.sideBarWidth}px);
  }
  @media ${device.desktopL} {
    max-width: calc(1320px - ${({ theme }) => theme.sizes.sideBarWidth}px);
  }
`;
