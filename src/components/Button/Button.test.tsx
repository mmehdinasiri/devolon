import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import theme from "src/theme/theme";
import { ThemeProvider } from "styled-components";
import Button from "./Button";

describe("test category reducer", () => {
  const buttonLabel = "button label";
  const testFunction = jest.fn();

  test("check button label exist", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button label={buttonLabel} clickHandler={testFunction} />
      </ThemeProvider>
    );
    const button = screen.getByTestId("btn");
    expect(button).toHaveTextContent(buttonLabel);
  });

  test("check function runs after click button", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button label={buttonLabel} clickHandler={testFunction} />
      </ThemeProvider>
    );
    const button = screen.getByTestId("btn");
    fireEvent.click(button);
    expect(testFunction).toHaveBeenCalled();
  });
});
