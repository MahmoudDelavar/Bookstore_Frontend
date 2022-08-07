import { combineReducers } from "redux";
import addProduct from "./products/addProduct";
import editProduc from "./products/editProduct";
import getAllProducts from "./products/getAllProducts";
import getOneProduct from "./products/getOneProduct";
import deleteOneProduct from "./products/deleteOneProduct";
import loginUser from "./users/loginUser";
import registerUser from "./users/regiterUser";
export default combineReducers({
  allproductState: getAllProducts,
  addProductState: addProduct,
  editProducState: editProduc,
  deleteOneProductState: deleteOneProduct,
  oneProductState: getOneProduct,
  loginUserState: loginUser,
  registerUserState: registerUser,
});
