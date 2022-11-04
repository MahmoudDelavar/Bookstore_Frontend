import HomeSlider from "./slider";
import NavTab from "./Navtabs";
import Bestsellers from "./BestSellers";
//============================

const Home = () => {
  return (
    <>
      <img
        src={require("./../../media/book_Banner/3.jpg")}
        alt="baner"
        style={{ width: "100%" }}
      />

      <HomeSlider />
      <NavTab />
      <Bestsellers />
    </>
  );
};

export default Home;
