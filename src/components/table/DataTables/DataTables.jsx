import React from "react";
import * as datatable from "../../../commondata/datatable";
import { Row, Card, Col } from "react-bootstrap";
import PageHeader from "../../../layouts/layoutcomponents/pageheader";

export default function DataTables() {

  return (
    <div>
             <PageHeader titles="Datatable" active="Datatable" items={['Tables']} />
      <Row className=" row-sm">
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Basic Datatable</h3>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <datatable.BasicDataTable />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="row-sm">
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Responsive DataTable</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="table-responsive">
              <datatable.ResponsiveDataTable />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className="row-sm">
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'> DataTable</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="table-responsive table-page">
              <datatable.Datatable/>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </div>
  );
}
