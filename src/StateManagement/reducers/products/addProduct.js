import {
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILED,
} from "../../actions/actionTypes";

const initionalState = {
  data: [],
  err: "",
  msg: "",
};

const addProduct = (state = initionalState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_REQUEST:
      return { data: action.payload, err: "", msg: "" };
    case ADD_PRODUCT_SUCCESS:
      return { data: [], err: "", msg: action.payload };
    case ADD_PRODUCT_FAILED:
      return {
        data: [],
        err: action.err,
        msg: "این عنوان کتاب قبلا ثبت شده است",
      };
    default:
      return state;
  }
};

export default addProduct;
