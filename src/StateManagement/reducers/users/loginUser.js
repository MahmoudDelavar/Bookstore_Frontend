import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
} from "../../actions/actionTypes";

const initionalState = {
  isLoading: false,
  token: "",
  message: "",
  err: "",
};
function loginUser(state = initionalState, action) {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return { isLoading: true, token: undefined, message: "", err: "" };

    case LOGIN_USER_SUCCESS:
      return {
        isLoading: false,
        token: action.token,
        message: action.message,
        err: "",
      };

    case LOGIN_USER_FAILED:
      return {
        isLoading: false,
        token: undefined,
        message: "",
        err: action.err,
      };
    default:
      return state;
  }
}

export default loginUser;
