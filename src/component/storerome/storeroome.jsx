import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { FcAddDatabase, FcEditImage } from "react-icons/fc";
import { useEffect, useState } from "react";
import { MdHome, MdLogin, MdLogout } from "react-icons/md";
import { TiEdit, TiClipboard } from "react-icons/ti";

//==============================================================
const Storeroom = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setUser(null);
      return;
    }
    setUser(token);
  });
  //---------------------

  const [user, setUser] = useState(null);
  return (
    <>
      {/*------------------- image box ------------------- */}

      {user ? (
        <section>
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
      ) : (
        <>
          <div className="unR-box">
            <p className="text-center text-light bg-secondary unR-text">
              لطفا ابتدا وارد حساب کاربری خود شوید{" "}
            </p>
            <div className="row">
              <div className="col text-center">
                {" "}
                <Link className="nav-link " to="/register">
                  <TiEdit className="unR-icon" />{" "}
                  <p className="unR-text">ثبت نام</p>
                </Link>
              </div>
              <div className="col text-center">
                <Link className="nav-link " to="/login">
                  <MdLogin className="unR-icon" />{" "}
                  <p className="unR-text">ورود</p>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Storeroom;
