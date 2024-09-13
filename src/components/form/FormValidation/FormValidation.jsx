import React, {useState} from "react";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import {CustomValidation} from '../../../commondata/formsdata';
import {Singleselect1 } from '../../../commondata/selectdata';
import PageHeader from "../../../layouts/layoutcomponents/pageheader";
import { Formik } from 'formik';
import *as Yup from 'yup';
export default function FormValidation() {
  
const State = [
  { value: ".....", label: "....." },
];
const Option = [
  { value: "One", label: "One" },
  { value: "Two", label: "Two" },
  { value: "Three", label: "Three" },
  { value: "Four", label: "Four" },

];
// Form Validation with Tooltips
const [validated, setValidated] = useState(false);
const state = [
  { value: ".....", label: "....." },
];
const schema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  username: Yup.string().required(),
  city: Yup.string().required(),
  state: Yup.string().required(),
  zip: Yup.string().required(),
  file: Yup.mixed().required(),
  terms: Yup.bool().required().oneOf([true], 'terms must be accepted'),
});

  return (
    <div>
             <PageHeader titles="Form-Validations" active="Form-Validations" items={['Forms']} />
      <Row>
        <Col md={12} lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Custom Validation</h3>
            </Card.Header>
            <Card.Body>
              <CustomValidation />
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Default Validation</h3>
            </Card.Header>
            <Card.Body>
            <Form>
              <div className="form-row">
                <Col xl={6} className="mb-3">
                  <Form.Label>First name</Form.Label>
                  <Form.Control required type="text" placeholder="First name" defaultValue="Mark" />
                </Col>
                <Col xl={6} className="mb-3">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control required type="text" placeholder="Last name" defaultValue="Otto" />
                </Col>
              </div>
              <div className="form-row">
                <Col xl={6} className="mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="City" required />
                </Col>
                <Col xl={3} className="mb-3">
                  <Form.Label>State</Form.Label>
                  <Form.Control type="text" placeholder="State" required />
                </Col>
                <Col xl={3} className="mb-3">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control type="text" placeholder="Zip" required />
                </Col>
              </div>
              <Form.Group>
                <Form.Check required label="Agree to terms and conditions" feedbackType="invalid" />
              </Form.Group>
              <Button className='mt-3' type="submit">Submit form</Button>
            </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Server Side Validation</h3>
            </Card.Header>
            <Card.Body>
            <Form>
              <div className="form-row">
                <Col xl={6} className="mb-3">
                  <Form.Label>First name</Form.Label>
                  <Form.Control required isValid type="text" placeholder="First name" defaultValue="Mark" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Col>
                <Col xl={6} className="mb-3">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control required isValid type="text" placeholder="Last name" defaultValue="Otto" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Col>
              </div>
              <div className="form-row">
                <Col xl={6} className="mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="City" required isInvalid />
                  <Form.Control.Feedback type="invalid"> Please provide a valid city. </Form.Control.Feedback>
                </Col>
                <Col xl={3} className="mb-3">
                  <Form.Label>State</Form.Label>
                  <Form.Control type="text" placeholder="State" required />
                  {/* <Select classNamePrefix="Select" options={State} placeholder='State'/> */}
                  <Form.Control.Feedback type="invalid"> Please provide a valid state.</Form.Control.Feedback>
                </Col>
                <Col xl={3} className="mb-3">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control type="text" placeholder="Zip" required isInvalid />
                  <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
                </Col>
              </div>
              <Form.Group>
                <Form.Check required isInvalid label="Agree to terms and conditions" feedback="You must agree before submitting." feedbackType="invalid" />
              </Form.Group>
              <Button type="submit">Submit form</Button>
            </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Supportted Elements</h3>
            </Card.Header>
            <Card.Body>
              <Form className="was-validated">
                <div className="mb-3">
                  <Form.Label htmlFor="validationTextarea">Textarea</Form.Label>
                  <textarea
                    className="form-control is-invalid"
                    id="validationTextarea"
                    placeholder=" example textarea"
                    
                  ></textarea>
                  <div className="invalid-feedback">
                    Please enter a message in the textarea.
                  </div>
                </div>
                <div className="custom-control custom-checkbox mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customControlValidation1"
                    
                  />
                  <Form.Label
                    className="custom-control-label"
                    htmlFor="customControlValidation1"
                  >
                    Agree to terms and conditions
                  </Form.Label>
                </div>
                <div className="d-flex">
                  <div className="custom-control custom-radio me-4">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="customControlValidation2"
                      name="radio-stacked"
                      
                    />
                    <Form.Label
                      className="custom-control-label"
                      htmlFor="customControlValidation2"
                    >
                      True
                    </Form.Label>
                  </div>
                  <div className="custom-control custom-radio mb-3">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="customControlValidation3"
                      name="radio-stacked"
                      
                    />
                    <Form.Label
                      className="custom-control-label"
                      htmlFor="customControlValidation3"
                    >
                      False
                    </Form.Label>
                  </div>
                </div>
                <div className="mb-3">
                  <Singleselect1 />
                  <div className="invalid-feedback">
                    Example invalid custom select feedback
                  </div>
                </div>
                <div className="form-file mb-3">
                  <input
                    type="file"
                    className="form-file-input"
                    id="validatedCustomFile"
                    
                  />
                  <Form.Label
                    className="form-file-label"
                    htmlFor="validatedCustomFile"
                  >
                    Choose file...
                  </Form.Label>
                  <div className="invalid-feedback mt-4">
                    Example invalid custom file feedback
                  </div>
                </div>
                <div className="mb-3 mt-2">
                  <div className="input-group is-invalid formvalid">
                    <span
                      className="input-group-text"
                      id="validatedInputGroupPrepend"
                    >
                      @
                    </span>
                    <input
                      type="text"
                      className="form-control is-invalid "
                      aria-describedby="validatedInputGroupPrepend"
                      
                    />
                  </div>

                  <div className="invalid-feedback">
                    Example invalid input group feedback
                  </div>
                </div>
                <div className="">
                  <div className="input-group is-invalid">
                    <Form.Label
                      className="input-group-text mt-0"
                      htmlFor="validatedInputGroupSelect"
                    >
                      Options
                    </Form.Label>
                    <select
                      className="form-select form-control"
                      id="validatedInputGroupSelect"
                      
                    >
                      <option defaultValue="">Choose...</option>
                      <option defaultValue="1">One</option>
                      <option defaultValue="2">Two</option>
                      <option defaultValue="3">Three</option>
                    </select>
                  </div>
                  <div className="invalid-feedback">
                    Example invalid input group feedback
                  </div>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Tooltips</h3>
            </Card.Header>
            <Card.Body>
            <Formik validationSchema={schema} onSubmit={console.log} initialValues={{ firstName: 'Mark', lastName: 'Otto', username: '', city: '', state: '', zip: '', file: null, terms: false }}>
            {({ handleSubmit, handleChange, values, touched, errors }) => (

                <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationFormik101" className="position-relative">
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="text" name="firstName" value={values.firstName} onChange={handleChange} isValid={touched.firstName && !errors.firstName} />
                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationFormik102" className="position-relative">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type="text" name="lastName" value={values.lastName} onChange={handleChange} isValid={touched.lastName && !errors.lastName} />
                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationFormik103" className="position-relative">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" name="city" value={values.city} onChange={handleChange} isInvalid={!!errors.city} />
                            <Form.Control.Feedback type="invalid" tooltip>{errors.city}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationFormik104" className="position-relative ">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="State" required />
                            <Form.Control.Feedback type="invalid" tooltip> {errors.state}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationFormik105" className="position-relative">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control type="text" placeholder="Zip" name="zip" value={values.zip} onChange={handleChange} isInvalid={!!errors.zip} />
                            <Form.Control.Feedback type="invalid" tooltip>{errors.zip}</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Button type="submit">Submit form</Button>
                </Form>
            )}
        </Formik>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
