import {
  USER_BY_TOKEN_FAILED,
  USER_BY_TOKEN_REQUEST,
  USER_BY_TOKEN_SUCCESS,
} from "../../actions/actionTypes";

const initionalState = {
  isLoading: false,
  token: "",
  user: "",
  err: "",
};
function findeUserByToken(state = initionalState, action) {
  switch (action.type) {
    case USER_BY_TOKEN_REQUEST:
      return { isLoading: true, token: action.token, user: "", err: "" };

    case USER_BY_TOKEN_SUCCESS:
      return {
        isLoading: false,
        token: action.token,
        user: action.user,
        err: "",
      };

    case USER_BY_TOKEN_FAILED:
      return {
        isLoading: false,
        token: "",
        user: "",
        err: action.err,
      };
    default:
      return state;
  }
}

export default findeUserByToken;
