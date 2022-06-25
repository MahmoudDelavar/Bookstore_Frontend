import CardComponent from "../cardComponent";

const Historical = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div class="card-deck text-center d-flex flex-nowrap ">
              <CardComponent
                src={require("../../../media/Books/historical/1.jpg")}
                title="سرگذشت ایرانیان"
                writer="کاظم سلطانی"
                explan="ایران با قدمت و تمدنی کهن از چنان عظمتی برخوردار است که امکان نگارش کتابی که تمام تاریخ آن را شامل شود، وجود ندارد."
                price="19.000"
              />
              <CardComponent
                src={require("../../../media/Books/historical/darshayeTarikh.jpg")}
                title="درس‌های تاریخ"
                writer="ویل و آریل دورانت"
                explan="به اعتقاد ویل دورانت برای مطالعۀ تاریخ نباید فقط وقایع تاریخی محض را مورد توجه قرار داد، بلکه عواملی همچون اقتصاد، نژاد، جغرافیا و جنگ نیز در به وجود آمدن تمدن‌ها نقش تأثیرگذاری داشته‌ان"
                price="19.000"
              />
              <CardComponent
                src={require("../../../media/Books/historical/sarzaminjavid.jpg")}
                title="سرزمین جاوید"
                writer="ماریژان موله"
                explan="زمانی هم که می‌خواهیم چیزی از تاریخمان بدانیم، فترت‌های بزرگ به وجود می‌آیند. برای مثال به‌ جای دوره‌ی سلطنت پادشاهان اشکانی که چند قرن طول کشید، یک چاله‌ی عظیم به وجود آمد که چیزی در آن دیده نمی‌شود."
                price="19.000"
              />
              <CardComponent
                src={require("../../../media/Books/historical/melateparande.jpg")}
                title="ملت پرنده سه پا"
                writer="فرزاد عابدی"
                explan="مطالعه‌ی حکومت‌های شرقی که در دوران معاصر توجه کم‌تری به آن صورت می‌گیرد، کمک بزرگی به باستان‌شناسان و مورخان می‌کند تا تمامی جنبه‌های یک حکومت موروثی را از تمامی جوانب بشناسند."
                price="19.000"
              />
              <CardComponent
                src={require("../../../media/Books/1.jpg")}
                title=""
                writer=""
                explan=""
                price="19.000"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Historical;
