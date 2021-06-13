import { combineReducers } from "redux";
import categories from "./categories.reducer";

const rootReducer = combineReducers({
  categories: categories.reducer,
});

export default rootReducer;
