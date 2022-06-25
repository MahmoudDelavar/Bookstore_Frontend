import React from "react";
import Slider from "react-slick";
//============================

const HomeSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // rtl: true,
    pauseOnHover: true,
  };
  return (
    <>
      <div className="container-floid ">
        <div className="row ">
          <div className=" col-12 text-center mt-3 ">
            <h4 className="text-muted"> تازه های کتاب</h4>{" "}
          </div>
          <div className="col-12">
            <Slider {...settings}>
              <div className="m-2">
                <img
                  src={require("./../../media/Books/topSlider/1.jpg")}
                  alt=""
                />
              </div>
              <div className="m-2">
                <img
                  src={require("./../../media/Books/topSlider/2.jpg")}
                  alt=""
                />
              </div>{" "}
              <div className="m-2">
                <img
                  src={require("./../../media/Books/topSlider/3.jpg")}
                  alt=""
                />
              </div>{" "}
              <div className="m-2">
                <img
                  src={require("./../../media/Books/topSlider/4.jpg")}
                  alt=""
                />
              </div>{" "}
              <div className="m-2">
                <img
                  src={require("./../../media/Books/topSlider/5.jpg")}
                  alt=""
                />
              </div>
              <div className="m-2">
                <img
                  src={require("./../../media/Books/topSlider/6.jpg")}
                  alt=""
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
