import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  getAllProducts,
  getOneProduct,
  deletOneProduct,
} from "../../StateManagement/actions/productActions";
import "./style.css";
//========================================

const ProductListByCategory = ({ category }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector((state) => state.allproductState.data);
  const bookFiltered = books.filter((books) => books.category == category);

  useEffect(() => {
    getAllProducts(dispatch);
  }, []);

  //--------------- Handle Edit ---------------
  const handleEdit = (title) => {
    dispatch(getOneProduct(title));
  };

  //--------------- Handle Remove ---------------
  const handleDelete = (title) => {
    dispatch(deletOneProduct(title));
    alert("محصول حدف شد");
    navigate("/storeroom");
  };

  //---------------------------------------------
  return (
    <>
      <div className="p-3">
        <table className="table table-dark table-striped table-bordered  ">
          <thead>
            <tr className="text-center">
              <th> #</th>
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
                <th>
                  <div className="exp-box ">{item.explan}</div>
                </th>
                <th>{item.pric}</th>
                <th>{item.count}</th>
                <th className=" text-center">
                  <Link to="editProduct">
                    <button
                      onClick={() => handleEdit(item.title)}
                      className="btn btn-warning btn-sm"
                    >
                      ویرایش
                    </button>
                  </Link>{" "}
                  <button
                    onClick={() => handleDelete(item.title)}
                    className="btn btn-danger mt-2 "
                  >
                    حذف
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductListByCategory;
