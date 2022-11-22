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
      {user ? (
        <div className=" ">
          {/*------------------- image box ------------------- */}
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <img
                src="https://ithinklogistics.com/blog/wp-content/uploads/2019/12/functions-of-wms-1.jpg"
                className="img-fluid"
                alt="loading faild"
              />
            </div>
          </div>

          {/*------------------- Add and Edit product box ------------------- */}
          <div className="row justify-content-center p-3  ">
            <div className="col-5 text-center ">
              <Link className="s-link" to="addproduct">
                <FcAddDatabase className="s-icon" />
                <p className="s-text"> اضافه کردن محصول</p>
              </Link>
            </div>

            <div className="col-5 text-center ">
              <Link className="s-link" to="productsTab">
                <FcEditImage className="s-icon" />
                <p classame="s-text"> ویرایش محصول</p>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className=" bg-dark unR-box-main  ">
          <div className="unR-box">
            <p className="text-center text-info fs-6 bg-secondary unR-text">
              برای دسترسی به سامانه انبار باید وارد حساب کاربریتون بشین
            </p>
            <p className="text-center text-warning fs-6">
              میتونین از ایمیل فیک برای ثبت نام استفاده کنین
            </p>
            <div className="row ">
              <div className="col  text-center ">
                <Link className="unR-nav-link " to="/register">
                  <TiEdit className="unR-icon" />
                  <p className="unR-text">ثبت نام</p>
                </Link>
              </div>
              <div className="col text-center">
                <Link className="unR-nav-link " to="/login">
                  <MdLogin className="unR-icon" />
                  <p className="unR-text">ورود</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Storeroom;
