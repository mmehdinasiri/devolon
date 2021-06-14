import { PayloadAction } from "@reduxjs/toolkit";
import store from "../index";
import { getCategories } from "./category.action";

describe("test category action", () => {
  it("categoryList init value test", () => {
    const state = store.getState().categories;
    const initialCategories = state.categories;
    expect(initialCategories).toEqual([]);
  });

  it("if request success", async () => {
    const result: PayloadAction<ICatCategory[]> = await store.dispatch(
      getCategories()
    );
    const newState = store.getState().categories;
    expect(result.payload).toEqual(newState.categories);
  });

  it("check different type", async () => {
    const expectedValue = [
      "categories/requestStatus/fulfilled",
      "categories/requestStatus/pending",
      "categories/requestStatus/rejected",
    ];
    const result: PayloadAction<ICatCategory[]> = await store.dispatch(
      getCategories()
    );
    expect(expectedValue).toContain(result.type);
  });
});
