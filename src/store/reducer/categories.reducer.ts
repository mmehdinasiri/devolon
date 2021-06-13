import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../actions/category.action";

interface ICatCategoryState {
  categories: ICatCategory[];
  loading: boolean;
  error: string;
}

const initialState: ICatCategoryState = {
  categories: [],
  loading: false,
  error: "",
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.categories = payload;
      state.loading = false;
    });
    builder.addCase(getCategories.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload as string;
    });
  },
});

export default categorySlice;
