import {
  EDIT_PRODUCT_FAILED,
  EDIT_PRODUCT_REQUEST,
  EDIT_PRODUCT_SUCCESS,
} from "../../actions/actionTypes";

const initionalState = {
  isLoading: false,
  data: "",
  err: "",
};
function editProduct(state = initionalState, action) {
  switch (action.type) {
    case EDIT_PRODUCT_REQUEST:
      return { isLoading: true, data: "", err: "" };
    case EDIT_PRODUCT_SUCCESS:
      return { isLoading: false, data: action.payload, err: "" };
    case EDIT_PRODUCT_FAILED:
      return { isLoading: false, data: "", err: action.payload };
    default:
      return state;
  }
}

export default editProduct;
