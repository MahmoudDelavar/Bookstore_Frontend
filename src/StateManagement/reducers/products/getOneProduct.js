import {
  GET_ONE_PRODUCT_REQUEST,
  GET_ONE_PRODUCT_SUCCESS,
  GET_ONE_PRODUCT_FAILED,
} from "../../actions/actionTypes";

const initionalState = {
  isLoading: false,
  product: "",
  err: "",
  message: "",
};

function getOneProduct(state = initionalState, action) {
  switch (action.type) {
    case GET_ONE_PRODUCT_REQUEST:
      return { isLoading: true, product: "", message: "", err: "" };

    case GET_ONE_PRODUCT_SUCCESS:
      return {
        isLoading: false,
        product: action.product,
        message: action.message,
        err: "",
      };

    case GET_ONE_PRODUCT_FAILED:
      return { isLoading: false, product: "", message: "", err: action.err };

    default:
      return state;
  }
}

export default getOneProduct;
