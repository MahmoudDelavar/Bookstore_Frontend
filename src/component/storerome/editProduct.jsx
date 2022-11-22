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
      <div className="row box">
        <div className="mx-auto col-xl-8 col-lg-9 col-md-8 col-sm-8 col-xs-11 ">
          <div className="row align-items-center justify-content-around ">
            <div className="col-lg-8 col-sm-7 col-md-9 col-sm-11  ">
              <Editproducts />
            </div>

            <div className="col-lg-4 col-sm-4 col-md-5 col-sm-11 ">
              <div className="col d-none d-lg-block ">
                <img
                  className="edit-img "
                  src={require("./../../media/editbook.png")}
                  alt=""
                />
              </div>
              <div className="col d-none d-lg-block ">
                <CardComponent
                  title={book.title}
                  writer={book.writer}
                  explan={book.explan}
                  pric={book.pric}
                  picPath={book.picPath}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
