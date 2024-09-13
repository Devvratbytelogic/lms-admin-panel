import React from "react";
import { Col, Row, Card} from "react-bootstrap";
import {timeline,browser} from '../../commondata/commondata';
import { Link } from "react-router-dom";
import PageHeader from "../../layouts/layoutcomponents/pageheader";

export default function Dashboard() {

  return (
    <div>
             <PageHeader titles="Dashboard01" active="Dashboard01" items={['Home']} />

      <Row>
        <Col xl={4} md={12}>
          <Card className=" overflow-hidden">
            <Card.Header className="card-header">
              <div>
                <h3 className="card-title">Timeline</h3>
              </div>
            </Card.Header>
            <Card.Body className="card-body pb-0 pt-4">
              <div className="activity1">
                {timeline.map((timelines)=>(
                <div className="activity-blog" key={Math.random()}>
                  <div className={`activity-img brround bg-${timelines.color}-transparent text-${timelines.color}`}>
                    <i className={`fa ${timelines.icon} fs-20`}></i>
                  </div>
                  <div className="activity-details d-flex">
                    <div>
                      <b>
                        <span className="text-dark">{timelines.data} </span>
                      </b>
                     {timelines.data1}
                      <span className="d-flex text-muted fs-11">
                       {timelines.data2}
                      </span>
                    </div>
                    <div className="ms-auto fs-13 text-dark fw-semibold">
                      <span className={`badge bg-${timelines.color1} text-white`}>{timelines.data3}</span>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} md={12} className="col-xl-4 col-md-12">
          <Card className="card">
            <Card.Header className="card-header">
              <h4 className="card-title fw-semibold ">Browser Usage</h4>
            </Card.Header>
            <Card.Body className="card-body pt-2 pb-2">
              {browser.map((browsers)=>(
              <div className="d-md-flex align-items-center browser-stats" key={Math.random()}>
                <div className="d-flex">
                  <i className={`fa ${browsers.icon} me-2`}></i>
                  <p className="fs-16 my-auto mb-0">{browsers.heading}</p>
                </div>
                <div className="ms-auto my-auto">
                  <div className="d-flex">
                    <span className="my-auto fs-16">{browsers.data}</span>
                    <span className={`text-${browsers.color} fs-15`}>
                      <i className={browsers.data1}></i>{browsers.data2}
                    </span>
                  </div>
                </div>
              </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} md={12}>
          <Card>
            <Card.Header className="card-header">
              <h4 className="card-title fw-semibold ">Daily Activity</h4>
            </Card.Header>
            <Card.Body className="card-body pb-0">
              <ul className="task-list">
                <li>
                  <i className="task-icon bg-primary"></i>
                  <h6>
                    Task Finished &nbsp;
                    <span className="text-muted fs-11 ms-2">29 Oct 2020</span>
                  </h6>
                  <p className="text-muted fs-12">
                    Adam Berry finished task on &nbsp;
                    <Link to="#" className="fw-semibold">
                      Project Management
                    </Link>
                  </p>
                </li>
                <li>
                  <i className="task-icon bg-secondary"></i>
                  <h6>
                    New Comment &nbsp;
                    <span className="text-muted fs-11 ms-2">25 Oct 2020</span>
                  </h6>
                  <p className="text-muted fs-12">
                    Victoria commented on Project &nbsp;
                    <Link to="#" className="fw-semibold">
                      AngularJS Template
                    </Link>
                  </p>
                </li>
                <li>
                  <i className="task-icon bg-primary"></i>
                  <h6>
                    New Comment &nbsp;
                    <span className="text-muted fs-11 ms-2">25 Oct 2020</span>
                  </h6>
                  <p className="text-muted fs-12">
                    Victoria commented on Project &nbsp;
                    <Link to="#" className="fw-semibold">
                      AngularJS Template
                    </Link>
                  </p>
                </li>
                <li>
                  <i className="task-icon bg-secondary"></i>
                  <h6>
                    Task Overdue &nbsp;
                    <span className="text-muted fs-11 ms-2">14 Oct 2020</span>
                  </h6>
                  <p className="text-muted mb-0 fs-12">
                    Petey Cruiser finished task &nbsp;
                    <Link to="#" className="fw-semibold">
                      Integrated management
                    </Link>
                  </p>
                </li>
                <li>
                  <i className="task-icon bg-primary"></i>
                  <h6>
                    Task Overdue &nbsp;
                    <span className="text-muted fs-11 ms-2">29 Oct 2020</span>
                  </h6>
                  <p className="text-muted mb-0 fs-12">
                    Petey Cruiser finished task &nbsp;
                    <Link to="#" className="fw-semibold">
                      Integrated management
                    </Link>
                  </p>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
