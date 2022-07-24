import axios from "axios";
import store from "../store";

import {
  GET_ALL_DATA_REQUEST,
  GET_ALL_DATA_SUCCESS,
  GET_ALL_DATA_FAILED,
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
  POST_DATA_FAILED,
} from "./actionTypes";

//------------grt all product - POST ---------------------
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
//------------Add product - POST ---------------------
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
store.getState();

export const addProduct = (data) => {
  return function (dispatch) {
    dispatch(postDatRequest(data));
    const apiUrl = "http://localhost:4000/api/storeroom";
    axios
      .post(apiUrl, data)
      .then((res) => {
        const msg = res.data.message;
        dispatch(productDataSuccess(msg));
        console.log("msg-productAtions_data:", data);
      })
      .catch((err) => {
        dispatch(productDataFaied(err));
        console.log("Asios FAIED");
      });
  };
};
//---------------------------------
