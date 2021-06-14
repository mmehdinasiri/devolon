import { getCategories } from "../actions/category.action";
import categorySlice from "./categories.reducer";

describe("test category reducer", () => {
  const initState = { categories: [], loading: false, error: "" };

  it("test pending state", () => {
    const result = categorySlice.reducer(initState, {
      type: getCategories.pending,
    });
    expect(result).toEqual({
      categories: [],
      loading: true,
      error: "",
    });
  });

  it("test pending fulfilled", () => {
    const expectedValue = [{ id: "1", name: "hats" }];
    const result = categorySlice.reducer(initState, {
      type: getCategories.fulfilled,
      payload: expectedValue,
    });
    expect(result).toEqual({
      categories: expectedValue,
      loading: false,
      error: "",
    });
  });
  it("test pending error", () => {
    const expectedValue = "something bad happens";
    const result = categorySlice.reducer(initState, {
      type: getCategories.rejected,
      payload: expectedValue,
    });
    expect(result).toEqual({
      categories: [],
      loading: false,
      error: expectedValue,
    });
  });
});
