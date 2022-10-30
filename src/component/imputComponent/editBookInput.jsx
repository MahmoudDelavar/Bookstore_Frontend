import React, { Component } from "react";
import { Book } from "react-bootstrap-icons";
import { IoMdCreate } from "react-icons/io";
import { MdEuroSymbol } from "react-icons/md";
import { AiOutlineFieldNumber } from "react-icons/ai";
import ProductInput from "./inputComponent";
import * as yup from "yup";
import axios from "axios";

//==============================================================
class EditBookInfo extends Component {
  state = {
    product: {
      title: "",
      writer: "",
      count: "0",
      explan: "",
      pric: "0",
      category: "",
    },
    errors: [],
    message: [],
  };
  bookName = this.props.bookName.value;

  //---------handel functions------------------
  handelSubmit = async (e) => {
    e.preventDefault();
    const result = await this.validate();
    console.log(
      "Add new cuntact by  this info: (reading form Stats)",
      this.state.product.errors
    );

    console.log("msg from submit:", this.state.product);

    axios
      .put(`http://yeechizi.ir/api/storeroom?title=${this.bookName}`, {
        title: this.state.product.title,
        writer: this.state.product.writer,
        count: this.state.product.count,
        pric: this.state.product.pric,
        category: this.state.product.category,
        explan: this.state.product.explan,
      })
      .then((res) => {
        console.log("Axios successfuly send", res);
        this.setState({ message: res.data.message });
      })
      .catch((err) => {
        console.log("Axios Erroes(editbookinputs):", err);
        this.setState({ message: "ویرایش انجام نشد " });
      });

    if (this.state.errors.length !== 0) {
      this.setState({ product: "" });
      console.log("unvalid data");
    }
  };

  handelChenge = (e) => {
    const input = e.currentTarget;
    const newProduct = { ...this.state.product };
    newProduct[input.name] = input.value;
    this.setState({ product: newProduct });
  };
  //----------validation-----------------
  schema = yup.object().shape({
    title: yup.string().required("عنوان کتابو ثبت نکردی "),
    writer: yup.string().required("نویسنده کتاب کیه؟ "),
    explan: yup.string().required("یکم توضیحاتم بنویسی بد نیست "),
    category: yup.string().required("دسته بندی نمیخاد ؟!! "),
    count: yup
      .number()
      .min(1, "تعداد صحیح نیست")
      .required("تعداد را وارد کنید "),
    pric: yup.number().min(1, "قیمت صحیح نیست").required("قیمت را وارد کنید "),
  });

  validate = async () => {
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
  //---------------------------

  //---------------------------
  render() {
    const { title, writer, count, pric, category, explan } = this.state.product;
    return (
      <>
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
            <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 col-xl-8">
              {this.state.message.length !== 0 && (
                <div className="alert alert-success">
                  <ul
                    className="text-center"
                    style={{ listStyle: "none", textAlign: "center" }}
                  >
                    {this.state.message}
                  </ul>
                </div>
              )}
            </div>

            <div
              className="col-sm-12 col-md-6 col-lg-8 "
              style={{ backgroundColor: " #eee", borderRadius: "25" }}
            >
              <h3>ویرایش اطلاعات </h3>
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
              <ProductInput
                name="category"
                type="text"
                lable="دسته بندی"
                value={category}
                onChange={this.handelChenge}
                icon={<MdEuroSymbol />}
              />
              <ProductInput
                name="explan"
                type="text"
                lable="توضیحات "
                value={explan}
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
                  ویرایش
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EditBookInfo;
