import { Link } from "react-router-dom";
import "./productStyle.css";
const CaruselComponent = ({ title, src, explan, price, category, writer }) => {
  return (
    <>
      <div className="product  " style={{ width: "200px" }}>
        <Link className="product " to={"/#"} style={{ color: "black" }}>
          <div class="card">
            <img src={src} class="card-img-top" alt="failed" />
            <div class="card-body">
              <h6 class="card-title text-center">{title}</h6>
              <h6 class="card-title text-center">{writer}</h6>
              <h6 class="card-title">{category}</h6>
              <small class="card-text text-justify">{explan}</small>
            </div>
            <div class="card-footer">
              <small class="text-muted"> تومان {price} قیمت </small>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CaruselComponent;
