import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoriesService } from "src/services/categories.services";

export const getCategories = createAsyncThunk(
  "categories/requestStatus",
  async () => {
    return getCategoriesService();
  }
);
