import { createSlice } from "@reduxjs/toolkit";
import { getCats } from "../actions/cats.action";

interface ICatsState {
  cats: ICat[];
  loading: boolean;
  error: string;
}

const initialState: ICatsState = {
  cats: [],
  loading: false,
  error: "",
};

const catSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getCats.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCats.fulfilled, (state, { payload }) => {
      state.cats = [...state.cats, ...payload];
      state.loading = false;
    });
    builder.addCase(getCats.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload as string;
    });
  },
});
export const { reset } = catSlice.actions;
export default catSlice;
