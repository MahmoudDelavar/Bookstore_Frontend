import { connect } from "react-redux";
import { registerUser } from "../../StateManagement/actions/userActions";
import "./styles/loginStyle.css";
import {
  IoMdKey,
  IoMdMail,
  IoIosLogIn,
  IoLogoFacebook,
  IoLogoGoogle,
  IoLogoLinkedin,
} from "react-icons/io";
//========================================

const RegisterUser = ({ registerUser, message }) => {
  const handelSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("userName");
    const password = form.get("password");
    const email = form.get("email");

    registerUser({ name, email, password });
    e.target.reset();
  };
  return (
    <>
      <div className="container-">
        <div className="row main-login">
          <div className="col-sm-9 col-md-6 col-lg-5 col-xl-3 form-box ">
            <section>
              <div className=" ">
                <span className="login-title">Register</span>
                <IoIosLogIn className="logo-login" />
              </div>
            </section>
            <section>
              <form
                className="form"
                action=""
                onSubmit={(e) => handelSubmit(e)}
              >
                <label htmlFor="userName-label">نام کاربری</label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <IoMdMail className="login-icon" />
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (user) => dispatch(registerUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);
