import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../StateManagement/actions/userActions";
import {
  IoMdKey,
  IoMdMail,
  IoIosLogIn,
  IoLogoFacebook,
  IoLogoGoogle,
  IoLogoLinkedin,
} from "react-icons/io";
import "./styles/loginStyle.css";
//========================================

const LoginUser = ({ loginUser, message, err }) => {
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    loginUser(email, password);
    e.target.reset();
  };

  return (
    <>
      <div className="container- ">
        <div className="row main-login">
          <div className="col-sm-9 col-md-6 col-lg-5 col-xl-3 form-box ">
            <section>
              <div className=" ">
                <span className="login-title">Login</span>
                <IoIosLogIn className="logo-login" />
              </div>
            </section>

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
            <p style={{ color: "black" }}>L</p>
          </div>
        </div>
      </div>
    </>
  );
};

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
