import { Link } from "react-router-dom";
import "./productStyle.css";
const CardComponent = ({
  title,
  explan,
  pric,
  category,
  writer,
  count,
  picPath,
}) => {
  return (
    <>
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3 mt-3 product ">
        <Link className="product d-flex" to={"/#"} style={{ color: "black" }}>
          <div class="card">
            <img
              src={`http://yeechizi.ir:5000/${picPath}`}
              class="card-img-top"
              alt="failed"
              style={{ height: "200px", width: "200px" }}
            />
            <div
              class="card-body"
              style={{ width: "200px", height: "200px", overflowY: "hidden" }}
            >
              <h6 class="card-title text-center">{title}</h6>
              <h6 class="card-title text-center">{writer}</h6>

              <h6 class="card-title">{category}</h6>
              <small class="card-text text-justify">{explan}</small>
            </div>
            <div class="card-footer">
              <small class="text-muted "> تومان {pric} قیمت </small>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CardComponent;
