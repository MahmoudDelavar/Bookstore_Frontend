import { Tabs, Tab } from "react-bootstrap";
import ProductListByCategory from "./productListBycategory";

//========================================

const EditProduct = () => {
  return (
    <>
      <h4>edit product page</h4>
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
};

export default EditProduct;
