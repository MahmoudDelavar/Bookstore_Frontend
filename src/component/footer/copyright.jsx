import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className=" Copyright col-12 bg-dark p-2 text-white text-center p-4"
            style={{ backgroundCcolor: " rgba(0, 0, 0)" }}
          >
            © 2021 Copyright :{" "}
            <Link className="text-reset fw-bold" to="/https://masalan.com/">
              Mahmoud_Delavar.P
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Copyright;
