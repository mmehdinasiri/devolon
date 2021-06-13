import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoriesService } from "../../services/categories.services";

export const getCategories = createAsyncThunk(
  "categories/requestStatus",
  async () => {
    return getCategoriesService();
  }
);
