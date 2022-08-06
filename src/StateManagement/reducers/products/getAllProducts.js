import {
  GET_ALL_PRODUCT_REQUEST,
  GET_ALL_PRODUCT_SUCCESS,
  GET_ALL_PRODUCT_FAILED,
} from "../../actions/actionTypes";

const initionalState = {
  isLoading: false,
  data: [],
  err: "",
};

function getAllProducts(state = initionalState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCT_REQUEST:
      return { isLoading: true, data: [], err: "" };

    case GET_ALL_PRODUCT_SUCCESS:
      return { isLoading: false, data: action.payload, err: "" };

    case GET_ALL_PRODUCT_FAILED:
      return { isLoading: false, data: [], err: action.payload };

    default:
      return state;
  }
}

export default getAllProducts;
