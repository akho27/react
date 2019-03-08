import { combineReducers } from "redux";
import productReducer from "./product";

const rootReducer = combineReducers({
  //   counterState: counterReducer,
  //   utilState: utilReducer,
  productState: productReducer // Part 3
});

export default rootReducer;
