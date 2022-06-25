import { Key, Mailbox } from "react-bootstrap-icons";
import { FaUserAlt } from "react-icons/fa";
import "./style.css";
import axios from "axios";
import React, { Component } from "react";
import * as yup from "yup";
import InputComponent from "../imputComponent/inputComponent";

//=================================================================

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accunt: {
        userName: "",
        email: "",
        password: "",
      },
      errors: [],
      axiosMessage: [],
    };
  }
  //---------handel functions------------------
  handelSubmit = async (e) => {
    e.preventDefault();
    const result = await this.validate();
    console.log("msg from submit (state value):", this.state.accunt);

    axios
      .post("http://localhost:4000/api/auth/register", {
        name: this.state.accunt.userName,
        email: this.state.accunt.email,
        password: this.state.accunt.password,
      })
      .then((res) => {
        console.log("Axios successfuly send", res);
        this.setState({ axiosMessage: res.data.message });
      })
      .catch((err) => {
        console.log("Axios Erroes:", err);
      });

    if (this.state.errors.length !== 0) {
      this.setState({ accunt: "" });
      console.log("unvalid data");
    }
  };

  handelChenge = (e) => {
    const input = e.currentTarget;
    const newAccount = { ...this.state.accunt };
    newAccount[input.name] = input.value;
    this.setState({ accunt: newAccount });
  };

  //----------validation-------------
  schema = yup.object().shape({
    userName: yup.string().required("نام کاربری را وارد کنید"),
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
    } catch (err) {
      const errors = err.errors;
      this.setState({ errors });
    }
  };
  // componentDidMount() {
  //   axios
  //     .get("http://localhost:4000/api/auth/register")
  //     .then((res) => {
  //       console.log("didmount", res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log("didmount Errores", err);
  //     });
  // }
  //---------------------------
  render() {
    const { userName, email, password } = this.state.accunt;
    return (
      <>
        <div className="col-12 text-center ">
          <img
            src={require("./../../media/book_Banner/4.png")}
            className="img-fluid"
            alt="loading faild"
            style={{ width: "100%", height: "200px" }}
          />
        </div>
        <div className="container-fluid">
          <div className="row justify-content-md-center bg">
            <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 box bg">
              <div className="row justify-content-center mt-2">
                <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                  {this.state.errors.length !== 0 && (
                    <div className="alert alert-danger">
                      <ul className="text" style={{ listStyle: "none" }}>
                        {this.state.errors.map((e, index) => (
                          <li key={index}>{e}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                    {this.state.axiosMessage.length !== 0 && (
                      <div className="alert alert-warning">
                        <ul
                          className="text-center"
                          style={{ listStyle: "none", textAlign: "center" }}
                        >
                          {this.state.axiosMessage}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                {/* <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid h-100"
                  alt="register Image"
                />
              </div> */}
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-6">
                  <form action="#">
                    <InputComponent
                      name="userName"
                      type="text"
                      lable="نام کاربری "
                      icon={<FaUserAlt />}
                      onChange={this.handelChenge}
                      value={userName}
                    />
                    <InputComponent
                      name="email"
                      type="email"
                      lable="ایمیل "
                      icon={<Mailbox />}
                      onChange={this.handelChenge}
                      value={email}
                    />
                    <InputComponent
                      name="password"
                      type="password"
                      lable="رمز عبور"
                      icon={<Key />}
                      onChange={this.handelChenge}
                      value={password}
                    />
                    <div className="text-center d-grid gap-2 mt-4 ">
                      <button
                        onClick={this.handelSubmit}
                        type="button"
                        className="btn btn-outline-primary "
                      >
                        ثبت نام
                      </button>
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

export default Register;
