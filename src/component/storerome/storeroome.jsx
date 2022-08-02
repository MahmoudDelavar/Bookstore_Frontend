import React, { Component } from "react";

import InputBookInfo from "../imputComponent/InputBookInfo";
import Addproduct from "../imputComponent/addProducts";
import LastProductsAdded from "./LastProductsAdded";

//==============================================================
class Storeroom extends Component {
  render() {
    return (
      <>
        <div className="row justify-content-md-center">
          <div className="col-12 text-center">
            <img
              src="https://ithinklogistics.com/blog/wp-content/uploads/2019/12/functions-of-wms-1.jpg"
              className="img-fluid"
              alt="loading faild"
            />
          </div>
        </div>
        <Addproduct />
      </>
    );
  }
}

export default Storeroom;
