import store from "../index";
import { getCats } from "../actions/cats.action";
import catSlice, { resetCateList } from "./cats.reducer";

describe("test cat reducer", () => {
  const initState = { cats: [], loading: false, error: "" };

  it("test pending state", () => {
    const result = catSlice.reducer(initState, {
      type: getCats.pending,
    });
    expect(result).toEqual({
      cats: [],
      loading: true,
      error: "",
    });
  });

  it("test pending fulfilled", () => {
    const expectedValue = [{ id: "1", name: "hats" }];
    const result = catSlice.reducer(initState, {
      type: getCats.fulfilled,
      payload: expectedValue,
    });
    expect(result).toEqual({
      cats: expectedValue,
      loading: false,
      error: "",
    });
  });
  it("test pending error", () => {
    const expectedValue = "something bad happens";
    const result = catSlice.reducer(initState, {
      type: getCats.rejected,
      payload: expectedValue,
    });
    expect(result).toEqual({
      cats: [],
      loading: false,
      error: expectedValue,
    });
  });
  it("test reset cat list", () => {
    const result = store.dispatch(resetCateList());
    const newState = store.getState().cats;
    expect(result.type).toEqual("cats/resetCateList");
    expect(newState).toEqual(initState);
  });
});
