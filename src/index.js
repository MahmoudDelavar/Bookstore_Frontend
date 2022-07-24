import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.js";
import { BrowserRouter } from "react-router-dom";
import "./fonts/Yekan.ttf";
import store from "./StateManagement/store";
import { Provider } from "react-redux";
//============================
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  ,
  document.getElementById("root")
);
