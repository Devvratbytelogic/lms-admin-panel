import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import { Card, Row, Col, Form } from "react-bootstrap";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { SelectBoxwithLabel, SelectBox, DualList, ColorPicker, ColorPickers, GroupOptionMutipleSelect1, CustomSelectIcon, Singleselect12, SketchExample } from '../../../commondata/formsdata';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import { Dropimg, Dropimg1 } from '../../../commondata/formsdata';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import { AnimatedMulti, AnimatedMulti1, AnimatedMulti2, SearchSelect1, BasicMutipleSelect, DisabledMutipleSelect, Singleselectdis, DisablePreselected, MultipleItemsWithGroupOption, Singleselect1, GroupOptionMutipleSelect, MultipleItems, Selectfilter, CustomStyle, Disabledselect1, MultipleSelect3, Disabledselect, OptgroupSupport, MultipleSelect1, MultipleSelect22, SearchSelect22, SearchSelect13, SearchSelect45 } from '../../../commondata/selectdata';
import PageHeader from "../../../layouts/layoutcomponents/pageheader";

export default function FormAdvanced() {
  //file upload
  const [files] = useState([]);

  const [dates, setDates] = useState();

  //Time picker with default value
  const [value1, setValue1] = useState(
    dayjs('2018-01-01T00:00:00.000Z'),
  )
  return (
    <div>
      <PageHeader titles="Form Advanced" active="Form Advanced" items={['Forms']} />
      <Row>
        <Col lg={12} md={12}>
          <Form method="post" className="card file-uploads">
            <Card.Header>
              <h3 className="card-title">File Upload</h3>
            </Card.Header>
            <Card.Body>
              <Row className=" mb-5">
                <Col className=" mb-4 mb-lg-0 drop" lg={4} sm={12}>
                  <Dropimg type="file" className="dropify" />
                </Col>
                <Col className=" mb-4 mb-lg-0 drop " lg={4} sm={12}>
                  <Dropimg1 type="file" className="dropify" />
                </Col>
                <Col className=" drop" lg={3} sm={12}>
                  <FilePond disabled files={files} allowMultiple={true} maxFiles={3} server="/api" name="files" labelIdle='Disabled' />

                </Col>
              </Row>
              <div className="mb-5 file-browser">
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Default file input example</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </div>
              <div className="form-group mb-0 drop4">
                <Form.Group>
                  <Form.Label>Multiple files input Upload</Form.Label>
                  <Form.Control type="file" id="formFileMultiple" multiple />
                </Form.Group>
              </div>
            </Card.Body>
          </Form>

          <Form method="post" className="card">
            <Card.Header>
              <h3 className="card-title">Select2 elements</h3>
            </Card.Header>
            <Card.Body>
              <Form.Group>
                <Form.Label>Beast</Form.Label>
                <AnimatedMulti />
              </Form.Group>
              <Form.Group>
                <Form.Label>Basic Select2</Form.Label>
                <AnimatedMulti1 />
              </Form.Group>
              <Form.Group>
                <Form.Label> Select2 with search box</Form.Label>
                <SearchSelect1 />
              </Form.Group>
              <Form.Group>
                <Form.Label>Users list</Form.Label>
                <AnimatedMulti2 />
              </Form.Group>
            </Card.Body>
          </Form>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Time Picker</h3>
            </Card.Header>
            <Card.Body className=" Timepicker">
              <Form.Label>Default Time Picker:</Form.Label>
              <div className="wd-150 mg-b-30">
                <div className="input-group">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimePicker']}>
                      <TimePicker label="Basic time picker" />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div>

              <Form.Label className="mt-4">
                Set the scroll position to local time if no value selected:
              </Form.Label>
              <div className="wd-150 mg-b-30">
                <div className="input-group">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker value={value1} onChange={setValue1} />
                  </LocalizationProvider>
                </div>
              </div>

              <Form.Label className="mt-4 ">
                Dynamically set the time using a Javascript Date object:
              </Form.Label>
              <div className="d-flex">
                <div className="input-group wd-150">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker ampm={false} openTo="hours" views={['hours', 'minutes', 'seconds']} format="HH:mm:ss" label="With seconds" value={value1} onChange={(newValue) => { setValue1(newValue); }} />

                  </LocalizationProvider>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Color Picker</h3>
            </Card.Header>
            <Card.Body className="color-picker">
              <p className=" mb-1">
                Same way you select color in Adobe Photoshop.
              </p>
              <ColorPicker />

              <SketchExample />
              <p className="mt-4 mb-1">
                Show pallete only. If you'd like, spectrum can show the palettes
                you specify, and nothing else.
              </p>
              <ColorPickers id="showPaletteOnly" type="text" />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>Date, Month, Year Range Picker</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6} xl={4} className="mt-4 mt-md-0 my-2">
                  <div className="input-group input-date">
                    <span className="input-group-text">
                      <i className="fa fa-clock-o tx-16 lh-0 op-6"></i>
                    </span>
                    <DatePicker
                      className="form-control"
                      placeholder="Date Range"
                      value={dates}
                      onChange={setDates}
                      multiple
                      numberOfMonths={1}
                    />
                  </div>
                </Col>
                <Col className="mt-4 mt-md-0 my-2" md={6} xl={4}>
                  <div className="input-group">
                    <div className="input-group-text">
                      <span className="fa fa-clock-o tx-16 lh-0 op-6"></span>
                    </div>
                    <DatePicker
                      className="form-control"
                      placeholder="Month Range"
                      onlyMonthPicker
                      multiple
                      sort
                      plugins={[]}
                    />
                  </div>
                </Col>
                <Col className="mt-4 mt-md-0 my-2" md={6} xl={4}>
                  <div className="input-group">
                    <div className="input-group-text">
                      <span className="fa fa-clock-o tx-16 lh-0 op-6"></span>
                    </div>
                    <DatePicker
                      className="form-control"
                      placeholder="Year Range"
                      onlyYearPicker
                      multiple
                      sort
                    />
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Default Date picker</Card.Title>
            </Card.Header>
            <Card.Body>
              <p className="mg-b-20 mg-sm-b-40">
                The datepicker is tied to a standard form input field. Click on
                the input to open an interactive calendar in a small overlay. If
                a date is chosen, feedback is shown as the input's value.
              </p>
              <div className="wd-200 mg-b-30">
                <div className="input-group">
                  <div className="input-group-text">
                    <span className="fa fa-calendar tx-16 lh-0 op-6"></span>
                  </div>
                  <DatePicker
                    className="form-control fc-datepicker"
                    placeholder="MM/DD/YYYY"
                    value={dates}
                    onChange={setDates}
                    multiple
                    numberOfMonths={1}
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Multiple Months </Card.Title>
            </Card.Header>
            <Card.Body>
              <p className="mg-b-20 mg-sm-b-40">
                The datepicker is tied to a standard form input field. Click on
                the input to open an interactive calendar in a small overlay. If
                a date is chosen, feedback is shown as the input's value.
              </p>
              <div className="wd-200 mg-b-30">
                <div className="input-group">
                  <div className="input-group-text">
                    <span className="fa fa-calendar tx-16 lh-0 op-6"></span>
                  </div>
                  <DatePicker
                    className="form-control"
                    placeholder="MM/DD/YYYY"
                    onlyMonthPicker
                    multiple
                    sort
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Multiple Select Styles</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col lg={6}>
                  <Form.Group>
                    <Form.Label>Basic MutipleSelect</Form.Label>
                    <BasicMutipleSelect />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Disabled MutipleSelect</Form.Label>
                    <DisabledMutipleSelect
                      disabled
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Single Group MutipleSelect</Form.Label>
                    <Singleselectdis />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Multiple Items With Group-Option</Form.Label>
                    <MultipleItemsWithGroupOption />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Single Row</Form.Label>
                    <Singleselect1 />
                  </Form.Group>
                  <Form.Group className="form-group mb-0">
                    <Form.Label>Group-Option Filter </Form.Label>
                    <DisablePreselected />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group>
                    <Form.Label>MutipleSelect</Form.Label>
                    <GroupOptionMutipleSelect1 />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>MutipleSelect-1:</Form.Label>
                    <GroupOptionMutipleSelect />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Multiple Items</Form.Label>
                    <MultipleItems />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Custom Styles</Form.Label>
                    <CustomSelectIcon />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Select Filter </Form.Label>

                    <Selectfilter />
                  </Form.Group>
                  <Form.Group className="mb-0">
                    <Form.Label>Custom StyleHover</Form.Label>

                    <CustomStyle />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Row>
            <Col md={12}>
              <Card>
                <Card.Header>
                  <Card.Title>Country selector</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form className='CountrySelector'>
                    <PhoneInput
                      country={"us"}
                      value="1425652"
                      onChange={phone => console.log({ phone })}
                    />
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Card>
            <Card.Header>
              <Card.Title>Select All Styles</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col lg={6} md={12}>
                  <Form.Group className="form-group row">
                    <Form.Label className="col-md-12 form-label">
                      Single Select:
                    </Form.Label>
                    <Col md={12}>
                      <Singleselect12 />
                    </Col>
                  </Form.Group>
                  <Form.Group className="form-group row">
                    <Form.Label className="col-md-12 form-label">
                      Disabled Select:
                    </Form.Label>
                    <Col md={12}>
                      <Disabledselect1 />
                    </Col>
                  </Form.Group>
                  <Form.Group className="form-group row">
                    <Form.Label className="col-md-12 form-label">
                      Inline Select:
                    </Form.Label>
                    <Col md={12}>
                      <Singleselect12 />
                    </Col>
                  </Form.Group>
                </Col>
                <Col lg={6} md={12}>
                  <Form.Group className="form-group row">
                    <Form.Label className="col-md-12 form-label">
                      Multiple Select:
                    </Form.Label>
                    <Col md={12}>
                      <MultipleSelect3 />
                    </Col>
                  </Form.Group>
                  <Form.Group className="form-group row">
                    <Form.Label className="col-md-12 form-label">
                      Disabled Select:
                    </Form.Label>
                    <Col md={12}>
                      <Disabledselect />
                    </Col>
                  </Form.Group>
                  <Form.Group className="form-group row">
                    <Form.Label className="col-md-12 form-label">
                      Optgroup Support:
                    </Form.Label>
                    <Col md={12}>
                      <OptgroupSupport />
                    </Col>
                  </Form.Group>
                </Col>
                <Col lg={6} md={12}>
                  <Form.Group className="form-group row">
                    <Form.Label className="col-md-12 form-label">
                      Multiple Select-1:
                    </Form.Label>
                    <Col md={12}>
                      <MultipleSelect1 />
                    </Col>
                  </Form.Group>
                  <div className="form-group row ">
                    <Form.Label className="col-md-12 form-label">
                      Multiple Select-2:
                    </Form.Label>
                    <Col md={12}>
                      <MultipleSelect22 />
                    </Col>
                  </div>
                  <Form.Group className="form-group row">
                    <Form.Label className="col-md-12 form-label">
                      Search Select-1:
                    </Form.Label>
                    <Col md={12}>
                      <SearchSelect1 />
                    </Col>
                  </Form.Group>
                </Col>
                <Col lg={6} md={12}>
                  <Form.Group className="form-group row">
                    <Form.Label className="col-md-12 form-label">
                      Search Select-2:
                    </Form.Label>
                    <Col md={12}>
                      <SearchSelect22 />
                    </Col>
                  </Form.Group>
                  <Form.Group className="form-group row">
                    <Form.Label className="col-md-12 form-label">
                      Search Select-3:
                    </Form.Label>
                    <Col md={12}>
                      <SearchSelect13 />
                    </Col>
                  </Form.Group>
                  <Form.Group className="form-group row">
                    <Form.Label className="col-md-12 form-label">
                      Search Select-4:
                    </Form.Label>
                    <Col md={12}>
                      <SearchSelect45 />
                    </Col>
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title>Dual List Box</Card.Title>
            </Card.Header>
            <Card.Body>
              <DualList />
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title>Select Box</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col xl={6} md={12}>
                  <Form.Group className="mb-5 mb-lg-0">
                    <SelectBox />
                  </Form.Group>
                </Col>
                <Col xl={6} md={12}>
                  <Form.Group>
                    <SelectBoxwithLabel />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </div>
  );
}
