import CardComponent from "../cardComponent";

const Romance = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div class="card-deck text-center d-flex flex-nowrap">
              <CardComponent
                src={require("../../../media/Books/romance/ghaleHeyvanat.jpg")}
                title="قلعه حیوانات"
                writer="جورج اورول"
                explan="وضعیت سیاسی شوروی دوران ژوزف استالین را با ادبیات و قلمی قدرتمند مورد نقد و بررسی قرار می‌دهد. این کتاب نقدی آشکار نسبت به تغییر رفتار و دیدگاه استالین در طول سال‌های حکومتش است و از این منظر داستانی شجاعانه محسوب می‌شود."
                price="19.000"
              />
              <CardComponent
                src={require("../../../media/Books/romance/khodkoshi.jpg")}
                title="مغازه‌ی خودکشی"
                writer="ژان تولی"
                explan="ر سرزمینی دور، اکثر منابع طبیعی توسط انسان‌ها نابود شده‌اند. هوا بسیار آلوده است و دیگر گُلی نمی‌روید. کسی در این سرزمین نمی‌خندد و شادی از عجیب‌ترین چیزها به شمار می‌آید."
                price="19.000"
              />
              <CardComponent
                src={require("../../../media/Books/romance/to.jpg")}
                title="تو "
                writer="کرولاین کپنس"
                explan=" ماجرای پسری به نام جو را روایت می‌کند که در یک نگاه شیفته‌ی بک می‌شود و برای به دست آوردنش از هر ترفندی استفاده می‌کند."
                price="19.000"
              />
              <CardComponent
                src={require("../../../media/Books/romance/shbhayeRoshan.jpg")}
                title="شب‌های روشن"
                writer="فئودور داستایوفسکی"
                explan="داستانی عاشقانه از خاطرات یک رویا پرداز که یکی از مشهور‌ترین آثارش است، قصه مردی را به تصویر می‌کشد که در پی یک هم‌صحبت است. "
                price="19.000"
              />
              {/* <CardComponent
                src={require("../../../media/Books/1.jpg")}
                title="بر باد رفته"
                writer="مارگارت میچل"
                explan="مان بر باد رفته، شاهکار بی‌تکرار مارگارت میچل است که نخستین بار در سال 1936 به چاپ رسید و یک سال بعد جایزه‌ی پولیتزر را برای نویسنده‌ی خود به ارمغان آورد.  "
                price="19.000"
              />
              <CardComponent
                src={require("../../../media/Books/1.jpg")}
                title="کوری"
                writer="ژوزه ساراماگو"
                explan=" یک اثر تمثیلی، بیرون از حصار زمان و مکان، یک رمان معترضانه اجتماعی-سیاسی، که آشفتگی اجتماع و انسان های سردرگم را در دایره‌ی افکار خویش و مناسبات اجتماعی به تصویر می کشد. "
                price="19.000"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Romance;
