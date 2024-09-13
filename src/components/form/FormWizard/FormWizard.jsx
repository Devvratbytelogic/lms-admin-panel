import React from "react";
import {Card, Row, Col} from "react-bootstrap";
import { BasicContent,VerticalOrientationWizard ,BasicFormWizard,BasicContentWizard,WizardForm} from "../../../commondata/formsdata";
import PageHeader from "../../../layouts/layoutcomponents/pageheader";
export default function FormWizard() {
  return (
    <div>
             <PageHeader titles="Form-Wizard" active="Form-Wizard" items={['Forms']} />
      <Row>
        <Col className="col-12">
          <Card>
            <Card.Header className=" border-bottom-0">
              <h3 className="card-title">Form Wizard</h3>
            </Card.Header>
            <Card.Body className="cbody">
              <div id="smartwizard-3 ">
                <BasicContent />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header className=" border-bottom-0">
              <h3 className="card-title">Accordion-Wizard-Form</h3>
            </Card.Header>
            <Card.Body className="accordion-wizard-form">
              <BasicFormWizard />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header className=" border-bottom-0">
              <div className="card-title">Basic Content Wizard</div>
            </Card.Header>
            <Card.Body className="">
              <BasicContentWizard />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header className=" border-bottom-0">
              <div className="card-title">Basic Wizard With Validation</div>
            </Card.Header>
            <Card.Body className="">
              <WizardForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card className="valid">
            <Card.Header className="border-bottom-0">
              <div className="card-title">Vertical Orientation Wizard</div>
            </Card.Header>
            <Card.Body className="valids ">
              <VerticalOrientationWizard />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
