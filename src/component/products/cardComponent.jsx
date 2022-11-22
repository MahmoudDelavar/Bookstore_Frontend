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
            <small class="text-muted "> قیمت: {pric} تومان</small>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardComponent;
