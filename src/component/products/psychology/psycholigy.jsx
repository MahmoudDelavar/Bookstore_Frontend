import CardComponent from "../cardComponent";

const Psychology = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div class="card-deck text-center d-flex flex-nowrap">
              <CardComponent
                src={require("../../../media/Books/psychology/zehneAshofte.jpg")}
                title="ذهن‌های آشفته"
                writer="ایان هیوز"
                explan="ر به شکل رفتاری و اقدامات دیکتاتورهای سراسر دنیا نگاه کنید و شیوه‌های مدیریت مستبدانه آن‌ها را مورد توجه قرار دهید، می‌توانید به یک الگوی فکری و رفتاری نسبتا مشترک در میان آن‌ها برسید"
                price="19.000"
              />
              <CardComponent
                src={require("../../../media/Books/psychology/valedyneSami.jpg")}
                title="والدین سمی"
                writer="سوزان فوروارد"
                explan="وقتی به پدر و مادرتان فکر می‌کنید، چه چیزی به ذهنتان می‌رسد؟ خاطراتی که به یادتان می‌آید بد است یا خوب؟ فکر می‌کنید رفتار والدینتان با شما چه تأثیری بر شخصیتتان داشته است؟ "
                price="19.000"
              />
              <CardComponent
                src={require("../../../media/Books/psychology/noshkhar'.jpg")}
                title="نشخوار ذهنی"
                writer="اتان کراس"
                explan="اگر شما به یک غریبه بگویید که با خودتان صحبت می‌کنید، به احتمال زیاد مورد تمسخر قرار می‌گیرید یا در بهترین حالت به شما توصیه می‌کنند که به یک مشاور روانشناس مراجعه کنید."
                price="19.000"
              />
              <CardComponent
                src={require("../../../media/Books/psychology/zananeZirak.jpg")}
                title="چرا مردان زنان زیرک را دوست دارند"
                writer="شری آرگو"
                explan="این کتاب، یک راهنمای روابط محسوب می‌شود و برای زنانی نوشته شده است که بیش از حد مطیع هستند. عنوان و محتوای کتاب نشان می‌دهد که در ذهن بیشتر خانم‌ها چه می‌گذرد و چرا به زبان آن‌ها جاری نمی‌شود."
                price="19.000"
              />
              {/* <CardComponent
                src={require("../../../media/Books/1.jpg")}
                title="انسان در جستجوی معنا"
                writer="ویکتور فرانکل"
                explan="این کتاب، یکی از مهم‌ترین آثار عصر ماست. معمولاً اگر کتابی دارای تنها یک رویکرد و یک فکر باشد و با این حال چنان قدرتی داشته باشد که بتواند زندگی کسی را تغییر دهد، همین کافی است و باید آن را خواند."
                price="19.000"
              />
              <CardComponent
                src={require("../../../media/Books/1.jpg")}
                title="خرده عادت‌ها"
                writer="جیمز کلیر"
                explan="جیمز کلیر در کتاب خرده عادت‌ها راهی آسان و اثبات‌شده برای ایجاد عادت‌های خوب و از بین بردن عادت‌های بد را به شما نشان می‌دهد."
                price="19.000"
              /> */}
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Psychology;
