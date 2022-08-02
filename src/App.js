import { Route, Routes } from "react-router-dom";
import Footer from "./component/footer/footer";
import Home from "./component/home/home";
import Navbar from "./component/navbar/navbar";
import Login from "./component/auth/login";

import Register from "./component/auth/register";
import Storeroom from "./component/storerome/storeroome";
import Footers from "./component/footer/footer";
import Copyright from "./component/footer/copyright";
import ForgetPass from "./component/auth/ForgetPass";

import LoginUser from "./component/auth/loginUser";
import RegisterUser from "./component/auth/registerUser";
import LastProductsAdded from "./component/storerome/LastProductsAdded";
//============================

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exaxt path="/home" element={<Home />} />
        <Route exaxt path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/login" element={<LoginUser />} />

        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/register" element={<RegisterUser />} />

        <Route path="/storeroom" element={<Storeroom />} />
        <Route path="/forgetPass" element={<ForgetPass />} />
        <Route path="/lastProductsAdded" element={<LastProductsAdded />} />
      </Routes>
      <Footers />
      <Copyright />
    </>
  );
};

export default App;
