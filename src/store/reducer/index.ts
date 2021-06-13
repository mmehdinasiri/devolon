import { combineReducers } from "redux";
import categories from "./categories.reducer";
import cats from "./cats.reducer";
import selectedCategory from "./selectedCategory.reducer";

const rootReducer = combineReducers({
  categories: categories.reducer,
  cats: cats.reducer,
  selectedCategory: selectedCategory.reducer,
});

export default rootReducer;
