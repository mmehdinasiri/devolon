import { PayloadAction } from "@reduxjs/toolkit";
import store from "../index";
import { getCats } from "./cats.action";

describe("test cat action", () => {
  it("cat init value test", () => {
    const state = store.getState().cats;
    const initialCats = state.cats;
    expect(initialCats).toEqual([]);
  });

  it("if request success", async () => {
    const result: PayloadAction<ICat[]> = await store.dispatch(
      getCats({ category: 1, page: 0 })
    );
    const newState = store.getState().cats;
    expect(result.payload).toEqual(newState.cats);
  });

  it("check different type", async () => {
    const expectedValue = [
      "cats/requestStatus/fulfilled",
      "cats/requestStatus/pending",
      "cats/requestStatus/rejected",
    ];
    const result: PayloadAction<ICat[]> = await store.dispatch(
      getCats({ category: 1, page: 0 })
    );
    expect(expectedValue).toContain(result.type);
  });
});
