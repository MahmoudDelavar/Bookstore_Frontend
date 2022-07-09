import axios from "axios";
import React, { Component } from "react";
import CardComponent from "../products/cardComponent";
import EditProducts from "../storerome/editProducts";
//-------------------------------------------

class LastProductsAdded extends Component {
  state = {
    books: [],
  };

  render() {
    return (
      <>
        <EditProducts />
      </>
    );
  }
}

export default LastProductsAdded;
