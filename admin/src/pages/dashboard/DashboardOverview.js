
import { Col } from '@themesberg/react-bootstrap';
import { Row } from '@themesberg/react-bootstrap';
import React from "react";
import DashboardOrderByAmount from './DashboardOrderByAmount';
import DashboardOrderByRevenue from './DashboardOrderByRevenue';
import UserOverview from './UserOverview';


export default () => {
  return (
    <>
      <Row className="justify-content-md-center">
        {/* <Col xs={12} className="mb-4 d-none d-sm-block">
          <SalesValueWidget
            title="Sales Value"
            value="10,567"
            percentage={10.57}
          />
        </Col> */}
        <UserOverview />
        {/* <ProductOverview />
        <CountdownOverview /> */}
      </Row>

      <Row>
        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={12} className="mb-4">
              <Row>
                {<DashboardOrderByAmount />}
                {/* {(user.roles === "superadmin" || user.roles === "admin") && <DashboardOrderByAmount />} */}
                {<DashboardOrderByRevenue />}
              </Row>
            </Col>

          </Row>
        </Col>
      </Row>
    </>
  );
};
