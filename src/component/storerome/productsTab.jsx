import { Tabs, Tab } from "react-bootstrap";
import ProductListByCategory from "./productListBycategory";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../StateManagement/actions/productActions";

//-------------------------------------------

const LastProductsAdded = () => {
  return (
    <>
      <>
        <div className="row">
          <div className="col-xl-9 col-lg-10 col-md-11    table-box">
            <Tabs
              defaultActiveKey="psycology"
              id="homeNave"
              className="mb-1  "
              justify="true"
            >
              <Tab
                eventKey="psycology"
                title="روانشناسی"
                style={{ overflowY: "hidden" }}
              >
                <ProductListByCategory category={"روانشناسی"} />
              </Tab>
              <Tab
                eventKey="Sport"
                title="ورزشی"
                style={{ overflowY: "hidden" }}
              >
                <ProductListByCategory category={"ورزشی"} />
              </Tab>
              <Tab
                eventKey="Historical"
                title="تاریخی"
                style={{ overflowY: "hidden" }}
              >
                <ProductListByCategory category={"تاریخی"} />
              </Tab>
              <Tab
                eventKey="Romance"
                title="رمان"
                style={{ overflowY: "hidden" }}
              >
                <ProductListByCategory category={"رمان"} />
              </Tab>
              <Tab
                eventKey="Poetry"
                title="شعر"
                style={{ overflowY: "hidden" }}
              >
                <ProductListByCategory category={"شعر"} />
              </Tab>
            </Tabs>
          </div>
        </div>
      </>
    </>
  );
};

export default LastProductsAdded;
