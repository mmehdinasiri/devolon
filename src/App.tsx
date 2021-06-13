import { FC, lazy, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle, { Loading } from "./theme/globalStyle";
import theme from "./theme/theme";
// import { Cats, Home } from "./view";
const Cats = lazy(() => import("./view/Cats"));
const Home = lazy(() => import("./view/Home"));

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/cats" exact>
            <Suspense fallback={<Loading />}>
              <Cats />
            </Suspense>
          </Route>
          <Route path="/">
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
