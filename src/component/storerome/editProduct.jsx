import CardComponent from "./../products/cardComponent";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Editproducts from "../imputComponent/editProduct";

//-------------------------------------------

const EditProduct = () => {
  const book = useSelector((state) => state.oneProductState.product);

  //------------------------------

  return (
    <>
      <h2>edit product page</h2>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Editproducts />
          </div>
          <div className="col-6">
            <CardComponent
              title={book.title}
              writer={book.writer}
              explan={book.explan}
              pric={book.pric}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
