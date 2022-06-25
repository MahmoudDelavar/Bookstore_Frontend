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
import LastProductsAdded from "./component/loadFromDatabase/LastProductsAdded";
//============================

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exaxt path="/home" element={<Home />} />
        <Route exaxt path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
