import axios from "axios";

import {
  GET_ALL_DATA_REQUEST,
  GET_ALL_DATA_SUCCESS,
  GET_ALL_DATA_FAILED,
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
  POST_DATA_FAILED,
} from "./actionTypes";

//------------get products actions ---------------------
export const productRequest = () => ({
  type: GET_ALL_DATA_REQUEST,
});
export const productDataSuccess = (products) => ({
  type: GET_ALL_DATA_SUCCESS,
  payload: products,
});
export const productDataFaied = (err) => ({
  type: GET_ALL_DATA_FAILED,
  payload: err,
});

export const getAllProducts = (dispatch) => {
  const apiUrl = "http://localhost:4000/api/storeroom/all";
  dispatch(productRequest);
  axios
    .get(apiUrl)
    .then((res) => {
      const products = res.data.data;
      dispatch(productDataSuccess(products));
    })
    .catch((err) => {
      dispatch(productDataFaied(err.message));
    });
};
//------------Add product actions - POST ---------------------
export const postDatRequest = (data) => ({
  type: POST_DATA_REQUEST,
  payload: data,
});
export const postDataSuccess = (message) => ({
  type: POST_DATA_SUCCESS,
  payload: message,
});
export const postDataFailed = (err) => ({
  type: POST_DATA_FAILED,
  payload: err,
});

export const addProduct = (data) => {
  return function (dispatch) {
    dispatch(postDatRequest(data));
    const apiUrl = "http://localhost:4000/api/storeroom";
    axios
      .post(apiUrl, data)
      .then((res) => {
        const msg = res.data.message;
        dispatch(postDataSuccess(msg));
        console.log("Send Data success", msg);
      })
      .catch((err) => {
        dispatch(postDataFailed(err));
        console.log("Send Data FAIED", err);
      });
  };
};
//---------------------------------
