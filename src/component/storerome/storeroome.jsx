import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { FcAddDatabase, FcEditImage } from "react-icons/fc";

//==============================================================
const Storeroom = () => {
  return (
    <>
      {/*------------------- image box ------------------- */}
      <section>
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <img
              src="https://ithinklogistics.com/blog/wp-content/uploads/2019/12/functions-of-wms-1.jpg"
              className="img-fluid"
              alt="loading faild"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="row justify-content-around p-3  ">
          {/*------------------- add product box ------------------- */}
          <div className="col-5 text-center add">
            <Link className="s-link" to="addproduct">
              <FcAddDatabase className="s-icon" />
              <span className="s-text"> اضافه کردن محصول</span>
            </Link>
          </div>

          {/*------------------- edit product box ------------------- */}
          <div className="col-5 text-center edit">
            <Link className="s-link" to="productsTab">
              <FcEditImage className="s-icon" />
              <span className="s-text"> ویرایش محصول</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Storeroom;
