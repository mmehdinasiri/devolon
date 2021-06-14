import store from "../index";
import {
  updateSelectedCategory,
  resetSelectedCategory,
} from "./selectedCategory.reducer";

describe("test cat reducer", () => {
  const initialState = {
    id: null,
    name: null,
  };
  const testValue = {
    id: 1,
    name: "hats",
  };
  it("test update selected category", () => {
    const result = store.dispatch(updateSelectedCategory(testValue));
    const newState = store.getState().selectedCategory;
    expect(result.type).toEqual("selectedCategory/updateSelectedCategory");
    expect(newState).toEqual(testValue);
  });
  it("test reset selected category", () => {
    const result = store.dispatch(resetSelectedCategory());
    const newState = store.getState().selectedCategory;
    expect(result.type).toEqual("selectedCategory/resetSelectedCategory");
    expect(newState).toEqual(initialState);
  });
});
