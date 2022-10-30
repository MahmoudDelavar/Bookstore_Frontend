import axios from "axios";
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  USER_BY_TOKEN_REQUEST,
  USER_BY_TOKEN_SUCCESS,
  USER_BY_TOKEN_FAILED,
  EDIT_PRODUCT_REQUEST,
} from "./actionTypes";

//------------Login User actions ---------------------
export const loginUserRquest = (userInfo) => ({
  type: LOGIN_USER_REQUEST,
  payload: userInfo,
});

export const loginUserSuccess = (message) => ({
  type: LOGIN_USER_SUCCESS,
  message: message,
});

export const loginUserFailed = (err) => ({
  type: LOGIN_USER_FAILED,
  err: err,
});

export const loginUser = (userInfo) => {
  return (dispach) => {
    dispach(loginUserRquest(userInfo));
    console.log("userInfo to send", userInfo);
    const apiUrl = "http://yeechizi.ir/api/auth/login";
    axios
      .post(apiUrl, userInfo)
      .then((res) => {
        const message = res.data.message;
        console.log("msg from backend:", message);
        localStorage.setItem("token", res.data.data);
        dispach(loginUserSuccess(message));
        setTimeout(() => {
          window.location = "/";
        }, 2000);
      })
      .catch((err) => {
        const errs = "رمز عبور ویا ایمیل صحیح نیست";
        dispach(loginUserFailed(errs));
        console.log("Send Data FAIED", err);
      });
  };
};

//------------Register User actions ---------------------

export const registerUserRequest = (user) => ({
  type: REGISTER_USER_REQUEST,
  user: user,
});

export const registerUserSuccess = (message) => ({
  type: REGISTER_USER_SUCCESS,
  message: message,
});

export const registerUserFailed = (err) => ({
  type: REGISTER_USER_FAILED,
  err: err,
});

export const registerUser = (user) => {
  return (dispach) => {
    dispach(registerUserRequest(user));
    const apiUrl = "http://yeechizi.ir/api/auth/register";
    axios
      .post(apiUrl, user)
      .then((res) => {
        const message = res.data.message;
        console.log("msg from backend", message);
        dispach(registerUserSuccess(message));
      })
      .catch((err) => {
        const errs = "این ایمیل قبلا ثبت شده است";
        dispach(registerUserFailed(errs));
        console.log("Send Data FAIED", err);
      });
  };
};

//------------ Find User By Token ---------------------
export const finUserRequest = (token) => ({
  type: USER_BY_TOKEN_REQUEST,
  token,
});

export const finUserSuccess = (user, token) => ({
  type: USER_BY_TOKEN_SUCCESS,
  user,
  token,
});

export const finUserFailed = (err) => ({
  type: USER_BY_TOKEN_FAILED,
  err,
});

export const findeUserByToken = (token) => {
  return (dispatch) => {
    dispatch(finUserRequest(token));
    const apiUrl = "http://yeechizi.ir/api/storeroom";
    axios
      .post(apiUrl, token)
      .then((res) => {
        const user = res.user;
        if (user) {
          dispatch(finUserSuccess(user));
        }
      })
      .catch((err) => {
        dispatch(finUserFailed(err));
      });
  };
};
