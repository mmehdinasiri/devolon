import { FC } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/globalStyle";
import theme from "./theme/theme";
import { Cats } from "./view";

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Cats />
    </ThemeProvider>
  );
};

export default App;
