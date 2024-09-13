import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ReactEcharts from "echarts-for-react";
import { Row, Col, Card} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Imagesdata } from "../../commondata/commonimages";
import * as chartdata from '../../commondata/chartdata';
import {LightboxGalleryWidgets} from '../../commondata/gallerydata';
import {visit,request,user,follower,summary} from '../../commondata/commondata';
import PageHeader from "../../layouts/layoutcomponents/pageheader";

export default function Widgets() {
  
  return (
    <div>
             <PageHeader titles="Widgets" active="Widgets" items={['Home']} />

      <Row>
        {visit.map((visits)=>(
        <Col sm={12} md={6} lg={6} xl={3} key={Math.random()}>
          <Card>
            <Card.Body className=" text-center">
              <i className={`fa ${visits.icon} text-${visits.color} fa-3x`}></i>
              <h6 className="mt-4 mb-2">{visits.heading}</h6>
              <h2 className="mb-2 number-font">{visits.data}</h2>
              <p className="text-muted">
                Sed ut perspiciatis unde omnis accusantium doloremque
              </p>
            </Card.Body>
          </Card>
        </Col>
        ))}
      </Row>
      <Row>
        {request.map((requests)=>(
        <Col sm={12} md={6} lg={6} xl={3} key={Math.random()}>
          <Card className={`card bg-${requests.color} img-card box-${requests.color}-shadow`}>
            <Card.Body className="">
              <div className="d-flex">
                <div className="text-white">
                  <h2 className="mb-0 number-font">{requests.data}</h2>
                  <p className="text-white mb-0">{requests.data1} </p>
                </div>
                <div className="ms-auto">
                  <i className={`fa ${requests.icon} text-white fs-30 me-2 mt-2`}></i>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        ))}
      </Row>
      <Row>
        {user.map((users)=>(
        <Col sm={12} md={6} lg={6} xl={3} key={Math.random()}>
          <Card>
            <Card.Body className="">
              <div className="card-order">
                <h6 className="mb-2">{users.data}</h6>
                <h2 className="text-end ">
                  <i className={`${users.icon} text-${users.color} text-${users.color}-shadow`}></i>
                  <span>{users.data2}</span>
                </h2>
                <p className="mb-0">
                 {users.data1}<span className="float-end">{users.data3}</span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        ))}
      </Row>
      <Row>
        <Col xl={3} md={12} lg={6}>
          <Card>
            <Card.Body className=" text-center">
              <h6 className="">
                <span className="text-primary">
                  <i className="fe fe-file-text me-2 fs-20 text-primary-shadow"></i>
                </span>
                Total Projects
              </h6>
              <h3 className="text-dark counter mt-0 mb-3 number-font">7,896</h3>

              <ProgressBar
                className="progress h-1 mt-0 mb-2"
                variant="primary"
                now={70}
              />
              <Row className="row mt-4">
                <Col className="col text-center">
                  <span className="text-muted">Weekly</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font1">8</h4>
                </Col>
                <Col className="col text-center">
                  <span className="text-muted">Monthly</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font2">23</h4>
                </Col>
                <Col className="col text-center">
                  <span className="text-muted">Total</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font3">31</h4>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} md={12} lg={6}>
          <Card className="card overflow-hidden">
            <Card.Body className=" text-center">
              <h6 className="">
                <span className="text-secondary">
                  <i className="fe fe-users me-2 fs-20 text-secondary-shadow"></i>
                  &nbsp;
                </span>
                Total Employees
              </h6>
              <h3 className="text-dark counter mt-0 mb-3 number-font">2,897</h3>

              <ProgressBar
                className="progress h-1 mt-0 mb-2"
                variant="secondary"
                now={50}
              />
              <Row className="row mt-4">
                <Col className="col text-center">
                  <span className="text-muted">Male</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font1">378</h4>
                </Col>
                <Col className="col text-center">
                  <span className="text-muted">Female</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font1">689</h4>
                </Col>
                <Col className="col text-center">
                  <span className="text-muted">Total</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font1">1,069</h4>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} md={12} lg={6}>
          <Card className="card overflow-hidden">
            <Card.Body className=" text-center">
              <h6 className="">
                <span className="text-success">
                  <i className="fe fe-award me-2 fs-20 text-success-shadow"></i>
                </span>
                Ongoing Projects
              </h6>
              <h3 className="text-dark counter mt-0 mb-3 number-font">1,567</h3>
              <ProgressBar
                className="progress h-1 mt-0 mb-2"
                variant="success"
                now={60}
              />
              <Row className="row mt-4">
                <Col className="col text-center">
                  <span className="text-muted">Weekly</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font1">5</h4>
                </Col>
                <Col className="col text-center">
                  <span className="text-muted">Monthly</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font1">20</h4>
                </Col>
                <Col className="col text-center">
                  <span className="text-muted">Total</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font1">25</h4>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} md={12} lg={6}>
          <Card className="card overflow-hidden">
            <Card.Body className=" text-center">
              <h6 className="">
                <span className="text-info">
                  <i className="fe fe-tag me-2 fs-20 text-info-shadow"></i>
                  &nbsp;
                </span>
                Total Tasks
              </h6>
              <h3 className="text-dark counter mt-0 mb-3 number-font">4,293</h3>

              <ProgressBar
                className="progress h-1 mt-0 mb-2"
                variant="info"
                now={40}
              />
              <Row className="row mt-4">
                <Col className="col text-center">
                  <span className="text-muted">Weekly</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font1">35</h4>
                </Col>
                <Col className="col text-center">
                  <span className="text-muted">Monthly</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font1">56</h4>
                </Col>
                <Col className="col text-center">
                  <span className="text-muted">Total</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font1">91</h4>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6} lg={6} xl={3}>
          
          <Card className="overflow-hidden">
            <Card.Body className=" pb-0">
              <div className="float-start">
                Graph Profit Margin
                <p className="my-0"></p>
                <h2 className="counter mb-0">78%</h2>
              </div>
              <div className="float-end">
                <span className="mini-stat-icon bg-info">
                  <i className="si si-eye "></i>
                </span>
              </div>
            </Card.Body>
            <Card.Body className=" pt-0 pb-0 border-top-0 overflow-hidden">
              <div className="chart-wrapper overflow-hidden">
                <ReactEcharts
                  id="areaChart1"
                  className="overflow-hidden"
                  option={chartdata.areaChart1.option}
                  series={chartdata.areaChart1.series}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body className=" pb-0">
              <div className="float-start">
                <p className="mb-1">Opex Ratio</p>
                <h2 className="counter mb-0">4.5:8</h2>
              </div>
              <div className="float-end">
                <span className="mini-stat-icon bg-danger">
                  <i className="si si-volume-2"></i>
                </span>
              </div>
            </Card.Body>
            <Card.Body className=" pt-0 pb-0 border-top-0 overflow-hidden">
              <div className="chart-wrapper ">
                <ReactEcharts
                  id="areaChart2"
                  className="areaChart chart-dropshadow-success"
                  option={chartdata.areaChart2.option}
                  series={chartdata.areaChart2.series}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body className=" pb-0">
              <div className="float-start">
                <p className="mb-1">Operating Profit Margin</p>
                <h2 className="counter mb-0">22%</h2>
              </div>
              <div className="float-end">
                <span className="mini-stat-icon bg-warning">
                  <i className="si si-chart"></i>
                </span>
              </div>
            </Card.Body>
            <Card.Body className=" pt-0 pb-0 border-top-0 overflow-hidden">
              <div className="chart-wrapper ">
                <ReactEcharts
                  id="areaChart3"
                  className="areaChart chart-dropshadow-warning"
                  option={chartdata.areaChart3.option}
                  series={chartdata.areaChart3.series}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body className=" pb-0">
              <div className="float-start">
                <p className="mb-1">Net Profit Margin</p>
                <h2 className="counter mb-0">16%</h2>
              </div>
              <div className="float-end">
                <span className="mini-stat-icon bg-success">
                  <i className="si si-user"></i>
                </span>
              </div>
            </Card.Body>
            <Card.Body className=" pt-0 pb-0 border-top-0 overflow-hidden">
              <div className="chart-wrapper ">
                <ReactEcharts
                  id="areaChart4"
                  className="areaChart chart-dropshadow-danger"
                  option={chartdata.areaChart4.option}
                  series={chartdata.areaChart4.series}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="row row-cards">
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card>
            <Card.Header className="card-header  pb-0 border-bottom-0">
              <h3 className="card-title">Total Revenue</h3>
              <div className="card-options">
                <Link className="btn btn-sm btn-primary" to="#">
                  <i className="fa fa-bar-chart mb-0"></i>
                </Link>
              </div>
            </Card.Header>
            <Card.Body className=" pt-0">
              <h3 className="d-inline-block mb-2">46,789</h3>
              <ProgressBar
                className="progress h-2 mt-2 mb-2"
                variant="primary"
                now={50}
              />
              <div className="float-start">
                <div className="mt-2">
                  <i className="fa fa-caret-up text-primary me-1"></i>
                  <span>12% increase</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card>
            <Card.Header className="card-header pb-0 border-bottom-0">
              <h3 className="card-title">Total Requests</h3>
              <div className="card-options">
                <Link className="btn btn-sm btn-success" to="#">
                  <i className="fa fa-send-o mb-0"></i>
                </Link>
              </div>
            </Card.Header>
            <Card.Body className="pt-0">
              <h3 className="d-inline-block mb-2">23,536</h3>
              <ProgressBar
                className="progress h-2 mt-2 mb-2"
                variant="success"
                now={50}
              />
              <div className="float-start">
                <div className="mt-2">
                  <i className="fa fa-caret-down text-success me-1"></i>
                  <span>5% decrease</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card>
            <Card.Header className="card-header pb-0 border-bottom-0">
              <h3 className="card-title">Requests Answered</h3>
              <div className="card-options">
                <Link className="btn btn-sm btn-warning" to="#">
                  <i className="fa fa-mail-reply mb-0"></i>
                </Link>
              </div>
            </Card.Header>
            <Card.Body className=" pt-0">
              <h3 className="d-inline-block mb-2">32,784</h3>

              <ProgressBar
                className="progress h-2 mt-2 mb-2"
                variant="warning"
                now={50}
              />
              <div className="float-start">
                <div className="mt-2">
                  <i className="fa fa-caret-up text-warning me-1"></i>
                  <span>10% increase</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card>
            <Card.Header className="card-header pb-0 border-bottom-0">
              <h3 className="card-title">Support Cost</h3>
              <div className="card-options">
                <Link className="btn btn-sm btn-danger" to="#">
                  <i className="fa fa-money mb-0"></i>
                </Link>
              </div>
            </Card.Header>
            <Card.Body className=" pt-0">
              <h3 className="d-inline-block mb-2">14,563</h3>

              <ProgressBar
                className="progress h-2 mt-2 mb-2"
                variant="danger"
                now={50}
              />
              <div className="float-start">
                <div className="mt-2">
                  <i className="fa fa-caret-down text-danger me-1"></i>
                  <span>15% decrease</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body>
              <div className="text-center">
                <small className="text-muted">Staff</small>
                <h2 className="mb-2 mt-0">450</h2>
                <div
                  id="circle"
                  className="mt-3 mb-3 chart-dropshadow-secondary d-flex justify-content-center"
                >
                  <div className="chart-circle ">
                    <CircularProgressbar
                      value={90}
                      strokeWidth={6}
                      styles={buildStyles({
                        pathColor: "#fb6b25",
                        trailColor: "#e5e5e5",
                      })}
                    />
                  </div>
                </div>
                <div className="chart-circle-value-3 text-secondary chartcircle  ">
                  <i className="icon icon-people"></i>
                </div>
                <p className="mb-0">
                  <span className="dot-label bg-secondary me-2"></span>Num of
                  Employees
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body>
              <div className="widget text-center">
                <small className="text-muted">Devices</small>
                <h2 className="mb-2 mt-0">485</h2>
                <div
                  id="circle-1"
                  className="mt-3 mb-3 chart-dropshadow-success d-flex justify-content-center"
                >
                  <div className="chart-circle ">
                    <CircularProgressbar
                      value={85}
                      strokeWidth={4}
                      styles={buildStyles({
                        pathColor: "#59af64",
                        trailColor: "#e5e5e5",
                      })}
                    />
                  </div>
                </div>
                <div className="chart-circle-value-3 text-success chartcircle ">
                  <i className="icon icon-screen-desktop"></i>
                </div>
                <p className="mb-0">
                  <span className="dot-label bg-success me-2"></span>Num of
                  Devices
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body>
              <div className="widget text-center">
                <small className="text-muted">Licenses</small>
                <h2 className="mb-2 mt-0">256</h2>
                <div
                  id="circle-2"
                  className="mt-3 mb-3 chart-dropshadow-warning d-flex justify-content-center"
                >
                  <div className="chart-circle ">
                    <CircularProgressbar
                      value={80}
                      strokeWidth={4}
                      styles={buildStyles({
                        pathColor: "#e2a117",
                        trailColor: "#e5e5e5",
                      })}
                    />
                  </div>
                </div>
                <div className="chart-circle-value-3 text-warning chartcircle ">
                  <i className="icon icon-notebook"></i>
                </div>
                <p className="mb-0">
                  <span className="dot-label bg-warning me-2"></span>7 licences
                  about to expire
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body>
              <div className="widget text-center">
                <small className="text-muted">Running Cost</small>
                <h2 className="mb-2 mt-0">$32.759</h2>
                <div
                  id="circle-3"
                  className="mt-3 mb-3 chart-dropshadow-danger d-flex justify-content-center"
                >
                  <div className="chart-circle ">
                    <CircularProgressbar
                      value={75}
                      strokeWidth={4}
                      styles={buildStyles({
                        pathColor: "#f5334f",
                        trailColor: "#e5e4e4",
                      })}
                    />
                  </div>
                </div>
                <div className="chart-circle-value-3 text-danger chartcircle ">
                  <i className="icon icon-chart"></i>
                </div>
                <p className="mb-0">
                  <span className="dot-label bg-danger me-2"></span>Total
                  Running Cost
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col sm={12} md={12} lg={6} xl={3}>
          <Card className="card widgets-cards bg-primary box-primary-shadow">
            <Card.Body className=" d-flex align-items-center circlecharts">
              <div className="chart-circle chart-circle-sm me-4 mt-1">
                <div className="circlechart">
                  <CircularProgressbar
                    value={70}
                    strokeWidth={7}
                    styles={buildStyles({
                      textColor: "white",
                      pathColor: "#321773",
                      trailColor: "#665fbe",
                    })}
                  />
                </div>
                <div
                  className="chart-circle-value text-white"
                  
                >
                  70%
                </div>
              </div>
              <div className="wrp text-wrapper text-white">
                <p className="mt-0">$8758</p>
                <p className="mt-1 mb-0">This Week Orders</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={6} xl={3}>
          <Card className="card widgets-cards bg-success box-success-shadow">
            <Card.Body className=" d-flex align-items-center circlecharts">
              <div className="chart-circle chart-circle-sm me-4 mt-1">
                <div className="circlechart">
                  <CircularProgressbar
                    value={17}
                    strokeWidth={7}
                    styles={buildStyles({
                      textColor: "white",
                      pathColor: "#0e8c79",
                      trailColor: "#1fa293",
                    })}
                  />
                </div>
                <div
                  className="chart-circle-value text-white"
                >
                  17%
                </div>
              </div>
              <div className="wrp text-wrapper text-white">
                <p className="mt-0">6477</p>
                <p className=" mt-1 mb-0">This Week Views</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={6} xl={3}>
          <Card className="card widgets-cards bg-warning box-warning-shadow">
            <Card.Body className=" d-flex align-items-center circlecharts ">
              <div className="chart-circle chart-circle-sm me-4 mt-1">
                <div className="circlechart">
                  <CircularProgressbar
                    value={42}
                    strokeWidth={7}
                    styles={buildStyles({
                      textColor: "white",
                      pathColor: "#c68806",
                      trailColor: "#deaa43",
                    })}
                  />
                </div>
                &nbsp;&nbsp;
                <div
                  className="chart-circle-value text-white"
                  
                >
                  42%
                </div>
              </div>
              <div className="wrp text-wrapper text-white">
                <p className="mt-0">7847</p>
                <p className=" mt-1 mb-0">This Week Earnings</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={6} xl={3}>
          <Card className=" widgets-cards bg-danger box-danger-shadow">
            <Card.Body className=" d-flex align-items-center circlecharts">
              <div className="chart-circle chart-circle-sm me-4 mt-1">
                <div className="circlechart">
                  <CircularProgressbar
                    value={37}
                    strokeWidth={7}
                    styles={buildStyles({
                      textColor: "white",
                      pathColor: "#c21a1a",
                      trailColor: "#de3656",
                      textalign: "center",
                    })}
                  />
                </div>
                <div
                  className="chart-circle-value text-white"
                >
                  37%
                </div>
              </div>
              <div className="wrp text-wrapper text-white">
                <p className="mt-0">345</p>
                <p className=" mt-1 mb-0">This Week Comments</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {follower.map((followers)=>(
        <Col sm={12} lg={6} md={12} xl={3} key={Math.random()}>
          <Card>
            <Row>
              <Col className="col-4">
                <div className={`circle-icon bg-${followers.color} text-center align-self-center box-${followers.color}-shadow`}>
                  <i className={`lnr ${followers.icon} fs-30  text-white mt-4`}></i>
                </div>
              </Col>
              <Col className="col-8">
                <Card.Body className=" p-4">
                  <h2 className="mb-2 fw-normal mt-2">{followers.data}</h2>
                  <h5 className="fw-normal mb-0">{followers.data1}</h5>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        ))}
      </Row>

      <Row>
        <Col md={12} xl={4}>
          <Card>
            <Card.Header className="card-header border-bottom">
              <h5 className="card-title">Sales Summary</h5>
            </Card.Header>
            <Card.Body>
            {summary.map((summarys)=>(
              <Row className="clearfix mb-4" key={Math.random()}>
                <Col>
                  <div className="float-start">
                    <h5 className="mb-0">
                      <strong>{summarys.heading}</strong>
                    </h5>
                    <small className="text-muted">weekly profit</small>
                  </div>
                </Col>
                <Col>
                  <div className="float-end">
                    <h4 className={`fw-bold mb-0 mt-2 text-${summarys.color}`}>{summarys.data}</h4>
                  </div>
                </Col>
              </Row>
))}
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={4}>
          <Card>
            <Card.Header>
              <h5 className="card-title">Visitors</h5>
            </Card.Header>
            <Card.Body>
              <div className="media mb-5 mt-0">
                <div className="d-flex me-3">
                  <Link to="#">
                    <img
                      src={Imagesdata("users18")}
                      className="media-object rounded-circle thumb-sm"
                      alt={"64x64"}
                    />
                  </Link>
                </div>
                <div className="media-body">
                  <Link to="#" className="text-dark">
                    Nathaniel Bustos
                  </Link>
                  <div className="text-muted small">Manager</div>
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-sm d-block"
                >
                  Follow
                </button>
              </div>
              <div className="media mb-5">
                <div className="d-flex me-3">
                  <Link to="#">
                    <img
                      src={Imagesdata("users4")}
                      className="media-object rounded-circle thumb-sm"
                      alt={"64x64"}
                    />
                  </Link>
                </div>
                <div className="media-body">
                  <Link to="#" className="text-dark">
                    Latanya Kinard
                  </Link>
                  <div className="text-muted small">Web Designer</div>
                </div>
                <button type="button" className="btn btn-blue btn-sm d-block">
                  Follow
                </button>
              </div>
              <div className="media mb-5">
                <div className="d-flex me-3">
                  <Link to="#">
                    <img
                      src={Imagesdata("users20")}
                      className="media-object rounded-circle thumb-sm"
                      alt={"64x64"}
                    />
                  </Link>
                </div>
                <div className="media-body">
                  <Link to="#" className="text-dark">
                    George Lujan
                  </Link>
                  <div className="text-muted small">Founder</div>
                </div>
                <button
                  type="button"
                  className="btn btn-warning btn-sm d-block"
                >
                  Follow
                </button>
              </div>
              <div className="media mb-5 mt-0">
                <div className="d-flex me-3">
                  <Link to="#">
                    <img
                      src={Imagesdata("users18")}
                      className="media-object rounded-circle thumb-sm"
                      alt={"64x64"}
                    />
                  </Link>
                </div>
                <div className="media-body">
                  <Link to="#" className="text-dark">
                    Bustos
                  </Link>
                  <div className="text-muted small">Manager</div>
                </div>
                <button
                  type="button"
                  className="btn btn-success btn-sm d-block"
                >
                  Follow
                </button>
              </div>
              <div className="media mb-0">
                <div className="d-flex me-3">
                  <Link to="#">
                    <img
                      src={Imagesdata("users19")}
                      className="media-object rounded-circle thumb-sm"
                      alt={"64x64"}
                    />
                  </Link>
                </div>
                <div className="media-body">
                  <Link to="#" className="text-dark">
                    Samantha
                  </Link>
                  <div className="text-muted small">Manager</div>
                </div>
                <button type="button" className="btn btn-danger btn-sm d-block">
                  Follow
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} sm={12} md={12} className=" p-l-0 p-r-0">
          <Card>
            <Card.Header className="card-header text-center">
              <h2 className="card-title">Projects</h2>
            </Card.Header>
            <Card.Body>
              <div className=" mx-auto">
                <div className="mx-auto chart-circle chart-circle-md mt-3 mb-4 text-center">
                  <div style={{ width: "90%" }}>
                    <CircularProgressbar
                      value={70}
                      strokeWidth={6}
                      className="CircularProgressbar"
                      styles={buildStyles({
                        textColor: "black",
                        pathColor: "#5e2dd8",
                        trailColor: "#e4e4e8",
                      })}
                    />
                  </div>
                </div>
                <div className="text-center mt-3">
                  <h3>Average Sales</h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quam velit quisquam veniam excepturi.
                  </p>
                  <Col className="col p-1 mt-2">
                    <div className="float-start">
                      <h3 className="ms-5 ">
                        <i className="fa fa-caret-up fa-1x text-primary me-1"></i>
                        $3.2
                      </h3>
                      <h6 className="ms-5 pb-0 mb-0">last month</h6>
                    </div>
                    <div className="float-end">
                      <h3 className="me-5">
                        <i className="fa fa-caret-up fa-1x text-primary me-1"></i>
                        $2.4
                      </h3>
                      <h6 className="me-5 mt-0 mb-0">last year</h6>
                    </div>
                  </Col>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <Card>
            <Card.Header>
              <div className="card-title">Skill Set</div>
            </Card.Header>
            <Card.Body className=" mt-0">
              <div className="chats-wrap media-list">
                <div className="chat-details mb-1 p-3">
                  <h4 className="mb-0">
                    <span className="h5 fw-normal">Html</span>
                    <span className="float-end p-1  btn btn-sm text-default">
                      <b>85</b>%
                    </span>
                  </h4>

                  <ProgressBar
                    className="progress progress-sm mt-3"
                    variant="primary"
                    now={85}
                  />
                </div>
                <div className="chat-details mb-1 p-3">
                  <h4 className="mb-0">
                    <span className="h5 fw-normal"> Wordpress</span>
                    <span className="float-end p-1  btn btn-sm text-default">
                      <b>46</b>%
                    </span>
                  </h4>

                  <ProgressBar
                    className="progress progress-sm mt-3"
                    variant="success"
                    now={46}
                  />
                </div>
                <div className="chat-details mb-1 p-3">
                  <h4 className="mb-0">
                    <span className="h5 fw-normal"> jQuery</span>
                    <span className="float-end p-1  btn btn-sm text-default">
                      <b>56</b>%
                    </span>
                  </h4>

                  <ProgressBar
                    className="progress progress-sm mt-3"
                    variant="warning"
                    now={56}
                  />
                </div>
                <div className="chat-details mb-1 p-3">
                  <h4 className="mb-0">
                    <span className="h5 fw-normal"> Photoshop</span>
                    <span className="float-end p-1  btn btn-sm text-default">
                      <b>90</b>%
                    </span>
                  </h4>
                  <ProgressBar
                    className="progress progress-sm mt-3"
                    variant="danger"
                    now={90}
                  />
                </div>
                <div className="chat-details mb-1 p-3">
                  <h4 className="mb-0">
                    <span className="h5 fw-normal">Angular js</span>
                    <span className="float-end p-1  btn btn-sm text-default">
                      <b>30</b>%
                    </span>
                  </h4>
                  <ProgressBar
                    className="progress progress-sm mt-3"
                    variant="info"
                    now={30}
                  />
                </div>
                <div className="chat-details mb-0 p-3">
                  <h4 className="mb-0">
                    <span className="h5 fw-normal">React js</span>
                    <span className="float-end p-1  btn btn-sm text-default">
                      <b>46</b>%
                    </span>
                  </h4>
                  <ProgressBar
                    className="progress progress-sm mt-3"
                    variant="secondary"
                    now={46}
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} sm={12} lg={8}>
          <Card className="card">
            <Card.Header>
              <h3 className="card-title">Best Pictures for Today</h3>
            </Card.Header>
            <Card.Body className="pt-0">
              <div className="widgetg">
      <LightboxGalleryWidgets/>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
