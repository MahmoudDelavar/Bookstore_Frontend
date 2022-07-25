import { connect } from "react-redux";
import { addProduct } from "../../StateManagement/actions/productActions";
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
        <div className="row">
          <div className="col">
            <h6 className="text-center">افزودن محصول</h6>
            <form
              method="post"
              onSubmit={(event) => save(event)}
              encType="multipart/form-data"
            >
              <div className="form-group mb-3">
                <label className="form-group" htmlFor="title">
                  عنوان کتاب{" "}
                </label>
                <input type="text" className="form-control " name="title" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="writer">نویسنده</label>
                <input type="text" className="form-control" name="writer" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="count"> تعداد</label>
                <input type="number" className="form-control" name="count" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="pric"> قیمت</label>
                <input type="number" className="form-control" name="pric" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="explan"> توضیحات</label>
                <input type="text" className="form-control" name="explan" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="category"> دسته بندی</label>
                <select className="custom-select" name="category">
                  <option selected>انتخاب کنید</option>
                  <option value="روانشناسی">روانشناسی</option>
                  <option value="رمان">رمان</option>
                  <option value="ورزشی">ورزشی</option>
                  <option value="تاریخی">تاریخی</option>
                  <option value="شعر">شعر</option>
                </select>

                <div className="form-group mb-3">
                  <label htmlFor="img">تصویر</label>
                  <input type="file" className="form-control" name="img" />
                </div>
                <div className="form-group mb-3 text-center">
                  <button type="submit" className="btn btn-info btn-sm">
                    ثبت محصل
                  </button>
                </div>
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
