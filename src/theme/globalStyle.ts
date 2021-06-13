import styled, { createGlobalStyle, css } from "styled-components";

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
export const MainContent = styled.main<{ hasSidebar?: boolean }>`
  margin: ${({ theme }) => theme.sizes.headerHight}px 0;
  padding-top: 1rem;
  ${({ hasSidebar }) =>
    hasSidebar &&
    css`
      float: right;
      width: calc(100% - ${({ theme }) => theme.sizes.sideBarWidth}px);
      /* stylelint-disable-next-line*/
    `}
`;

export const Container = styled.div`
  text-align: center;
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  @media ${device.mobile} {
    max-width: 540px;
  }
  @media ${device.tablet} {
    max-width: 720px;
  }
  @media ${device.laptop} {
    max-width: 960px;
  }
  @media ${device.desktop} {
    max-width: 1140px;
  }
  @media ${device.desktopL} {
    max-width: 1320px;
  }
`;
export const ContainerWithSidebar = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
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
export const Loading = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    opacity: 0.3;
    z-index: 20;
    min-height: 3rem;
  }

  &::after {
    content: "";
    border: 6px solid ${({ theme }) => theme.color.primary};
    border-top: 6px solid ${({ theme }) => theme.color.primaryLight};
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 1000ms linear infinite;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 21;
    margin: -15px;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
