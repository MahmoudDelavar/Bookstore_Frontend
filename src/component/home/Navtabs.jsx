import { Tabs, Tab } from "react-bootstrap";
import Psychology from "../products/psychology/psycholigy";
import Sport from "../products/sport/sport";
import Historical from "../products/historical/hisorical";
import Romance from "../products/romance/romance";
import Poetry from "../products/poetry/poetry";
const NavTab = () => {
  return (
    <>
      <div className="row ">
        <div className="col-11 silder-box">
          <Tabs
            fill
            defaultActiveKey="Psychology"
            id="homeNave"
            className="mb-3 "
            justify="true"
          >
            <Tab
              eventKey="Psychology"
              title="روانشناسی"
              style={{ overflowY: "hidden" }}
            >
              <Psychology />
            </Tab>
            <Tab eventKey="Sport" title="ورزشی" style={{ overflowY: "hidden" }}>
              <Sport />
            </Tab>
            <Tab
              eventKey="Historical"
              title="تاریخی"
              style={{ overflowY: "hidden" }}
            >
              <Historical />
            </Tab>
            <Tab
              eventKey="Romance"
              title="رمان"
              style={{ overflowY: "hidden" }}
            >
              <Romance />
            </Tab>
            <Tab eventKey="Poetry" title="شعر" style={{ overflowY: "hidden" }}>
              <Poetry className="text center" />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default NavTab;
