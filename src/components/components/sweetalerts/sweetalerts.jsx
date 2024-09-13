import React from "react";
import { Link } from "react-router-dom";
import {Breadcrumb, Card, Row,Col,Button, Form} from"react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";
import { Imagesdata } from "../../../commondata/commonimages";
import PageHeader from "../../../layouts/layoutcomponents/pageheader";
export default function SweetAlerts() {
  const [title, settitle] = useState("Your message");
  const [message, setmessage] = useState("Your message");
//Primary
const Primaryalert = () =>{
  Swal.fire({
    title: "Congratulations!",
    icon: "success",
    allowOutsideClick: false,
    confirmButtonText: "ok",
    cancelButtonColor: "#6259ca",
    text: "Your message has been succesfully sent",
  });
}
//Warning
const Warningalert = ()=>  {
  Swal.fire({
    title: "Alert",
    icon: "warning",
    allowOutsideClick: false,
    showCancelButton: true,
    cancelButtonText: "Stay This page",
    confirmButtonText: "Exit",
    cancelButtonColor: "#6259ca",
    text: "Waring alert",
  });
}
//Danger
const Dangeralert = () => {
  Swal.fire({
    title: "Alert",
    icon: "error",
    allowOutsideClick: false,
    confirmButtonText: "Exit",
    showCancelButton: "true",
    cancelButtonText: "Stay This page",
    cancelButtonColor: "#6259ca",
    text: "Danger alert",
  });
}
//info
const Infoalert = ()=> {
  Swal.fire({
    title: "Alert",
    icon: "info",
    allowOutsideClick: false,
    confirmButtonText: "Exit",
    showCancelButton: "true",
    cancelButtonText: "Stay This page",
    cancelButtonColor: "#6259ca",
    text: "Info alert",
  });
}
  const simpleAlert = () => {
    Swal.fire({ text: message, allowOutsideClick: false, });
  };

  const alertTitle = () => {
    Swal.fire({ title: title, text: message, allowOutsideClick: false, });
  };

  const alertImage = () => {
    Swal.fire({
      title: title,
      text: message,
      imageAlt: '../assets/images/brand/logo-1.png',
      imageUrl: Imagesdata("logo2"),
      allowOutsideClick: false,
    });
  };

  const alertTimer = () => {
    Swal.fire({
      title: title,
      text: 'Your message(close after 2 seconds)',
      allowOutsideClick: false,
      timer: 2000,
      timerProgressBar: true,
    });
  };
  return (
    <div>
             <PageHeader titles="Sweetalerts" active="Sweetalerts" items={['Components']} />

      <Row>
        <Col sm={12}>
          <Card>
            <Card.Header className="border-bottom-0">
              <h3 className="card-title">Sample Sweet Alerts</h3>
            </Card.Header>
            <Card.Body>
              <Button
                className="btn btn-success mt-2 me-2"
                variant=""
                onClick={Primaryalert}
              >
                success alert
              </Button>
              <Button
                className="btn btn-warning mt-2 me-2"
                variant=""
                onClick={Warningalert}
              >
                Warning alert
              </Button>
              <Button
                className="btn btn-danger mt-2 me-2"
                variant=""
                onClick={Dangeralert}
              >
                Danger alert
              </Button>
              <Button
                className="btn btn-info mt-2 me-2"
                variant=""
                onClick={Infoalert}
              >
                Info alert
              </Button>
            </Card.Body>
          </Card>
             <Card>
            <Card.Header>
              <Card.Title as="h3">Forms Sweet-alert</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form.Group className="form-group">
                <Form.Label>Title</Form.Label>
                <Form.Control type='text' className="" onChange={(ele) => { settitle(ele.target.value); }} placeholder='Title text' id='title' />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label>Message</Form.Label>
                <Form.Control type='text' className="" onChange={(ele) => { setmessage(ele.target.value); }} placeholder='Your message' id='message' />
              </Form.Group>
              <Button className="mt-2 me-2" variant="primary" onClick={() => { simpleAlert(); }}>Simple Alert</Button>
              <Button className="mt-2 me-2" variant="secondary" onClick={() => { alertTitle(); }}>Alert with Title</Button>
              <Button className="mt-2 me-2" variant="info" onClick={() => { alertImage(); }}>Alert with Image</Button>
              <Button className="mt-2 me-2" variant="warning" onClick={() => { alertTimer(); }}>Alert with Timer</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
