import "./style.css";
import { Google, Instagram, Linkedin } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import InputComponent from "../imputComponent/inputComponent";
import { MdAccountCircle, MdVpnKey } from "react-icons/md";
import * as yup from "yup";
import axios from "axios";

//=============================================================

class Login extends Component {
  state = {
    accunt: {
      email: "",
      password: "",
    },
    errors: [],
    message: [],
  };
  //---------handel functions------------------
  handelSubmit = async (e) => {
    e.preventDefault();
    const result = await this.validate();
    console.log("reading from validate:", result);
    console.log("state:", this.state.accunt);
    axios
      .post("http://localhost:4000/api/auth/login", {
        email: this.state.accunt.email,
        password: this.state.accunt.password,
      })
      .then((res) => {
        this.setState({ message: res.data.message });
      })
      .catch((err) => {
        console.log("axiosErrore!: ", err);
        this.setState({ message: " رمز عبور و یا ایمیل صحیح نیست" });
      });
  };

  handelChenge = (e) => {
    const input = e.currentTarget;
    const newAccount = { ...this.state.accunt };
    newAccount[input.name] = input.value;
    this.setState({ accunt: newAccount });
  };
  //----------validation-----------------
  schema = yup.object().shape({
    email: yup
      .string()
      .email("فرمت ایمل صحصح نیست")
      .required("ایمیل را وارد کنید "),
    password: yup.string().min(6, "پسوردباید حداقل 6 کاراتر باشد "),
  });

  validate = async () => {
    try {
      const result = await this.schema.validate(this.state.accunt, {
        abortEarly: false,
      });
      this.setState({ errors: "" });
      return result;
    } catch (error) {
      console.log(error.errors);
      this.setState({ errors: error.errors });
    }
  };
  //---------------------------
  render() {
    const { email, password } = this.state.accunt;

    return (
      <>
        <div className="col-12 text-center ">
          <img
            src={require("./../../media/book_Banner/Book-Banner.jpg")}
            className="img-fluid"
            alt="loading faild"
            style={{ width: "100%", height: "200px" }}
          />
        </div>
        <div className="container-fluid">
          <div className="row justify-content-md-center bg ">
            <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 box bg">
              <div className="row justify-content-center mt-2">
                <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 ">
                  {this.state.errors.length !== 0 && (
                    <div className="alert alert-danger mb-3">
                      <ul
                        className="text-center  fw-bold"
                        style={{ listStyle: "none" }}
                      >
                        {this.state.errors.map((e, index) => (
                          <li key={index}>{e}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 ">
                  {this.state.message.length !== 0 && (
                    <div className="alert alert-saccess mb-3">
                      <ul
                        className="text-center  fw-bold"
                        style={{ listStyle: "none" }}
                      >
                        {this.state.message}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="col-xs-10 col-sm-8 col-md-8 col-lg-5 box">
                  <form>
                    <div className=" align-items-center justify-content-center ">
                      <h6 className="text-center mb-3  ">ورود با </h6>
                      <div className="text-center">
                        <Link to="/a" className="me-4  link">
                          <Instagram className="m-2" size={30} />
                        </Link>
                        <Link to="/a" className="me-4  link">
                          <Google className="m-2" size={30} />
                        </Link>
                        <Link to="/a" className="me-4  link">
                          <Linkedin className="m-2" size={30} />
                        </Link>
                      </div>
                    </div>

                    <h6 className="text-center mt-2 "> یا </h6>
                    <form action=""></form>
                    <InputComponent
                      name="email"
                      type="email"
                      lable="ایمیل "
                      icon={<MdAccountCircle />}
                      onChange={this.handelChenge}
                      value={email}
                    />

                    <InputComponent
                      name="password"
                      type="password"
                      lable="کلمه عبور "
                      icon={<MdVpnKey />}
                      onChange={this.handelChenge}
                      value={password}
                    />
                    <div className=" justify-content-between text-center">
                      <div className="form-check mt-2">
                        <label className="remember " htmlFor="remember">
                          مرا به خاطر بسپار
                        </label>{" "}
                        <input
                          className="form-check-input me-2 "
                          type="checkbox"
                          value=""
                          id="remember"
                        />
                      </div>
                      <div className="mt-3">
                        <Link to="/forgetPass" className="me-4  link">
                          کلمه عبود را فراموش کرده اید ؟
                        </Link>
                      </div>
                    </div>

                    <div className="text-center  mt-4 ">
                      <button
                        onClick={this.handelSubmit}
                        type="button"
                        className="btn btn-outline-primary btn-lg"
                      >
                        ورود
                      </button>
                      <p className="small fw-bold mt-2 pt-1 mb-0 text-center">
                        تاکنون ثبت نام نکرده اید؟{" "}
                        <Link to="/register" className="link">
                          ثبت نام
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
