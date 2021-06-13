import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { Layout } from "./components";
import GlobalStyle from "./theme/globalStyle";
import theme from "./theme/theme";

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>Devolon App</Layout>
    </ThemeProvider>
  );
};

export default App;
