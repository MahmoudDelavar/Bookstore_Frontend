import { connect } from "react-redux";
import { registerUser } from "../../StateManagement/actions/userActions";
import "./styles/loginStyle.css";
import * as yup from "yup";

import { IoMdKey, IoMdMail, IoIosLogIn, IoIosContact } from "react-icons/io";
import { useEffect, useState } from "react";
//========================================

const RegisterUser = ({ registerUser, message, err }) => {
  useEffect(() => {
    if (!errs) {
      setMsg(message);
      setDbErrs(err);
      console.log("DB errors", err);
      console.log("DB success", message);
    }
  });
  // ------ Handel submit form -------------------
  const handelSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const userName = form.get("userName");
    const password = form.get("password");
    const re_password = form.get("re-password");
    const email = form.get("email");
    const userInfo = { userName, email, password };
    const isValid = await validate(userInfo);
    if (re_password === password) {
      if (isValid) {
        registerUser({ userName, email, password });
        e.target.reset();
        setErrs("");
        setTimeout(() => {
          window.location = "/";
        }, 2000);
      } else {
        setMsg("");
        setDbErrs("");
      }
    } else {
      setErrs(["تکرار پسورد مطابقت ندارد"]);
    }
  };

  //----------validation-------------
  const schema = yup.object().shape({
    userName: yup.string().required(" نام کاربری را وارد کنید"),
    email: yup
      .string()
      .email("فرمت ایمیل صحیح نیست ")
      .required("ایمیل را وارد کنید"),
    password: yup.string().min(6, "پسورد باید حداقل 6 کاراکتر باشد"),
  });

  const validate = async (userInfo) => {
    try {
      const result = await schema.validate(userInfo, { abortEarly: false });
      return result;
    } catch (error) {
      console.log(error.errors);
      setErrs(error.errors);
    }
  };
  //------------------------------------
  const [msg, setMsg] = useState([]);
  const [errs, setErrs] = useState([]);
  const [dbErrs, setDbErrs] = useState([]);

  return (
    <>
      <div className="container-">
        <div className="row main-login">
          <div className="col-sm-9 col-md-6 col-lg-5 col-xl-3 form-box ">
            {/*-------------------  validation error box -------------------*/}
            <section>
              {errs.length !== 0 && (
                <div className="alert alert-danger mb-3">
                  <ul
                    className="text-center success fw-bold"
                    style={{ listStyle: "none" }}
                  >
                    {errs.map((e, index) => (
                      <li key={index}>{e}</li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            {/*-----------------  Databas error box ------------------*/}
            <section>
              {dbErrs && (
                <div className="alert text-danger  mb-3">
                  <span>{dbErrs}</span>
                </div>
              )}
            </section>

            {/*------------------- Databas success msg box -------------------*/}
            {msg && (
              <div className="alert text-success  mb-3">
                <span>{msg}</span>
              </div>
            )}

            {/*-------------- Title --------------*/}
            <section>
              <div className=" ">
                <span className="login-title">Register</span>
                <IoIosLogIn className="logo-login" />
              </div>
            </section>

            {/*-------------- Form inputs --------------*/}
            <section>
              <form
                className="form"
                action=""
                onSubmit={(e) => handelSubmit(e)}
              >
                <label htmlFor="userName-label">نام کاربری</label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <IoIosContact className="login-icon" />
                  </span>
                  <input
                    type="text"
                    className="form-control "
                    name="userName"
                    id="userName-label"
                  />
                </div>
                <label htmlFor="email-label">ایمیل</label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <IoMdMail className="login-icon" />
                  </span>
                  <input
                    type="email"
                    className="form-control "
                    name="email"
                    id="email-label"
                  />
                </div>
                <label htmlFor="pass-label">کلمه عبور</label>
                <div className="input-group mb-3">
                  <span className="input-group-text ">
                    <IoMdKey className="login-icon" />
                  </span>
                  <input
                    type="password"
                    className="form-control "
                    name="password"
                    id="pass-label"
                  />
                </div>
                <label htmlFor="pass-label">تکرار کلمه عبور </label>
                <div className="input-group mb-3">
                  <span className="input-group-text ">
                    <IoMdKey className="login-icon" />
                  </span>
                  <input
                    type="password"
                    className="form-control "
                    name="re-password"
                    id="pass-label"
                  />
                </div>
                <div className="d-grid">
                  <button className="btn btn-info btn-sm" type="submit">
                    ثبت نام
                  </button>
                </div>
              </form>
            </section>
          </div>
          <div className="col-md-6 ">
            <p style={{ color: "black" }}>L</p>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    message: state.registerUserState.message,
    err: state.registerUserState.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (user) => dispatch(registerUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);
