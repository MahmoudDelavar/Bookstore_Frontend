import {
  Book,
  Chat,
  Geo,
  Github,
  Instagram,
  Linkedin,
  Mailbox,
  Map,
  Telegram,
  Telephone,
  Twitter,
  Whatsapp,
} from "react-bootstrap-icons";
import "./style.css";
import { Link } from "react-router-dom";
//=======================================================================
const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className=" row ">
          <div className="bg-dark">
            <footer className=" row text-center text-lg-center text-muted p-4 justify-content-around">
              <div className=" CuntactUs m-2 col-xs-12 col-sm-12 col-md-12 col-lg-4 ">
                <h4 class=" text-left">
                  {" "}
                  <Book /> درباره کتاب آنلاین
                </h4>

                <p className="footer text-justify">
                  در فرصت‌های اندک میان هیاهوی روزانه، زمانی که می‌شود استراحت
                  کوتاهی کرد، یک فنجان چای نوشید و به موسیقی دلخواه خود گوش کرد.
                  زمانیست که می‌شود در فضای مجازی گشتی زد، اخبار روز را مرور کرد
                  و بر روی عکس‌ها و حرف‌های دوستان نظر داد. زمانیست که می‌توان
                  وارد این فروشگاه شد، کتابی سفارش داد و در فاصله‌ای کوتاه آن را
                  تحویل گرفت. حال دیگر این نوای موسیقی و عطر چای شماست که به
                  فروشگاه کتاب ما حال و هوایی دیگر می‌دهد
                </p>
              </div>
              <div className=" FallowUs  col-xs-12  col-sm-6 col-md-6 col-lg-4 mb-3">
                <h4>ما را دنبال کنید</h4>
                <Link to={"/#"} className="text-muted  ">
                  {" "}
                  <Instagram size={40} className="m-2" />
                </Link>
                <Link to={"/#"} className="text-muted  ">
                  {" "}
                  <Whatsapp size={40} className="m-2" />
                </Link>
                <Link to={"/#"} className="text-muted  ">
                  {" "}
                  <Linkedin size={40} className="m-2" />
                </Link>
                <Link to={"/#"} className="text-muted  ">
                  {" "}
                  <Twitter size={40} className="m-2" />
                </Link>
              </div>

              <div className=" AboutUs col-xs-12 col-sm-6 col-md-6 col-lg-3 ">
                <h4 class="  "> دربارما</h4>

                <p className="text-left">
                  <Geo /> مشهد - بلوار اونجا - خیابان اینجا - پلاک 5 واحد 212
                </p>
                <p className="text-left">
                  <Telephone /> تلفن : 051300000000
                </p>
                <p className="text-left">
                  <Mailbox />
                  ایمیل: info@masalan.com
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
