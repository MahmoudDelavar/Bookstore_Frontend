import { connect } from "react-redux";

import { registerUser } from "../../StateManagement/actions/userActions";
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
      <h4>register User Page</h4>
      <div className="container">
        <div className="row">
          <div className="col">
            {message}
            <form action="" onSubmit={(e) => handelSubmit(e)}>
              <div className="form-group mb-3">
                <label className="form-group" htmlFor="userName">
                  نام کاربری
                </label>
                <input type="text" className="form-control " name="userName" />
              </div>
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
                  ثبت نام
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
    message: state.registerUserState.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (user) => dispatch(registerUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);
