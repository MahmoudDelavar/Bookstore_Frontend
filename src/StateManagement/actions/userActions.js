import axios from "axios";
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
} from "./actionTypes";

//------------Login product actions ---------------------

export const loginUserRquest = (email, password) => ({
  type: LOGIN_USER_REQUEST,
  email: email,
  password: password,
});

export const loginUserSuccess = (token, message) => ({
  type: LOGIN_USER_SUCCESS,
  token: token,
  message: message,
});

export const loginUserFailed = (err) => ({
  type: LOGIN_USER_FAILED,
  err: err,
});

export const loginUser = (email, password) => {
  return (dispach) => {
    dispach(loginUserRquest(email, password));
    const apiUrl = "http://localhost:4000/api/auth/login";
    axios
      .post(apiUrl, {
        email: email,
        password: password,
      })
      .then((res) => {
        const token = res.data.token;
        const message = res.data.message;
        dispach(loginUserSuccess(token, message));
      })
      .catch((err) => {
        dispach(loginUserFailed(err));
      });
  };
};
