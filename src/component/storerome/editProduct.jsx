import { Tabs, Tab } from "react-bootstrap";
import ProductListByCategory from "./productListBycategory";
import React, { Component } from "react";

//-------------------------------------------

class LastProductsAdded extends Component {
  state = {
    books: [],
  };

  render() {
    return (
      <>
        <h4 className="text-center">لیست آخرین محصولات بر اساس دسته بندی </h4>
        <Tabs fill defaultActiveKey="psycology" id="homeNave" className="mb-3 ">
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
    );
  }
}

export default LastProductsAdded;
