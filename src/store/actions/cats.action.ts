import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCatsService } from "../../services/cats.services";

interface IGAtCats {
  category: number;
  page: number;
}
export const getCats = createAsyncThunk(
  "cats/requestStatus",
  async ({ category, page }: IGAtCats) => {
    return getCatsService(category, page);
  }
);
