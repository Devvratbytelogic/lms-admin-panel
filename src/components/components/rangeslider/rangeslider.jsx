import React from "react";
import { Breadcrumb, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import { useState } from "react";
import Slider,{ SliderThumb }  from '@mui/material/Slider';
import {CustomizedSlider,CustomizedSlider1,CustomizedSlider2,CustomizedSlider4,TrackFalseSlider,TrackFalseSlider1,TrackInvertedSlider,TrackInvertedSlider1,VerticalSlider,VerticalSlider1,VerticalSlider2,VerticalSlider4} from '../../../commondata/commondata';
import PageHeader from "../../../layouts/layoutcomponents/pageheader";

export default function RangeSlider() {
  
  //DiscreteSliderMarks
const marks = [
  {
    value: 0,
    label: '0',
  },
  
  {
    value: 100,
    label: '100',
  },
];

function valuetext(value) {
  return `${value}`;
}
//Rangeslider2
const marksrv = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetextrv(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}
//RangeSlider3
function valuetext2(value) {
  return `${value}`;
}
const [value, setValue] = useState([20, 74]);
  
const handleChange = (event, newValue) => {
  setValue(newValue);
}
//RangeSlider4
const [value1, setValue1] = useState([10, 94]);
  
const handleChange1 = (event1, newValue1) => {
  setValue1(newValue1);
};
  return (
    <div>
             <PageHeader titles="RangeSlider" active="RangeSlider" items={['Components']} />


      <Card>
        <Card.Header className="border-bottom-0">
          <div className="card-title">Range Slider</div>
        </Card.Header>
        <Card.Body>
          <Row className="row-sm">
            <Col lg={12}>
               <Box md={{ width: 100 }}>
        <Slider
          defaultValue={50}
          getAriaValueText={valuetext}
          step={10}
          valueLabelDisplay="on"
          marks={marks}
        />
      </Box>
            </Col>
            <Col lg={12} className=" mt-4">
               <Box md={{ width: 100 }}>

<Slider
  aria-label="Restricted values"
  defaultValue={20}
  valueLabelFormat={valueLabelFormat}
  getAriaValueText={valuetextrv}
  step={null}
  valueLabelDisplay="auto"
  marks={marksrv}
/>
</Box>
            </Col>
          </Row>
          <Row className="row-sm">
            <Col lg={12} className=" mt-4">
               <Box md={{ width: 300 }}>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="on"
          getAriaValueText={valuetext2}
        />
      </Box>
            </Col>
            <Col lg={12} className=" mt-4">
               <Box md={{ width: 300 }}>
        <Slider
          value={value1}
          onChange={handleChange1}
          valueLabelDisplay="on"
          getAriaValueText={valuetext2}
          color="secondary"
        />
      </Box>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header className="border-bottom-0">
          <div className="card-title">Customized Range Slider</div>
        </Card.Header>
        <Card.Body>
          <Row className="row-sm">
            <Col lg={12}>
              <CustomizedSlider/>
            </Col>
            <Col lg={12} className=" mt-4">
              <CustomizedSlider1 />
            </Col>
          </Row>
          <Row className="row-sm">
            <Col lg={12} className=" mt-4">
              <CustomizedSlider2 />
            </Col>
            <Col lg={12} className=" mt-4">
              <CustomizedSlider4 />
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header className="border-bottom-0">
          <div className="card-title">Track Inverted Slider</div>
        </Card.Header>
        <Card.Body>
          <Row className="row-sm">
            <Col lg={12}>
              <TrackFalseSlider />
            </Col>
            <Col lg={12} className=" mt-4">
              <TrackFalseSlider1 />
            </Col>
          </Row>
          <Row className="row-sm">
            <Col lg={12} className=" mt-4">
              <TrackInvertedSlider />
            </Col>
            <Col lg={12} className=" mt-4">
              <TrackInvertedSlider1 />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header className="border-bottom-0">
          <div className="card-title">Vertical Customized Range Slider</div>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col className=" mt-4" lg={3} md={3} sm={3} xs={6}>
              <VerticalSlider />
            </Col>
            <Col className=" mt-4" lg={3} md={3} sm={3} xs={6}>
              <VerticalSlider1 />
            </Col>

            <Col className=" mt-4" lg={3} md={3} sm={3} xs={6}>
              <VerticalSlider2 />
            </Col>
            <Col className=" mt-4" lg={3} md={3} sm={3} xs={6}>
              <VerticalSlider4 />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
