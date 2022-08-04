import { Route, Routes } from "react-router-dom";
import Footer from "./component/footer/footer";
import Home from "./component/home/home";
import Navbar from "./component/navbar/navbar";
import Login from "./component/auth/login";

import Register from "./component/auth/register";
import Storeroom from "./component/storerome/storeroome";
import EditProduct from "./component/storerome/editProduct";
import Footers from "./component/footer/footer";
import Copyright from "./component/footer/copyright";
import ForgetPass from "./component/auth/ForgetPass";
import LoginUser from "./component/auth/loginUser";
import RegisterUser from "./component/auth/registerUser";
import AddProducts from "./component/imputComponent/addProducts";
//============================

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exaxt path="/home" element={<Home />} />
        <Route exaxt path="/" element={<Home />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/storeroom" element={<Storeroom />} />
        <Route path="/forgetPass" element={<ForgetPass />} />
        <Route path="/storeroom/editproduct" element={<EditProduct />} />
        <Route path="/storeroom/addproduct" element={<AddProducts />} />
      </Routes>
      <Footers />
      <Copyright />
    </>
  );
};

export default App;
