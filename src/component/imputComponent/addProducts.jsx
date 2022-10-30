import { connect } from "react-redux";
import { addProduct } from "../../StateManagement/actions/productActions";
import "./addProducts.css";
import * as yup from "yup";
import { Book } from "react-bootstrap-icons";
import { IoMdCreate } from "react-icons/io";
import { MdEuroSymbol } from "react-icons/md";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { ImImage, ImList2, ImFileText2 } from "react-icons/im";
import { useState } from "react";
import { useEffect } from "react";
import { FcPlus, FcPicture } from "react-icons/fc";
import axios from "axios";

//========================================
const Addproduct = ({ addProduct, message }) => {
  const [picPath, setPicPath] = useState("");

  useEffect(() => {
    if (!err) {
      setMsg(message);
    }
  });
  //-------------------------- send data to backend ---------------------------------

  //____Send products Picture To Server___
  const handleChange = async (e) => {
    setPicPath("");
    const form = new FormData();
    const config = {
      header: { "content-type": "multipart-data" },
    };
    form.append("file", e.target.files[0]);
    axios
      .post("http://yeechizi.ir/api/storeroom/uploadPic", form, config)
      .then((res) => {
        setPicPath(res.data.data.filePath);
      })
      .catch((err) => console.log(err));
  };
  // ------ Handel submit form -------------------
  const handelSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const title = form.get("title");
    const writer = form.get("writer");
    const count = form.get("count");
    const pric = form.get("pric");
    const explan = form.get("explan");
    const category = form.get("category");
    const bookInfo = { title, writer, count, pric, explan, category };
    const isValid = await validate(bookInfo);
    if (isValid) {
      addProduct({ title, writer, count, pric, explan, category, picPath });
      event.target.reset();
      setErr("");
      setPicPath("");
    } else {
      setMsg("");
    }
  };

  //----------validation input-----------------
  const schema = yup.object().shape({
    title: yup.string().required(" عنوان کتاب را وارد کنید "),
    writer: yup.string().required(" نوسنده  را وارد کنید  "),
    explan: yup.string().required("  توضیحاتی درمورد کتاب بنویسید"),
    category: yup.string().required(" دسته بندی را انتخاب کنید  "),
    count: yup
      .number("تعداد صحیح نیست")
      .required("تعداد را وارد کنید  ")
      .positive("تعداد صحیح نیست")
      .integer("تعداد صحیح نیست")
      .min(1, "تعداد صحیح نیست"),
    pric: yup
      .number("قیمت صحیح نیست ")
      .required(" قیمت را وارد کنید ")
      .positive("قیمت صحیح نیست "),
  });

  const validate = async (bookInfo) => {
    try {
      const result = await schema.validate(bookInfo, { abortEarly: false });
      return result;
    } catch (error) {
      console.log(error.errors);
      setErr(error.errors);
    }
  };
  //---------- End validation input-----------------
  const [msg, setMsg] = useState([]);
  const [err, setErr] = useState([]);
  return (
    <>
      <div className="container">
        {/*------------------- error and success message box -------------------*/}
        <section>
          <div className="row justify-content-center">
            {err.length !== 0 && (
              <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 col-xl-8  ">
                <div className="alert alert-danger mb-3">
                  <ul
                    className="text-center  fw-bold"
                    style={{ listStyle: "none" }}
                  >
                    {err.map((e, index) => (
                      <li key={index}>{e}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {msg && (
              <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 col-xl-8  ">
                <div className="alert  mb-3">
                  <ul
                    className="text-center  fw-bold"
                    style={{ listStyle: "none", color: "green" }}
                  >
                    {msg}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </section>
        {/*---------------------------- fotm box---------------------------- */}
        <section>
          <div className="row justify-content-center box">
            <div className="col-sm-12 col-md-9 col-lg-6  ">
              <h6 className="text-center">افزودن محصول</h6>
              <form
                method="post"
                onSubmit={(event) => handelSubmit(event)}
                encType="multipart/form-data"
              >
                <label htmlFor="title-label">عنوان کتاب</label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <Book className="login-icon" />
                  </span>
                  <input
                    type="text"
                    className="form-control "
                    name="title"
                    id="title-label"
                  />
                </div>
                <label htmlFor="writer-label"> نویسنده</label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <IoMdCreate className="login-icon" />
                  </span>
                  <input
                    type="text"
                    className="form-control "
                    name="writer"
                    id="writer-label"
                  />
                </div>
                <label htmlFor="explan-label"> توضیحات</label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <ImFileText2 className="login-icon" />
                  </span>
                  <input
                    type="text"
                    className="form-control "
                    name="explan"
                    id="explan-label"
                  />
                </div>
                <label htmlFor="count-label"> تعداد</label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <AiOutlineFieldNumber className="login-icon" />
                  </span>
                  <input
                    type="number"
                    className="form-control "
                    name="count"
                    id="count-label"
                    defaultValue={0}
                  />
                </div>
                <label htmlFor="pric-label"> قیمت</label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <MdEuroSymbol className="login-icon" />
                  </span>
                  <input
                    type="number"
                    className="form-control "
                    name="pric"
                    id="pric-label"
                    defaultValue={0}
                  />
                </div>

                <div className="input-group mb-3 ">
                  <span className="input-group-text">
                    <label htmlFor="category-label ">دسته بندی</label>
                  </span>
                  <span className="input-group-text">
                    <ImList2 className="login-icon" />
                  </span>
                  <select
                    className="custom-select input-group-text "
                    name="category"
                    id="category-label"
                  >
                    <option selected value="">
                      انتخاب کنید
                    </option>
                    <option value="روانشناسی">روانشناسی</option>
                    <option value="رمان">رمان</option>
                    <option value="ورزشی">ورزشی</option>
                    <option value="تاریخی">تاریخی</option>
                    <option value="شعر">شعر</option>
                  </select>
                </div>

                <div className="row align-items-center text-center">
                  <div className="col-6 ">
                    <label htmlFor="avatar">
                      <FcPlus size={50} />
                      <p> تصویر محصل</p>
                    </label>
                    <input
                      onChange={(e) => handleChange(e)}
                      id="avatar"
                      type="file"
                      className="pic-input"
                    />
                  </div>
                  <div className="col-6">
                    {picPath !== "" && (
                      <img
                        className="pic"
                        src={`http://yeechizi.ir:5000/${picPath}`}
                      />
                    )}
                    {picPath == "" && (
                      <div>
                        <FcPicture size={50} /> <p>پیش نمایش</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="d-grid mt-2 mb-3 text-center">
                  <button type="submit" className="btn btn-info btn-lg">
                    ثبت محصول
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    message: state.addProductState.msg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (data) => dispatch(addProduct(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Addproduct);
