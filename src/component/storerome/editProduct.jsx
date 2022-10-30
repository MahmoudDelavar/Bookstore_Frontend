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
      <div className="row align-items-center ">
        <div className="col-6">
          <Editproducts />
        </div>

        <CardComponent
          title={book.title}
          writer={book.writer}
          explan={book.explan}
          pric={book.pric}
          picPath={book.picPath}
        />
      </div>
    </>
  );
};

export default EditProduct;
