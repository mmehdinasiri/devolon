import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { renderWithRedux } from "src/Utils/renderWithRedux";

import Navbar from "./Navbar";

test("Navbar should contains brand title and logo", () => {
  renderWithRedux(<Navbar />);
  const navbarBrand = screen.queryAllByTestId("NavbarBrand");
  const devolonLogo = screen.queryAllByTestId("DevolonLogo");
  expect(navbarBrand.length === 1).toBeTruthy();
  expect(devolonLogo.length === 1).toBeTruthy();
});
