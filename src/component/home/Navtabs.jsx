import { Tabs, Tab } from "react-bootstrap";
import Psychology from "../products/psychology/psycholigy";
import Sport from "../products/sport/sport";
import Historical from "../products/historical/hisorical";
import Romance from "../products/romance/romance";
import Poetry from "../products/poetry/poetry";
const NavTab = () => {
  return (
    <>
      <div className="container-fluid">
        <div
          className="row justify-content-center"
          style={{ overflowY: "hidden" }}
        >
          <div className="col-12">
            <Tabs
              fill
              defaultActiveKey="Psychology"
              id="homeNave"
              className="mb-3 "
            >
              <Tab eventKey="Psychology" title="روانشناسی">
                <Psychology />
              </Tab>
              <Tab eventKey="Sport" title="ورزشی">
                <Sport />
              </Tab>
              <Tab eventKey="Historical" title="تاریخی">
                <Historical />
              </Tab>
              <Tab eventKey="Romance" title="رمان">
                <Romance />
              </Tab>
              <Tab eventKey="Poetry" title="شعر">
                <Poetry />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavTab;
