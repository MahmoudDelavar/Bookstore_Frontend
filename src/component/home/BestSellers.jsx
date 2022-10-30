import Slider from "react-slick";
import CaruselComponent from "../products/carosetComponent";

const Bestsellers = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,

    cssEase: "linear",
    // rtl: true,
    pauseOnHover: true,
  };
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className=" col-12 text-center mt-3 ">
            <h4 className="text-muted"> پر فروش ها</h4>{" "}
          </div>
          <div className="col-12">
            <Slider {...settings}>
              <div className="m-2">
                <CaruselComponent
                  src={require("../../media/Books/1.jpg")}
                  title="عقاید یک دلقک"
                  writer="هاینریش بل"
                  explan="عقاید یک دلقک، داستان دلقکی غمگین در قلب جامعه کاتولیک ها!                "
                  price="19.000"
                />
              </div>
              <div className="m-2 ">
                <CaruselComponent
                  src={require("../../media/Books/4.jpg")}
                  title="باشگاه پنج صبحی‌ها "
                  writer="رابین شارما"
                  explan="سحرخیزی نه‌تنها در این روزگار پرمشغله حائز اهمیت است بلکه از دیرباز از سوی بزرگان و افراد موفق گوشزد شده است. ضرب‌المثل «سحرخیز باش تا کامروا شوی!»"
                  price="25.000"
                />
              </div>{" "}
              <div className="m-2">
                <CaruselComponent
                  src={require("../../media/Books/5.jpg")}
                  title="هنر شفاف اندیشیدن"
                  writer="  رولف دوبلی"
                  explan="«هنر شفاف اندیشیدن» اثر متفکر و کارآفرین جهانی «رولف دوبلی»، نگاهی شفاف بر استدلال‌‌های ذهنی انسان است."
                  price="45.000"
                />
              </div>{" "}
              <div className="m-2">
                <CaruselComponent
                  src={require("../../media/Books/6.jpg")}
                  title="بنویس تا اتفاق بیفتد"
                  writer=" هنریت آن‌کلاوسر "
                  explan="فرقی نمی‌کند که شما چه می‌خواهید، اهمیتی ندارد خواسته‌ی شما یک ویلا در شمال کشور باشد و یا داشتن یک دوچرخه یا موتورسیکلت"
                  price="17.000"
                />
              </div>{" "}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bestsellers;
