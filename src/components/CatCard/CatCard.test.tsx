import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { renderWithRedux } from "src/Utils/renderWithRedux";
import CatCard from "./CatCard";

describe("test catCard component", () => {
  beforeEach(() => {
    renderWithRedux(<CatCard catImg="pathToImg" catId="1" />);
  });
  test("should contain img tag", () => {
    const cardImage = document.querySelector("img");
    expect(cardImage).toBeTruthy();
  });

  test("should contain the category id", () => {
    const cardCatId = screen.getByTestId("cardCatId");
    expect(cardCatId).toBeTruthy();
  });
});
