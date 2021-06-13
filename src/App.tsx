import { FC } from "react";
import GlobalStyle from "./theme/globalStyle";

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">Devolon App</div>;
    </>
  );
};

export default App;
