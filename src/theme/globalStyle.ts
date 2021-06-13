import { createGlobalStyle } from "styled-components";

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
