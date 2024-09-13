import React from 'react'
import { Button, Form, Row, Col, Card } from "react-bootstrap";

export default function Section() {
    return (
        <>
            <Row>
                <Col md={12}>
                    <Card>
                        {/* <Card.Header className="card-header border-bottom-0">
                            <Row className='w-100'>
                                <Col md={6}>
                                    <h3 className="card-title">Classess List</h3>
                                </Col>
                                <Col md={6} className='text-end'>
                                    <div className='add_class_btn'>
                                        <i className='fa fa-plus'></i>
                                        <button>Add Class</button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Header> */}
                        <Card.Body>
                            <Row >
                                <Col lg={4} md={6}>
                                    <Row className="pe-6">
                                        <h4 className='ps-1 mb-4'>Add Section</h4>
                                        <Form.Group as={Col} md="12" className=''>
                                            <Form.Label>Name <span className="required_icon">*</span></Form.Label>
                                            <Form.Control title="text" name="title" />
                                        </Form.Group>
                                        <Form.Group as={Col} md="12" className=' mt-4 text-end'>
                                            <Button type="submit" className="btn-primary ms-auto px-6">Save</Button>
                                        </Form.Group>
                                    </Row>
                                </Col>
                                <Col lg={8} md={6}>
                                    <Row className="mt-5">
                                        <h4 className='ps-1 mb-4'>Section List</h4>
                                        <div className='class_table px-0'>
                                            <div className='class_head'>
                                                <p>Section</p>
                                                <p>Action</p>
                                            </div>
                                            <div className='d-flex class_table_row justify-content-around py-3'>
                                                <p>A</p>
                                                <p className='text-red h5'><i className='fa fa-trash'></i></p>
                                            </div>
                                            <div className='d-flex class_table_row justify-content-around py-3'>
                                                <p>B</p>
                                                <p className='text-red h5'><i className='fa fa-trash'></i></p>
                                            </div>
                                            <div className='d-flex class_table_row justify-content-around py-3'>
                                                <p>C</p>
                                                <p className='text-red h5'><i className='fa fa-trash'></i></p>
                                            </div>
                                            <div className='d-flex class_table_row justify-content-around py-3'>
                                                <p>D</p>
                                                <p className='text-red h5'><i className='fa fa-trash'></i></p>
                                            </div>
                                            <div className='d-flex class_table_row justify-content-around py-3'>
                                                <p>E</p>
                                                <p className='text-red h5'><i className='fa fa-trash'></i></p>
                                            </div>
                                        </div>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
