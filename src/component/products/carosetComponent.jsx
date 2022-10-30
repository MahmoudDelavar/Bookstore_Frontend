import { Link } from "react-router-dom";
import "./productStyle.css";
const CaruselComponent = ({ title, src, explan, price, category, writer }) => {
  return (
    <>
      <div className="product mb-3 ">
        <Link className="product " to={"/#"} style={{ color: "black" }}>
          <div class="card " style={{ height: "350px" }}>
            <img
              src={src}
              class="card-img-top"
              alt="failed"
              style={{ width: "100%", height: "180px" }}
            />
            <div class="card-body">
              <p class="card-title text-center">{title}</p>
              <p class="card-title text-center">{writer}</p>
              <p class="card-title">{category}</p>
              {/* <small class="card-text text-justify">{explan}</small> */}
            </div>
            <div class="card-footer">
              <small class="text-muted"> تومان {price} </small>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CaruselComponent;
