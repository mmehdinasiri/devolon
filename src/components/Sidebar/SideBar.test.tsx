import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { renderWithRedux } from "src/Utils/renderWithRedux";

import Sidebar from "./Sidebar";

describe("test category reducer", () => {
  beforeEach(() => {
    renderWithRedux(<Sidebar />, {
      initialState: { categories: {} },
    });
  });

  test("check sidebar title exist", () => {
    const title = screen.getByTestId("sidebar-title");
    expect(title).toBeTruthy();
  });

  test("check number of category item list", () => {
    const initCategory = {
      categories: [{ id: 1, name: "hats" }],
      loading: false,
      error: "",
    };

    let sidebarItem = document.querySelectorAll("li");
    expect(sidebarItem.length === 0).toBeTruthy();

    renderWithRedux(<Sidebar />, {
      initialState: { categories: initCategory },
    });
    sidebarItem = document.querySelectorAll("li");
    expect(sidebarItem.length === 1).toBeTruthy();
  });
});
