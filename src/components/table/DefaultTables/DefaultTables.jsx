import React from "react";
import { Link } from "react-router-dom";
import { Row, Card, Col, Breadcrumb } from "react-bootstrap";
import * as defaulttabledata from "../../../commondata/defaulttabledata";
import PageHeader from "../../../layouts/layoutcomponents/pageheader";
export default function DefaultTables() {
  return (
    <div>
             <PageHeader titles="Default table" active="Default table" items={['Tables']} />

      <Row className=" row-sm">
        <Col lg={12}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h3 className="card-title mb-1">Simple Table</h3>
                <p className="text-muted card-sub-title">
                  Using the most basic table markup
                </p>
              </div>
              <div className="table-responsive">
                <defaulttabledata.Basictable />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className=" row-sm">
        <Col lg={12}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h3 className="card-title mb-1">Striped Rows</h3>
                <p className="text-muted card-sub-title">
                  Add zebra-striping to any table row.
                </p>
              </div>
              <div className="table-responsive">
                <defaulttabledata.Addzebrastriping />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className=" row-sm">
        <Col lg={12}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h3 className="card-title mb-1">Bordered Table</h3>
                <p className="text-muted card-sub-title">
                  Add borders on all sides of the table and cells.
                </p>
              </div>
              <div className="table-responsive">
                <defaulttabledata.Addbordersonallsides />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className=" row-sm">
        <Col lg={12}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h3 className="card-title mb-1">Hoverable Rows Table</h3>
                <p className="text-muted card-sub-title">
                  To enable a hover state on table rows.
                </p>
              </div>
              <div className="table-responsive">
                <defaulttabledata.Toenableahoverstate />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
