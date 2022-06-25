import CardComponent from "../cardComponent";

const Poetry = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div class="card-deck text-center d-flex flex-nowrap">
              <CardComponent
                src={require("../../../media/Books/poetry/40Salegi.jpg")}
                title="به چهل سالگی‌ات رسیده‌ام"
                writer="مژده لواسانی"
                explan="مجموعه شعر به چهل سالگی‌ات رسیده‌ام با استفاده از المان‌هایی همچون سرما، شب‌های طولانی، باران و برگ‌ریزان، فضای پاییزی که مدنظر نویسنده است را به خوبی بازنمایی می‌کند "
                price="19.000"
              />
              <CardComponent
                src={require("../../../media/Books/poetry/jozTo.jpg")}
                title="جز تو"
                writer="بابک بنکدار"
                explan="اثری پر از احساس و حاصل تجربیات زندگی که در بازه زمانی 1378 تا 1400 به نگارش درآمده است"
                price="19.000"
              />
              <CardComponent
                src={require("../../../media/Books/poetry/moshiri.jpg")}
                title="گزیده اشعار فریدون مشیری"
                writer="فریدون مشیری"
                explan="فریدون مشیرى مى‌کوشد که شعرهایش را به طبقه وسیع‌ترى از جامعه ما که اکنون حوصله جستجو و کوشش براى گشودن رمزهاى شعر شاعران تندرو و افراطى را ندارد"
                price="19.000"
              />
              <CardComponent
                src={require("../../../media/Books/poetry/piade.jpg")}
                title="پیاده آمده بودم"
                writer="محمدکاظم کاظمی"
                explan="کتاب پیاده آمده بودم مجموعه سروده‌های فارسی محمدکاظم کاظمی، شاعر معاصر و بلند آوازه‌ی افغانستان است. اشعار این مجموعه، فریادهای صادقانه‌ای هستند که مظلومیت مردم قهرمان افغانستان را بازگو می‌کنند."
                price="19.000"
              />
              <CardComponent
                src={require("../../../media/Books/poetry/madarbozorg.jpg")}
                title="رباعی‌های مادربزرگ"
                writer="محبوبه یحیایی"
                explan="کتاب رباعی‌های مادربزرگ، مجموعه شعرهای عامیانه‌ای هستند که با لهجه مردم روستای جام و آبخوری از توابع استان سمنان کاربرد محلی یافته‌اند"
                price="19.000"
              />

              <CardComponent
                src={require("../../../media/Books/poetry/saye.jpg")}
                title="سایه عمر"
                writer="رهی معیری"
                explan="کتاب سایه عمر مجموعه‌‌ای است از غزل‌ها و رباعیات رهی معیری که بی‌تردید یکی از چند چهره‌ شاخص غزل‌ سرای معاصر است."
                price="19.000"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Poetry;
