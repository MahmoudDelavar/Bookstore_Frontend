import { Route, Routes } from "react-router-dom";
import Footer from "./component/footer/footer";
import Home from "./component/home/home";
import Navbar from "./component/navbar/navbar";
import Storeroom from "./component/storerome/storeroome";
import EditProduct from "./component/storerome/editProduct";
import ProductsTab from "./component/storerome/productsTab";
import Footers from "./component/footer/footer";
import Copyright from "./component/footer/copyright";
import ForgetPass from "./component/auth/ForgetPass";
import LoginUser from "./component/auth/loginUser";
import LogOutUser from "./component/auth/logout";
import RegisterUser from "./component/auth/registerUser";
import AddProducts from "./component/imputComponent/addProducts";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findeUserByToken } from "./StateManagement/actions/userActions";
import axios from "axios";
import Protect from "./component/auth/protect";
//============================

const App = () => {
  //---------------------
  const dispatch = useDispatch();
  const loadedUser = useSelector((state) => state.findeUserByTokenState.user);
  //---------------------
  const [user, setUser] = useState(null);
  const [findeuser, setFindeuser] = useState(null);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/logout" element={<LogOutUser />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/storeroom" element={<Storeroom />} />
        <Route path="/forgetPass" element={<ForgetPass />} />
        <Route path="/storeroom/productsTab" element={<ProductsTab />} />

        <Route
          path="/storeroom/productsTab/editProduct"
          element={<EditProduct />}
        />
        <Route path="/storeroom/addproduct" element={<AddProducts />} />
      </Routes>
      <Footers />
      <Copyright />
    </>
  );
};

export default App;
