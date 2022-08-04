import axios from "axios";
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
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
    const apiUrl = "http://localhost:4000/api/auth/login";
    axios
      .post(apiUrl, userInfo)
      .then((res) => {
        const message = res.data.message;
        console.log("msg from backend:", message);
        dispach(loginUserSuccess(message));
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
    const apiUrl = "http://localhost:4000/api/auth/register";
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
