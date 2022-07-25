import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
} from "../../actions/actionTypes";
//=============================================================

const initionalState = {
  isLoading: false,
  user: "",
  message: "",
  err: "",
};

function registerUser(state = initionalState, action) {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return { isLoading: true, user: action.user, message: "", err: "" };

    case REGISTER_USER_SUCCESS:
      return { isLoading: false, user: "", message: action.message, err: "" };

    case REGISTER_USER_FAILED:
      return { isLoading: false, user: "", message: "", err: action.err };
  }
}

export default registerUser;
