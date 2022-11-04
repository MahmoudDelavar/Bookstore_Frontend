import React from "react";
import Slider from "react-slick";
import "./styles.css";
//============================

const HomeSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // rtl: true,
    pauseOnHover: false,
  };
  return (
    <>
      <div className="container-floid ">
        <div className="row ">
          <div className=" col-12 text-center mt-3 ">
            <h4 className="text-muted"> تازه های کتاب</h4>{" "}
          </div>
          <div className="col-xl-8 col-lg-9 col-md-11  silder-box  ">
            <Slider {...settings}>
              <div className="ml-2">
                <img
                  src={require("./../../media/Books/topSlider/1.jpg")}
                  alt=""
                  className="slider-img"
                />
              </div>
              <div className="ml-2">
                <img
                  src={require("./../../media/Books/topSlider/2.jpg")}
                  alt=""
                  className="slider-img"
                />
              </div>{" "}
              <div className="ml-2">
                <img
                  src={require("./../../media/Books/topSlider/3.jpg")}
                  alt=""
                  className="slider-img"
                />
              </div>{" "}
              <div className="ml-2">
                <img
                  src={require("./../../media/Books/topSlider/4.jpg")}
                  alt=""
                  className="slider-img"
                />
              </div>{" "}
              <div className="ml-2">
                <img
                  src={require("./../../media/Books/topSlider/5.jpg")}
                  alt=""
                  className="slider-img"
                />
              </div>
              <div className="ml-2">
                <img
                  src={require("./../../media/Books/topSlider/6.jpg")}
                  alt=""
                  className="slider-img"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
