import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
} from "../../actions/actionTypes";

const initionalState = {
  isLoading: false,
  message: "",
  err: "",
};
function loginUser(state = initionalState, action) {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return { isLoading: true, message: "", err: "" };

    case LOGIN_USER_SUCCESS:
      return {
        isLoading: false,
        message: action.message,
        err: "",
      };

    case LOGIN_USER_FAILED:
      return {
        isLoading: false,
        message: "",
        err: action.err,
      };
    default:
      return state;
  }
}

export default loginUser;
