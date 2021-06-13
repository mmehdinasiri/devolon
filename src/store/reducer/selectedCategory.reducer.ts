import { createSlice } from "@reduxjs/toolkit";

interface SelectedCategory {
  id: number | null;
  name: string | null;
}

const initialState: SelectedCategory = {
  id: null,
  name: null,
};
const selectedCategorySlice = createSlice({
  name: "selectedCategory",
  initialState,
  reducers: {
    updateSelectedCategory: (state, { payload }) => {
      state = { ...payload };
      return state;
    },
    resetSelectedCategory: () => initialState,
  },
});

export const { updateSelectedCategory, resetSelectedCategory } =
  selectedCategorySlice.actions;
export default selectedCategorySlice;
