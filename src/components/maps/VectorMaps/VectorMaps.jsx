import React, {useState}from "react";
import {Row, Col, Card } from "react-bootstrap";
import PageHeader from "../../../layouts/layoutcomponents/pageheader";
import {WorldMap,Shapeworldmap,MapAnnotation,Europemap,Basicmarkers,Custommarkers} from '../../../commondata/Leafletmaps';
export default function VectorMaps() {
   const [content, setContent] = useState("");
  return (
    <div>
                 <PageHeader titles="Vectormaps" active="Vectormaps" items={['Maps']} />

      <Row>
        <Col lg={6}>
          <Card className="card m-b-20">
            <Card.Header>
              <h3 className="card-title">Asia Map</h3>
            </Card.Header>
            <Card.Body>
              <div id="vmap2" className="stateh ">
                <WorldMap setTooltipContent={setContent} />
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card className="card m-b-20">
            <Card.Header>
              <h3 className="card-title">Annotation Map</h3>
            </Card.Header>
            <Card.Body>
              <div id="vmap3" className="stateh ">
              <Shapeworldmap/>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Line Map</h3>
            </Card.Header>
            <Card.Body>
              <div id="vmap4" className="stateh ">
              <MapAnnotation/>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="card m-b-20">
            <Card.Header>
              <h3 className="card-title">Basicmarkers Map</h3>
            </Card.Header>
            <Card.Body>
              <div id="vmap5" className="stateh ">
                <Europemap/>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card className="card m-b-20">
            <Card.Header>
              <h3 className="card-title">Custommarkers Map</h3>
            </Card.Header>
            <Card.Body>
              <div id="vmap6" className="stateh ">

              <Basicmarkers/>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Graticule Map</h3>
            </Card.Header>
            <Card.Body>
              <div id="vmap7" className="stateh ">
              <Custommarkers/>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
