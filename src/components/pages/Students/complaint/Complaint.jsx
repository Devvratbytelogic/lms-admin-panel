import React from 'react'
import { Row, Col, Card, Form, Button } from "react-bootstrap";


export default function Complaint() {
    return (
        <>
            <Card className='mt-0 pt-0'>
                <Card.Header className="card-header border-bottom-0">
                    <Row className='w-100'>
                        <Col md={6}>
                            <h3 className="card-title">Complaints</h3>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className='pt-0 bordered_data_table'>
                    <Form>
                        <Row>
                            <Col lg={4} xl={2} md={4}>
                                <Form.Group className="mb-3" controlId="firstName">
                                    <Form.Label>Class</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>

                            <Col lg={4} xl={2} md={4}>
                                <Form.Group className="mb-3" controlId="lastName">
                                    <Form.Label>Section</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col lg={4} xl={2} md={4}>
                                <Form.Group className="mb-3" controlId="lastName">
                                    <Form.Label>Student Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col lg={4} xl={3} md={4}>
                                <Form.Group className="mb-3" controlId="lastName">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col lg={4} xl={3} md={4}>
                                <Form.Group className="mb-3" controlId="lastName">
                                    <Form.Label>Complaint Type</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col lg={12}>
                                <Form.Group className="mb-3" controlId="lastName">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows={5} />
                                </Form.Group>
                            </Col>
                            <Form.Group as={Col} md="12" className='custom_col mt-4 text-end'>
                                <Button type="submit" className="btn-primary ms-auto px-6 rounded-lg">Submit</Button>
                            </Form.Group>
                        </Row>
                    </Form>
                    <hr className="custom_hr" />
                    <div className='mt-6'>
                        <div className="search_bar">
                            <Col as={Col} lg={7} md={12} sm={12} xs={12}>
                                <h3 className="card-title">Complaint’s List</h3>
                            </Col>
                            <Col as={Col} lg={5} md={12} sm={12} xs={12}>
                                <div className='search_bar_wrapper'>
                                    <input
                                        type="text"
                                        placeholder="Search by ID, Name, or Subject"
                                        className="form-control search_input"
                                    // value={filterText}
                                    // onChange={(e) => setFilterText(e.target.value)}
                                    />
                                    <div className='search_icon'><i className='fa fa-search'></i></div>
                                    <Button type="button" className="btn btn-icon search_btn"> <i className="fa fa-sliders text-black"></i> Filters</Button>
                                </div>
                            </Col>
                        </div>
                        <div className="mt-4">
                            <Row className="justify-content-center">
                                {[1, 2, 3].map((item, index) => (
                                    <div key={index} className="col-lg-4">
                                        <div className="card text-white bg-danger mb-3">
                                            <div className="card-header d-flex justify-content-between">
                                                <span>Student's name</span>
                                                <span>Type</span>
                                            </div>
                                            <div className="card-body">
                                                <p className="card-text">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed placerat mi.
                                                    Pellentesque nulla mauris. Vivamus sed placerat mi. Pellentesque nulla mauris.
                                                </p>
                                            </div>
                                            <div className="card-footer d-flex justify-content-between">
                                                <span>By: Person Name</span>
                                                <span>Date</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Row>
                        </div>

                    </div>
                </Card.Body>
            </Card>
        </>
    )
}
