import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { renderWithRedux } from "src/Utils/renderWithRedux";

import CatList from "./CatList";

test("catList should contains list of cats and loadmore btn if it has cats item in store", () => {
  renderWithRedux(<CatList />, {
    initialState: { cats: { cats: [], loading: false, error: "" } },
  });
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

  let catCardIdElement = screen.queryAllByTestId("cardCatId");
  expect(catCardIdElement.length === 0).toBeTruthy();

  renderWithRedux(<CatList />, {
    initialState: { cats: initCatsList },
  });
  catCardIdElement = screen.queryAllByTestId("cardCatId");
  expect(catCardIdElement.length === 1).toBeTruthy();

  const loadMoreBtn = screen.queryAllByTestId("btn");
  expect(loadMoreBtn.length === 1).toBeTruthy();
});
