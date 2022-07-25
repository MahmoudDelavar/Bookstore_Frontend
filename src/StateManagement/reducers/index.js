import { combineReducers } from "redux";
import addProductReducer from "./products/addProductReducer";
import getAllProducts from "./products/getAllProducts";
import loginUser from "./users/loginUser";
import registerUser from "./users/regiterUser";
export default combineReducers({
  productState: getAllProducts,
  addProductState: addProductReducer,
  loginUserState: loginUser,
  registerUserState: registerUser,
});
