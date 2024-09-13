
import React from "react";
import { ProgressBar,Row,Col, Card } from "react-bootstrap";
import {service,service1} from '../../../commondata/commondata';
import PageHeader from "../../../layouts/layoutcomponents/pageheader";
export default function Services() {

  return (
    
    <div>
             <PageHeader titles="Services" active="Services" items={['Pages']} />
      <Row>
        {service.map((services)=>(
        <Col xl={3} lg={6} md={12} sm={12} key={Math.random()}>
          <Card className="service">
            <Card.Body>
              <div className="item-box text-center">
                <div className={`text-center  mb-4 text-${services.color}`}>
                  <i className={services.icon}></i>
                </div>
                <div className="item-box-wrap">
                  <h5 className="mb-2">{services.heading}</h5>
                  <p className="text-muted mb-0">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        ))}
      </Row>

      <Row>
      {service1.map((service)=>(
        <Col md={6} lg={6} key={Math.random()}>
          <Card>
            <Card.Body>
              <Row>
                <Col className="feature" xl={2} lg={3}>
                  <div className={`fa-stack fa-lg fa-1x border btn-${service.color} mb-3`}>
                    <i className={`fa ${service.icon} fa-stack-1x text-white`}></i>
                  </div>
                </Col>
                <Col lg={9} xl={10}>
                  <div className="mt-1">
                    <h4 className="fw-semibold">{service.heading}</h4>
                    <p className="mb-0">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English.
                    </p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
  ))}
      </Row>
          
      <Row>
        <Col md={12} lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Our services</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text
                </p>
                <Row className="mt-3">
                  <Col md={6}>
                    <label>Web Design</label>
                    <div className="progress progress-md mb-3">
                      <ProgressBar
                        className="progress-bar  w-50"
                        variant="purple"
                        label={`${50}%`}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <label>Web Development</label>
                    <div className="progress progress-md mb-3">
                      <ProgressBar
                        className="progress-bar  w-70"
                        variant="danger"
                        label={`${70}%`}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <label>Wordpress</label>
                    <div className="progress progress-md mb-3">
                      <ProgressBar
                        className="progress-bar  w-80"
                        variant="warning"
                        label={`${80}%`}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <label>Photography</label>
                    <div className="progress progress-md mb-3">
                      <ProgressBar
                        className="progress-bar  w-75"
                        variant="primary"
                        label={`${75}%`}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <label>Development</label>
                    <div className="progress progress-md mb-3 mb-md-0">
                      <ProgressBar
                        className="progress-bar  w-65"
                        variant="pink"
                        label={`${65}%`}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <label>Android</label>
                    <div className="progress progress-md mb-0">
                      <ProgressBar
                        className="progress-bar w-70"
                        variant="success"
                        label={`${70}%`}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
