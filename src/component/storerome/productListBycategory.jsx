import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../StateManagement/actions/productActions";
//========================================

const ProductListByCategory = ({ category }) => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.productState.data);
  const bookFiltered = books.filter((books) => books.category == category);
  useEffect(() => getAllProducts(dispatch), []);
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
                      <button className="btn btn-warning btn-sm">ویرایش</button>
                    </th>
                    <th>
                      <button className="btn btn-danger btn-sm">حذف</button>
                    </th>
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
