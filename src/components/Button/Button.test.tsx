import "@testing-library/jest-dom";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithRedux } from "src/Utils/renderWithRedux";
import Button from "./Button";

describe("test category reducer", () => {
  const buttonLabel = "button label";
  const testFunction = jest.fn();
  beforeEach(() => {
    renderWithRedux(<Button label={buttonLabel} clickHandler={testFunction} />);
  });

  test("check button label exist", () => {
    const button = screen.getByTestId("btn");
    expect(button).toHaveTextContent(buttonLabel);
  });

  test("check function runs after click button", () => {
    const button = screen.getByTestId("btn");
    fireEvent.click(button);
    expect(testFunction).toHaveBeenCalled();
  });
});
