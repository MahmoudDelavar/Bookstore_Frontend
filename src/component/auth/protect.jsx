import { Route, Routes, Navigate } from "react-router-dom";

const Protect = ({ component: Component, ...restProps }) => {
  const isLogin = localStorage.getItem("token");
  return (
    <>
      <Route
        {...restProps}
        render={(props) => {
          return isLogin ? (
            <component {...props} />
          ) : (
            <Navigate replace to="/" />
          );
        }}
      />
    </>
  );
};

export default Protect;
