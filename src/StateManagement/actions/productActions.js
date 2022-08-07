import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";

import {
  GET_ALL_PRODUCT_REQUEST,
  GET_ALL_PRODUCT_SUCCESS,
  GET_ALL_PRODUCT_FAILED,
  GET_ONE_PRODUCT_REQUEST,
  GET_ONE_PRODUCT_SUCCESS,
  GET_ONE_PRODUCT_FAILED,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILED,
  EDIT_PRODUCT_REQUEST,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAILED,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILED,
} from "./actionTypes";

//=====================Get All products actions =====================
const productRequest = () => ({
  type: GET_ALL_PRODUCT_REQUEST,
});
const productDataSuccess = (products) => ({
  type: GET_ALL_PRODUCT_SUCCESS,
  payload: products,
});
const productDataFaied = (err) => ({
  type: GET_ALL_PRODUCT_FAILED,
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

//=====================Get One products actions =====================
const getOneproductRequest = (title) => ({
  type: GET_ONE_PRODUCT_REQUEST,
});
const getOneProducSuccess = (product, message) => ({
  type: GET_ONE_PRODUCT_SUCCESS,
  product,
  message,
});
const getOneproductFaied = (err) => ({
  type: GET_ONE_PRODUCT_FAILED,
  err,
});

export const getOneProduct = (title) => {
  return function (dispatch) {
    dispatch(getOneproductRequest(title));
    const apiUrl = `http://localhost:4000/api/storeroom/getOne?title=${title}`;
    axios
      .get(apiUrl)
      .then((res) => {
        const product = res.data.data;
        const message = res.data.message;
        dispatch(getOneProducSuccess(product, message));
        console.log("msg from backend", product);
        console.log("msg from backend", message);
      })
      .catch((err) => {
        dispatch(getOneproductFaied(err));
        console.log("Send Data FAIED", err);
      });
  };
};

//=====================Add product actions =====================
const addProductRequest = (data) => ({
  type: ADD_PRODUCT_REQUEST,
  payload: data,
});
const addProductSuccess = (message) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: message,
});
const addProductFailed = (err) => ({
  type: ADD_PRODUCT_FAILED,
  payload: err,
});

export const addProduct = (data) => {
  return function (dispatch) {
    dispatch(addProductRequest(data));
    const apiUrl = "http://localhost:4000/api/storeroom";
    axios
      .post(apiUrl, data)
      .then((res) => {
        const msg = res.data.message;
        dispatch(addProductSuccess(msg));
        console.log("msg from backend", msg);
      })
      .catch((err) => {
        dispatch(addProductFailed(err));
        console.log("Send Data FAIED", err);
      });
  };
};

//=====================Edit product actions =====================
const editProductRequest = (dataToEdit) => ({
  type: EDIT_PRODUCT_REQUEST,
  payload: dataToEdit,
});
const editProductSuccess = (editedData) => ({
  type: EDIT_PRODUCT_SUCCESS,
  payload: editedData,
});

const editProductFailed = (err) => ({
  type: EDIT_PRODUCT_FAILED,
  payload: err,
});

export const editProduct = (dataToEdit) => {
  return function (dispatch) {
    dispatch(editProductRequest(dataToEdit));
    const apiUrl = "http://localhost:4000/api/storeroom/edit";
    axios
      .put(apiUrl, dataToEdit)
      .then((res) => {
        const editedData = res.data.data;
        dispatch(editProductSuccess(editedData));
        console.log("msg from backend", editedData);
      })
      .catch((err) => {
        dispatch(editProductFailed(err));
        console.log("Send Data FAIED", err);
      });
  };
};

//=====================Delete One product actions =====================
const deletOneProductRequest = (title) => ({
  type: DELETE_PRODUCT_REQUEST,
  title,
});

const deletOneProductSuccess = (message, products) => ({
  type: DELETE_PRODUCT_SUCCESS,
  message,
  products,
});

const deletOneProductFailed = (err) => ({
  type: DELETE_PRODUCT_FAILED,
  err,
});

export const deletOneProduct = (title) => {
  return function (dispatch) {
    dispatch(deletOneProductRequest(title));
    const apiUrl = `http://localhost:4000/api/storeroom/deleteOne?title=${title}`;

    axios
      .delete(apiUrl, title)
      .then((res) => {
        const message = res.data.message;
        const products = res.data.data;

        dispatch(deletOneProductSuccess(message, products));
        console.log("msg from backend", message);
        console.log("msg from backend", products);
      })
      .catch((err) => {
        dispatch(deletOneProductFailed(err));
        console.log("Send Data FAIED", err);
      });
  };
};
