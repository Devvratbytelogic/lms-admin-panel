import React from "react";
import CountUp from "react-countup";
import {Row,Col, Card} from "react-bootstrap"
import {Uptimer,Timers,Middle,DayCounters,} from '../../../commondata/commondata';
import { useState,useEffect } from "react";
import Countdown from 'react-countdown';
import PageHeader from "../../../layouts/layoutcomponents/pageheader";

export default function Counters() {

  // Random component
  const AfterCompletion = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <AfterCompletion />;
    } else {
      // Render a countdown
      return (
        <span className="h3 text-white text-bold">
          <span>{days} Days {hours} Hours {minutes} Minutes {seconds} Seconds</span>
        </span>
      );
    }
  };

  const [time, setTime] = useState(0);

  return (
    <div>
             <PageHeader titles="Counters" active="Counters" items={['Components']} />

      <Row className=" row-cards">
        <Col md={12} lg={4} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title as="h3">Numbers counter</Card.Title>
            </Card.Header>
            <Card.Body className=" text-center">
              <div className="counter-icon bg-primary-gradient box-shadow-primary brround ms-auto me-auto">
                <i className="fe fe-users text-white mb-5 "></i>
              </div>
              <h5>Employess</h5>
              <h2 className="counter">
                <CountUp end={2569} separator="," start={0} duration={1.94} />
              </h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={4} xl={4}>
          <Card >
            <Card.Header>
              <Card.Title as="h3">Numbers counter</Card.Title>
            </Card.Header>
            <Card.Body className=" text-center">
              <div className="counter-icon bg-danger-gradient box-shadow-danger brround ms-auto me-auto">
                <i className="fe fe-dollar-sign text-white mb-5 "></i>
              </div>
              <h5>Profit</h5>
              <h2 className="counter">
                <CountUp
                  end={256989}
                  separator=","
                  start={0.0}
                  duration={1.94}
                />
                .32
              </h2>
            </Card.Body>
          </Card>
        </Col>
        <Col  md={12} lg={4} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title as="h3">Numbers counter</Card.Title>
            </Card.Header>
            <Card.Body className=" text-center">
              <div className="counter-icon bg-secondary-gradient  box-shadow-secondary brround ms-auto me-auto">
                <i className="fe fe-alert-octagon text-white mb-5 "></i>
              </div>
              <h5>Errors</h5>
              <h2 className="counter">
                0.
                <CountUp end={8998} start={0} duration={1.4} />
              </h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title as="h3">Time Counting From 0</Card.Title>
            </Card.Header>
            <Card.Body className=" text-center">
              <div className="example bg-primary br-7">
                <span id="timer-countup" className="h3 text-white">
                  <Uptimer/>
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title as="h3">Time Counting From 60 to 20</Card.Title>
            </Card.Header>
            <Card.Body className=" text-center">
              <div className="example bg-secondary br-7">
                <span id="timer-countinbetween" className="h3 text-white">
                  <Timers min={1}/>
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title as="h3">Time 1 minute counter</Card.Title>
            </Card.Header>
            <Card.Body className=" text-center">
              <div className="example bg-info br-7">
                <span className="h3 text-white">
                  <Middle/>
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          
          <Card>
            <Card.Header>
              <Card.Title as="h3">Time Counting days Limit</Card.Title>
            </Card.Header>
             <Card.Body className=" text-center">
              <Row>
                <Col md={6} className=" mx-auto">
                  <div className=" example bg-success br-7"> 
                <Countdown date={Date.now() + 259200000} renderer={renderer} />
                </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        
        </Col>
        <Col md={12} >
          <Card>
            <Card.Header>
              <Card.Title as="h3">Day Counter</Card.Title>
            </Card.Header>
            <Card.Body className=" text-center">
            <DayCounters />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
