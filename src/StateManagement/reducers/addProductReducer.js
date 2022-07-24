import {
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
  POST_DATA_FAILED,
} from "../actions/actionTypes";

const initionalState = {
  data: [],
  err: "",
  msg: "",
};

const addProductReducer = (state = initionalState, action) => {
  switch (action.type) {
    case POST_DATA_REQUEST:
      return { data: action.payload, err: "", msg: "" };
    case POST_DATA_SUCCESS:
      return { data: [], err: "", msg: action.payload };
    case POST_DATA_FAILED:
      return { data: [], err: action.payload, msg: "" };
    default:
      return state;
  }
};

export default addProductReducer;
