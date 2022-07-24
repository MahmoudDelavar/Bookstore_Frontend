import { combineReducers } from "redux";
import addProductReducer from "./addProductReducer";
import getAllProducts from "./getAllProducts";

export default combineReducers({
  productState: getAllProducts,
  addProductState: addProductReducer,
});
