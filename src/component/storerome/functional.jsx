import React, { useEffect, useState } from "react";
import { Book } from "react-bootstrap-icons";
import { IoMdCreate } from "react-icons/io";
import { MdEuroSymbol } from "react-icons/md";
import { AiOutlineFieldNumber } from "react-icons/ai";
import ProductInput from "../imputComponent/inputComponent";
import * as yup from "yup";
import axios from "axios";

//==============================================================

const Functional = () => {
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [count, setCount] = useState("");
  const [pric, setPrice] = useState("");
  const [errores, setErrorse] = useState([]);
  const handelSubmit = async (e) => {
    e.preventDefault();
    const result = await this.validate();
    console.log("msg from submit: (reading form Stats)", title);

    axios
      .post("http://localhost:4000/api/storeroom", {
        title,
        writer,
        count,
        pric,
      })
      .then(() => console.log("Axios successfuly send"))
      .catch((err) => console.log("Axios Erroes:", err));

    if (errores !== 0) {
      setCount("");
      setPrice("");
      setTitle("");
      setWriter("");
      console.log("unvalid data");
    }
  };

  const handelChenge = (e) => {
    const input = e.currentTarget;

    const newProduct = { ...this.state.product };
    newProduct[input.name] = input.value;
    this.setState({ product: newProduct });
  };
  //----------validation-----------------
  schema = yup.object().shape({
    title: yup.string().required("عنوان کتاب را وارد کنید "),
    writer: yup.string().required("نویسنده کتاب را وارد کنید "),
    count: yup
      .number()
      .min(1, "تعداد صحیح نیست")
      .required("تعداد را وارد کنید "),
    pric: yup.number().min(1, "قیمت صحیح نیست").required("قیمت را وارد کنید "),
  });

  const validate = async () => {
    try {
      const result = await this.schema.validate(this.state.product, {
        abortEarly: false,
      });
      this.setState({ errors: "" });
      return result;
    } catch (error) {
      console.log(error.errors);
      this.setState({ errors: error.errors });
    }
  };
  return (
    <>
      <div className="row justify-content-md-center">
        <div className="col-12 text-center">
          <img
            src="https://ithinklogistics.com/blog/wp-content/uploads/2019/12/functions-of-wms-1.jpg"
            className="img-fluid"
            alt="loading faild"
          />
        </div>
      </div>

      <div className="container ">
        <div className="row justify-content-md-center">
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

          <div
            className="col-sm-12 col-md-6 col-lg-8 "
            style={{ backgroundColor: " #eee", borderRadius: "25" }}
          >
            <p className="text-center p-2">سامانه ثبت محصولات</p>
            <ProductInput
              name="title"
              type="text"
              lable="نام کتاب"
              value={title}
              onChange={this.handelChenge}
              icon={<Book />}
            />

            <ProductInput
              name="writer"
              type="text"
              lable="نویسنده"
              value={writer}
              onChange={this.handelChenge}
              icon={<IoMdCreate />}
            />
            <ProductInput
              name="count"
              type="number"
              lable="تعداد"
              value={count}
              onChange={this.handelChenge}
              icon={<AiOutlineFieldNumber />}
            />
            <ProductInput
              name="pric"
              type="number"
              lable="قیمت"
              value={pric}
              onChange={this.handelChenge}
              icon={<MdEuroSymbol />}
            />
            {/* <div class="input-group flex-nowrap m-2 p-2">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="categoty">
                    دسته بندی
                  </label>
                </div>
                <select className="custom-select" id="categoty">
                  <option selected>انتخاب کنید</option>
                  <option value="روانشناسی">روانشناسی</option>
                  <option value="رمان">رمان</option>
                  <option value="ورزشی">ورزشی</option>
                  <option value="تاریخ">تاریخ</option>
                  <option value="شعر">شعر</option>
                </select>
              </div> */}
            <div className="text-center">
              <button
                onClick={this.handelSubmit}
                className="btn btn-success btn-sm mb-2"
              >
                {" "}
                ثبت محصول
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Functional;
