import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import * as Leafletmaps from "../../../commondata/Leafletmaps";
import PageHeader from "../../../layouts/layoutcomponents/pageheader";
export default function LeafletMaps() {
  return (
    <div>
             <PageHeader titles="Leaflet maps" active="Leaflet maps" items={['Maps']} />

      <Row className="row row-sm">
        <Col lg={12}>
          <Card className="card mg-b-20" id="map">
            <Card.Header>
              <Card.Title>Basic</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="ht-300" id="leaflet1" style={{ height: "300px" }}>
                <Leafletmaps.Basic />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}>
          <Card className="card mg-b-20" id="map2">
            <Card.Header>
              <Card.Title>With Popup</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="ht-300" id="leaflet2" style={{ height: "300px" }}>
                <Leafletmaps.Popups />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}>
          <Card className="card" id="map1">
            <Card.Header>
              <Card.Title>Map With Circle</Card.Title>
            </Card.Header>
            <Card.Body>
              <div
                className="ht-200 ht-sm-300 ht-md-400"
                id="leaflet3"
                style={{ height: "300px" }}
              >
                <Leafletmaps.Circles />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
