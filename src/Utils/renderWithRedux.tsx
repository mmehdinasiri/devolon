/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "src/store/reducer";
import theme from "src/theme/theme";
import { ThemeProvider } from "styled-components";

interface IWrapperProps {
  children: React.ReactElement | React.ReactElement[];
}
function renderWithRedux(
  ui: any,
  {
    initialState,
    store = createStore(rootReducer, initialState),
    ...renderOptions
  }: any = {}
) {
  function Wrapper({ children }: IWrapperProps) {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>{children}</Provider>
      </ThemeProvider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { renderWithRedux };
