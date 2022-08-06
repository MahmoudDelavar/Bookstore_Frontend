import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  editProduct,
  getAllProducts,
  getOneProduct,
} from "../../StateManagement/actions/productActions";
import CardComponent from "../products/cardComponent";

//================================sasda========

const ProductListByCategory = ({ category }) => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.allproductState.data);
  const book = useSelector((state) => state.oneProductState.product);
  const bookFiltered = books.filter((books) => books.category == category);

  useEffect(() => {
    getAllProducts(dispatch);
  }, []);
  //--------------- handel Edit ---------------
  const handelEdit = (title) => {
    dispatch(getOneProduct(title));
  };
  //--------------- handel Remove ---------------
  const removeProduct = (title) => {
    console.log("remove", title);
  };
  //---------------------------------------------
  const [bookinfo, setBookinfo] = useState([]);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table  table-hover table-striped">
              <thead>
                <tr>
                  <th>ردیف</th>
                  <th>عنوان</th>
                  <th>نوسنده</th>
                  <th>توصیحات</th>
                  <th>قیمت</th>
                  <th>تعداد</th>
                  <th>عملیات</th>
                </tr>
              </thead>
              <tbody>
                {bookFiltered.map((item, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <th>{item.title}</th>
                    <th>{item.writer}</th>
                    <th>{item.explan}</th>
                    <th>{item.pric}</th>
                    <th>{item.count}</th>
                    <th>
                      <Link to="editProduct">
                        <button
                          onClick={() => handelEdit(item.title)}
                          className="btn btn-warning btn-sm"
                        >
                          ویرایش
                        </button>
                      </Link>
                    </th>
                    <th></th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListByCategory;
