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
        <h4 className="text-center">لیست محصولات بر اساس دسته بندی </h4>
        <Tabs defaultActiveKey="psycology" id="homeNave" className="mb-3 ">
          <Tab eventKey="psycology" title="روانشناسی">
            <ProductListByCategory category={"روانشناسی"} />
          </Tab>
          <Tab eventKey="Sport" title="ورزشی">
            <ProductListByCategory category={"ورزشی"} />
          </Tab>
          <Tab eventKey="Historical" title="تاریخی">
            <ProductListByCategory category={"تاریخی"} />
          </Tab>
          <Tab eventKey="Romance" title="رمان">
            <ProductListByCategory category={"رمان"} />
          </Tab>
          <Tab eventKey="Poetry" title="شعر">
            <ProductListByCategory category={"شعر"} />
          </Tab>
        </Tabs>
      </>
    </>
  );
};

export default LastProductsAdded;
