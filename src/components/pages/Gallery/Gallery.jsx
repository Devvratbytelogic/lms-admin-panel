import React from "react";
import {LightboxGallery1} from '../../../commondata/gallerydata';
import { Row, Col, Card, Pagination,} from "react-bootstrap";
import PageHeader from "../../../layouts/layoutcomponents/pageheader";

export default function Gallerys() {
  
  return (
    <div>
             <PageHeader titles="Gallery" active="Gallery" items={['Pages']} />
      <Card className="demo-gallery card">
        <Card.Header>
          <Card.Title>Light Gallery</Card.Title>
        </Card.Header>
        <Card.Body>
          <LightboxGallery1 />
        </Card.Body>
      </Card>

      <Row className="row mb-5">
        <Col className=" mt-1 d-none d-md-block" md={6}>
          1 - 10 of 234 photos
        </Col>
        <Col md={6}>
          <div className="float-end">
            <Pagination>
              <Pagination.Prev disabled>Prev </Pagination.Prev>
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Next>Next </Pagination.Next>
            </Pagination>
          </div>
        </Col>
      </Row>
    </div>
  );
}
