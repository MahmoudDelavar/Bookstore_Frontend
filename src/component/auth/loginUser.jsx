import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../StateManagement/actions/userActions";
import * as yup from "yup";
import {
  IoMdKey,
  IoMdMail,
  IoIosLogIn,
  IoLogoFacebook,
  IoLogoGoogle,
  IoLogoLinkedin,
} from "react-icons/io";
import "./styles/loginStyle.css";
import { useState, useEffect } from "react";

//========================================

const LoginUser = ({ loginUser, message, err }) => {
  useEffect(() => {
    if (!errs) {
      setMsg(message);
      setDbErrs(err);
      console.log("DB errors", err);
    }
  });
  // ------ Handel submit form -------------------
  const handelSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    const userInfo = { email, password };
    const isValid = await validate(userInfo);
    if (isValid) {
      loginUser({ email, password });
      e.target.reset();
      setErrs("");
    } else {
      setMsg("");
      setDbErrs("");
    }
  };

  //----------validation-------------
  const schema = yup.object().shape({
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
      <div className="container- ">
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
                <div className="alert text-danger fadein ">
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
                <span className="login-title">Login</span>
                <IoIosLogIn className="logo-login" />
              </div>
            </section>

            {/*-------------- Login by Social Network --------------*/}
            <section className="loginBy">
              <span className="logonByText">ورود با </span>
              <br />
              <Link to="/#">
                <IoLogoFacebook className="logonByLogo" />
              </Link>
              <Link to="/#">
                <IoLogoGoogle className="logonByLogo" />
              </Link>
              <Link to="/#">
                <IoLogoLinkedin className="logonByLogo" />
              </Link>
            </section>

            {/*-------------- Form inputs --------------*/}
            <section>
              <form
                className="form"
                action=""
                onSubmit={(e) => handelSubmit(e)}
              >
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
                <div className=" d-grid ">
                  <button className="btn btn-secondary" type="submit">
                    ورود
                  </button>
                </div>
              </form>
            </section>
          </div>
          <div className="col-md-6 ">
            <p style={{ color: "dark" }}>L</p>
          </div>
        </div>
      </div>
    </>
  );
};
//------------ handel redux functions----------------
const mapStateToProps = (state) => {
  return {
    message: state.loginUserState.message,
    err: state.loginUserState.err,
  };
};
const mapDispatchToPropos = (dispatch) => {
  return {
    loginUser: (email, password) => dispatch(loginUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToPropos)(LoginUser);
