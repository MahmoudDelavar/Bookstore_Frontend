import axios from "axios";
import React, { Component } from "react";
import CardComponent from "../products/cardComponent";

import EditProduct from "../storerome/editProduct";
import ProductListBycategory from "../storerome/productListBycategory";

//-------------------------------------------

class LastProductsAdded extends Component {
  state = {
    books: [],
  };

  render() {
    return (
      <>
        <EditProduct />
      </>
    );
  }
}

export default LastProductsAdded;
