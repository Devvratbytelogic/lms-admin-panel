import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Dropimg, Dropimg2 } from '../../../../../commondata/form';
import 'filepond/dist/filepond.min.css';
import { Link, useLocation, useParams } from 'react-router-dom';
import { generateEditStudentDetailsPage, generateStudentDetailsPage } from '../../../../../routes/routes';

const AddStudent = () => {
    const location = useLocation();
    const pathName = location.state;
    const { id } = useParams()
    return (
        <div className='edit_student_form'>
            {/* <div className='my-5 align-items-center student_tab'>
                <h3 className={`studen_details_tab ${pathName?.page === 'profile' ? 'active' : ''}`}><Link to={generateStudentDetailsPage(id)} state={{ page: 'profile' }}>Profile</Link> </h3>
                <h3 className={`studen_details_tab  ${pathName?.page === 'edit_profile' ? 'active' : ''}`} style={{ textAlign: 'center' }}> <Link to={generateEditStudentDetailsPage(id)} state={{ page: 'edit_profile' }}>Edit </Link></h3>
                <h3 className={`studen_details_tab ${pathName?.page === 'change_profile_password' ? 'active' : ''}`} state={{ page: 'change_profile_password' }}><Link to={`#`}>Change Password </Link></h3>
            </div> */}
            <Card>
                <Card.Header className="card-header border-bottom-0 position-relative">
                    <div className='sticky_student_btn'>
                        <p>Add New Student</p>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="firstName">
                                    <Form.Label>First Name <span className="required_icon">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Enter first name" />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="lastName">
                                    <Form.Label>Last Name <span className="required_icon">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Enter last name" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email <span className="required_icon">*</span></Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="phone">
                                    <Form.Label>Phone <span className="required_icon">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Enter phone number" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="address">
                                    <Form.Label>Address <span className="required_icon">*</span></Form.Label>
                                    <Form.Control as="textarea" rows={6} placeholder="Enter address" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Label>Photo <span className="required_icon">*</span></Form.Label>
                                <Dropimg type="file" className="dropify" />
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="dob">
                                    <Form.Label>Date of Birth <span className="required_icon">*</span></Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="pob">
                                    <Form.Label>Place of Birth <span className="required_icon">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Enter place of birth" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password <span className="required_icon">*</span></Form.Label>
                                    <Form.Control type="password" placeholder="Enter password" />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="photo">
                                    <Form.Label>Upload Documents <span className='optional'>( Optional )</span></Form.Label>
                                    <Dropimg2 type="file" className="dropify" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>

            {/* parent details */}
            <Card className='mt-7'>
                <Card.Header className="card-header border-bottom-0 position-relative">
                    <div className='sticky_student_btn'>
                        <p>Parent Details</p>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="firstName">
                                    <Form.Label>Father’s Name <span className="required_icon">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Father’s Name" />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="lastName">
                                    <Form.Label>Mother’s Nmae <span className="required_icon">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Mother’s Nmae" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email <span className="required_icon">*</span></Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email <span className="required_icon">*</span></Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Father’s occupation</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Label>Phone <span className="required_icon">*</span></Form.Label>
                                <Form.Control type="text" placeholder="Phone" />
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="address">
                                    <Form.Label>Address <span className="required_icon">*</span></Form.Label>
                                    <Form.Control as="textarea" rows={6} placeholder="Enter address" />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="pob">
                                    <Form.Label>Mother’s Occupation</Form.Label>
                                    <Form.Control type="text" placeholder="Phone" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="pob">
                                    <Form.Label>Payment <span className="required_icon">*</span></Form.Label>
                                    <div className="mt-4 d-flex gap-2 align-items-center">
                                        <Form.Group >
                                            <Form.Check
                                                type="radio"
                                                id="type1"
                                                label="Cash"
                                                name="type"
                                                value="type1"
                                            />
                                        </Form.Group>
                                        <Form.Group >
                                            <Form.Check
                                                type="radio"
                                                id="type2"
                                                label="Debit"
                                                name="type"
                                                value="type2"
                                            />
                                        </Form.Group>
                                    </div>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
            <Row className=''>
                <Form.Group as={Col} md="12" className='text-end edit_student_submit_btn mt-2'>
                    <Button type="submit" className="btn-outline ms-auto px-6 me-4">Cancel</Button>
                    <Button type="submit" className="btn-primay  ms-auto px-6">Submit</Button>
                </Form.Group>
            </Row>
        </div>
    );
};

export default AddStudent;