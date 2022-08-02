import { connect } from "react-redux";
import { addProduct } from "../../StateManagement/actions/productActions";
import "./addProducts.css";

import { Book } from "react-bootstrap-icons";
import { IoMdCreate } from "react-icons/io";
import { MdEuroSymbol } from "react-icons/md";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { ImImage, ImList2, ImFileText2 } from "react-icons/im";
//========================================
const Addproduct = ({ addProduct, message }) => {
  const save = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const img = form.get("img");
    const title = form.get("title");
    const writer = form.get("writer");
    const count = form.get("count");
    const pric = form.get("pric");
    const explan = form.get("explan");
    const category = form.get("category");
    addProduct({ title, writer, count, pric, explan, category, img });
    alert("محصول ثبت شد ");
    event.target.reset();
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center box">
          <div className="col-sm-12 col-md-9 col-lg-6  ">
            <h6 className="text-center">افزودن محصول</h6>
            <form
              method="post"
              onSubmit={(event) => save(event)}
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
                  <option selected>انتخاب کنید</option>
                  <option value="روانشناسی">روانشناسی</option>
                  <option value="رمان">رمان</option>
                  <option value="ورزشی">ورزشی</option>
                  <option value="تاریخی">تاریخی</option>
                  <option value="شعر">شعر</option>
                </select>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <label htmlFor="img-label">تصویر</label>
                </span>
                <span className="input-group-text">
                  <ImImage className="login-icon" />
                </span>
                <input
                  type="file"
                  className="form-control"
                  name="img"
                  id="img-label"
                />
              </div>
              <div className="d-grid mb-3 text-center">
                <button type="submit" className="btn btn-info btn-lg">
                  ثبت محصول
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
    message: state.addProductState.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (data) => dispatch(addProduct(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Addproduct);
