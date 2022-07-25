import { useEffect } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../StateManagement/actions/userActions";
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
      <h4>login Use page</h4>
      <div className="container">
        <div className="row">
          <div className="col">
            <div>
              <h1>{message}</h1>
            </div>
            <form action="" onSubmit={(e) => handelSubmit(e)}>
              <span>مشخصات</span>
              <div className="form-group mb-3">
                <label className="form-group" htmlFor="email">
                  ایمیل
                </label>
                <input type="email" className="form-control " name="email" />
              </div>
              <div className="form-group mb-3">
                <label className="form-group" htmlFor="password">
                  کلمه عبور
                </label>
                <input
                  type="password"
                  className="form-control "
                  name="password"
                />
              </div>
              <div className="form-group mb-3">
                <button className="btn btn-info btn-sm" type="submit">
                  ورود
                </button>
              </div>
            </form>
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
