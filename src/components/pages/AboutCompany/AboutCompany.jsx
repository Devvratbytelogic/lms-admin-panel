import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import {company,aboutcompany} from '../../../commondata/commondata';
import { Card, Row, Col } from "react-bootstrap";
import PageHeader from "../../../layouts/layoutcomponents/pageheader";

export default function AboutCompany() {
  
  return (
    <div>
             <PageHeader titles="About Company" active="About Company" items={['Pages']} />
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Body className="p-4 text-dark">
              <div className="statistics-info">
                <div className="row text-center">
                  <Col lg={3} sm={6} className="mt-4 mb-4">
                    <div className="counter-status">
                      <div className="counter-icon bg-primary-gradient box-shadow-primary">
                        <i className="icon icon-people text-white"></i>
                      </div>
                      <h5 className="mb-2">Total Employees</h5>
                      <h2 className="counter mb-0">
                        <CountUp end={2569} start={0} duration={1.74} />
                      </h2>
                    </div>
                  </Col>
                  <Col lg={3} sm={6} className="mt-4 mb-4">
                    <div className="counter-status">
                      <div className="counter-icon bg-secondary-gradient box-shadow-secondary">
                        <i className="icon icon-rocket text-white"></i>
                      </div>
                      <h5 className="mb-2">Total Sales</h5>
                      <h2 className="counter  mb-0">
                        <CountUp end={1765} start={0} duration={1.74} />
                      </h2>
                    </div>
                  </Col>
                  <Col lg={3} sm={6} className="mt-4 mb-4">
                    <div className="counter-statuss">
                      <div className="counter-icon bg-success-gradient box-shadow-success">
                        <i className="icon icon-docs text-white"></i>
                      </div>
                      <h5 className="mb-2">Total Projects</h5>
                      <h2 className="counter mb-0">
                        <CountUp end={846} start={0} duration={1.74} />
                      </h2>
                    </div>
                  </Col>
                  <Col lg={3} sm={6} className="mt-4 mb-4">
                    <div className="counter-status">
                      <div className="counter-icon bg-danger-gradient box-shadow-danger">
                        <i className="fe fe-trending-up text-white"></i>
                      </div>
                      <h5 className="mb-2">Total Growth</h5>
                      <h2 className="counter  mb-0">
                        <CountUp end={7253} start={0} duration={1.74} />
                      </h2>
                    </div>
                  </Col>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="row">
        {company.map((companys)=>(
        <div className="col-lg-6" key={Math.random()}>
          <div className="card">
            <div className="card-body about-con pabout">
              <h1 className="mb-4 fw-semibold">{companys.heading}</h1>
              <h4 className="leading-normal">
               {companys.data}
              </h4>
              <p className="leading-normal">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered by injected humour, or randomised
                words which don't look even slightly believable. If you are
                going to use a passage of Lorem Ipsum, you need to as necessary
                All the Lorem Ipsum generators on the Internet tend to repeat
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
              <Link to="#" className="btn btn-primary  mt-2">
                View More
              </Link>
            </div>
          </div>
        </div>
        ))}
      </div>

      <div className="row">
        {aboutcompany.map((aboutcompanys)=>(
        <div className="col-md-6 col-sm-12 col-lg-6 col-xl-3" key={Math.random()}>
          <div className="card text-center overflow-hidden">
            <img
              src={aboutcompanys.src1}
              alt="img"
              className=""
            />
            <div className="card-body">
              <h3 className="mb-3">{aboutcompanys.heading}</h3>
              <p>
                I must explain to you how all this mistaken idea of denouncing
                pleasure and you a complete account of the system
              </p>
              <Link to="#" className={`btn btn-${aboutcompanys.color}`}>
                -Read More
              </Link>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
