import { connect, useDispatch, useSelector } from "react-redux";
import { editProduct } from "../../StateManagement/actions/productActions";
import "./addProducts.css";
import * as yup from "yup";
import { Book } from "react-bootstrap-icons";
import { IoMdCreate } from "react-icons/io";
import { MdEuroSymbol } from "react-icons/md";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { ImImage, ImList2, ImFileText2 } from "react-icons/im";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { FcPlus, FcPicture } from "react-icons/fc";

//========================================
const Editproduct = () => {
  useEffect(() => {
    if (!err) {
      setMsg(message);
    }
  }, []);
  //----------------------------------------
  const dispatch = useDispatch();

  const infoToEdit = useSelector((state) => state.oneProductState.product);
  const message = useSelector((state) => state.editProducState.message);

  //-------------------------- states -----------------------------------------------
  const [msg, setMsg] = useState([]);
  const [err, setErr] = useState([]);
  const [picPath, setPicPath] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // ------ Handel submit form -------------------
  const handelSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const img = form.get("img");
    const title = form.get("title");
    const oldTitle = infoToEdit.title;
    const writer = form.get("writer");
    const count = form.get("count");
    const pric = form.get("pric");
    const explan = form.get("explan");
    const category = form.get("category");
    if (picPath == "") {
      picPath = infoToEdit.picPath;
    }
    const bookInfo = {
      title,
      writer,
      count,
      pric,
      explan,
      category,
      img,
    };

    const isValid = await validate(bookInfo);
    if (isValid) {
      dispatch(
        editProduct({
          title,
          writer,
          count,
          pric,
          explan,
          category,
          img,
          oldTitle,
          picPath,
        })
      );
      event.target.reset();
      setErr("");
      setMsg("ویرایش انجام شد");
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

  //----------Send Users Avatar To Server-----------------
  const handleChange = async (e) => {
    setIsLoading(true);
    e.preventDefault();
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
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container">
        {/*------------------- error and success message box -------------------*/}

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
              <div className="alert   mb-3">
                <ul
                  className="text-center bg-info fw-bold"
                  style={{ listStyle: "none", color: "green" }}
                >
                  {msg}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/*---------------------------- form box---------------------------- */}

        <div className="row  ">
          <div className="col edit-form-box">
            <p className="text-center mt-2">ویرایش اطلاعات</p>
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
                  defaultValue={infoToEdit.title}
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
                  defaultValue={infoToEdit.writer}
                />
              </div>
              <label htmlFor="explan-label"> توضیحات</label>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <ImFileText2 className="login-icon" />
                </span>
                {/* <input
                      type="text"
                      className="form-control "
                      name="explan"
                      id="explan-label"
                      defaultValue={infoToEdit.explan}
                    /> */}
                <textarea
                  className="form-control "
                  name="explan"
                  id="explan-label"
                  defaultValue={infoToEdit.explan}
                  style={{ minHeight: "8rem" }}
                ></textarea>
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
                  defaultValue={infoToEdit.count}
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
                  defaultValue={infoToEdit.pric}
                />
              </div>

              <div className="d-grid input-group mb-3 ">
                <span className="input-group">
                  <label htmlFor="category-label ">دسته بندی</label>
                </span>

                <select
                  className="custom-select input-group "
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
                <div className="col">
                  <label htmlFor="pic">
                    <ImImage size={50} />
                    <p> تصویر محصول</p>
                  </label>
                  <input
                    onChange={(e) => handleChange(e)}
                    id="pic"
                    type="file"
                    className="pic-input"
                  />
                </div>
                <div className="col">
                  {picPath !== "" ? (
                    <img
                      className="pic"
                      src={`http://yeechizi.ir:5000/${picPath}`}
                    />
                  ) : isLoading ? (
                    <>
                      <div className="spinner-border text-danger" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <p className="text-center">منتظر بمانید </p>
                    </>
                  ) : (
                    <div>
                      <FcPicture size={50} /> <p>پیش نمایش</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="d-grid mb-3 text-center">
                <button type="submit" className="btn btn-info ">
                  ویرایش و ذخیره{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editproduct;
