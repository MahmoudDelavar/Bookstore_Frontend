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
  // ----------states and Initional data---------------
  const [picPath, setPicPath] = useState("");
  const [msg, setMsg] = useState([]);
  const [err, setErr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //---------------------------------------------------

  useEffect(() => {
    if (!err) {
      setMsg(message);
    }
  });

  //-------- send data to backend -----------
  //____Send products Picture To Server___
  const loadPic = async (e) => {
    e.preventDefault();
    setPicPath("");
    setIsLoading(true);
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
    title: yup.string().required(" ?????????? ???????? ???? ???????? ???????? "),
    writer: yup.string().required(" ????????????  ???? ???????? ????????  "),
    explan: yup.string().required("  ???????????????? ???????????? ???????? ??????????????"),
    category: yup.string().required(" ???????? ???????? ???? ???????????? ????????  "),
    count: yup
      .number("?????????? ???????? ????????")
      .required("?????????? ???? ???????? ????????  ")
      .positive("?????????? ???????? ????????")
      .integer("?????????? ???????? ????????")
      .min(1, "?????????? ???????? ????????"),
    pric: yup
      .number("???????? ???????? ???????? ")
      .required(" ???????? ???? ???????? ???????? ")
      .positive("???????? ???????? ???????? "),
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

  return (
    <>
      {/*------------------- error and success message box -------------------*/}
      <div className="row justify-content-center box pb-5">
        {err.length !== 0 && (
          <div className="col-xs-10 col-sm-9 col-md-7 col-lg-5 col-xl-5  d-block ">
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
          <div className="col-xs-10 col-sm-9 col-md-7 col-lg-5 col-xl-5  ">
            <div className="alert  mb-3">
              <ul
                className="text-center  fw-bold"
                style={{ listStyle: "none", color: "blue" }}
              >
                {msg}
              </ul>
            </div>
          </div>
        )}

        {/*---------------------------- form box---------------------------- */}
        <div className="row"></div>

        <div className="row align-items-center justify-content-center ">
          <div className="col-xs-10 col-sm-9 col-md-7 col-lg-5 col-xl-5 edit-form-box ">
            <h6 className="text-center mt-1">???????????? ??????????</h6>

            <form
              method="post"
              onSubmit={(event) => handelSubmit(event)}
              encType="multipart/form-data"
            >
              <label htmlFor="title-label">?????????? ????????</label>
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
              <label htmlFor="writer-label"> ??????????????</label>
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
              <label htmlFor="explan-label"> ??????????????</label>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <ImFileText2 className="login-icon" />
                </span>
                {/* <input
                type="text"
                className="form-control "
                name="explan"
                id="explan-label"
              /> */}
                <textarea
                  className="form-control "
                  name="explan"
                  id="explan-label"
                  style={{ minHeight: "8rem" }}
                ></textarea>
              </div>
              <label htmlFor="count-label"> ??????????</label>
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
              <label htmlFor="pric-label"> ????????</label>
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

              <div className="d-grid input-group mb-3 ">
                <span className="input-group">
                  <label htmlFor="category-label ">???????? ????????</label>
                </span>

                <select
                  className="custom-select input-group "
                  name="category"
                  id="category-label"
                >
                  <option selected value="">
                    ???????????? ????????
                  </option>
                  <option value="??????????????????">??????????????????</option>
                  <option value="????????">????????</option>
                  <option value="??????????">??????????</option>
                  <option value="????????????">????????????</option>
                  <option value="??????">??????</option>
                </select>
              </div>

              <div className="row align-items-center text-center">
                <div className="col-6 ">
                  <label htmlFor="avatar">
                    <FcPlus size={50} />
                    <p> ?????????? ??????????</p>
                  </label>
                  <input
                    onChange={(e) => loadPic(e)}
                    id="avatar"
                    type="file"
                    className="pic-input"
                  />
                </div>
                <div className="col-6">
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
                      <p className="text-center">?????????? ???????????? </p>
                    </>
                  ) : (
                    <div>
                      <FcPicture size={50} /> <p>?????? ??????????</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="d-grid mt-2 mb-3 text-center">
                <button type="submit" className="btn btn-info btn-sm">
                  ?????? ??????????
                </button>
              </div>
            </form>
          </div>
          <div className=" col-lg-4 d-none d-lg-block ">
            <img
              className="add-img "
              src={require("./../../media/addbook4.png")}
              alt=""
            />
          </div>
        </div>
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
