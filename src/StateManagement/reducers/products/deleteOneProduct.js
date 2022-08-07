import {
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILED,
} from "./../../actions/actionTypes";
const initionalState = { isLoading: false, products: [], message: "", err: "" };

function deletOneProduct(state = initionalState, action) {
  switch (action.type) {
    case DELETE_PRODUCT_REQUEST:
      return { isLoading: true, products: "", message: "", err: "" };

    case DELETE_PRODUCT_SUCCESS:
      return {
        isLoading: false,
        products: action.products,
        message: action.message,
        err: "",
      };

    case DELETE_PRODUCT_FAILED:
      return { isLoading: false, products: "", message: "", err: action.err };

    default:
      return state;
  }
}

export default deletOneProduct;
