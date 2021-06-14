import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { renderWithRedux } from "src/Utils/renderWithRedux";

import CatList from "./CatList";

describe("test category reducer", () => {
  beforeEach(() => {
    renderWithRedux(<CatList />, {
      initialState: { cats: { cats: [], loading: false, error: "" } },
    });
  });

  test("check number of cats item list", () => {
    const initCatsList = {
      cats: [
        {
          breeds: [],
          categories: [],
          id: "ab",
          url: "catUrl",
          width: 120,
          height: 120,
        },
      ],
      loading: false,
      error: "",
    };

    let sidebarItem = screen.queryAllByTestId("cardCatId");
    expect(sidebarItem.length === 0).toBeTruthy();

    renderWithRedux(<CatList />, {
      initialState: { cats: initCatsList },
    });
    sidebarItem = screen.queryAllByTestId("cardCatId");
    expect(sidebarItem.length === 1).toBeTruthy();
    const loadMoreBtn = screen.queryAllByTestId("btn");
    expect(loadMoreBtn.length === 1).toBeTruthy();
  });
});
