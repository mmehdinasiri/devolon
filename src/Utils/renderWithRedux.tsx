/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// test-utils.js
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "src/store/reducer";
import theme from "src/theme/theme";
import { ThemeProvider } from "styled-components";
// Import your own reducer

function renderWithRedux(
  ui: any,
  {
    initialState,
    store = createStore(rootReducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }: any) {
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
