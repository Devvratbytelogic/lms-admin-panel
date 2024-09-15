import React, { useState } from 'react'
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { openModal } from '../../../redux/slice/allModalSlice';

export default function Academics() {
    const dispatch = useDispatch();
    return (
        <>
            {/* <Row>
                <Col md={12}> */}
            <Card>
                <Card.Header className="card-header custom_card_header border-bottom-0">
                    <Row className='w-100'>
                        <Col md={6}>
                            <h3 className="card-title">Classess List</h3>
                        </Col>
                        <Col md={6} className='text-end'>
                            <div className='add_class_btn' onClick={() => dispatch(openModal({ componentName: 'AddClass', data: 'check' }))}>
                                <i className='fa fa-plus'></i>
                                <button>Add Class</button>
                            </div>
                        </Col>
                    </Row>

                </Card.Header>
                <Card.Body className='custom_card_body acadmics_card_body'>
                    <Row>
                        <Col xl={4} lg={6} md={6} className='acadmics_column'>
                            <Row className='class_list_wrapper '>
                                <Col><h3 className='class_number'>Class 1</h3></Col>
                                <Col className='text-end h4 icon_color'><i className="fa fa-edit"></i></Col>
                                <div className='d-flex flex-wrap px-0 gap-2 mt-4'>
                                    <p className='subject'>Math</p>
                                    <p className='subject'>Hindi</p>
                                    <p className='subject'>English</p>
                                    <p className='subject'>Music</p>
                                    <p className='subject'>Sports</p>
                                    <p className='subject'>Social Studies</p>
                                </div>
                            </Row>
                            <Row className='class_list_wrapper '>
                                <Col><h3 className='class_number'>Class 4</h3></Col>
                                <Col className='text-end h4 icon_color'><i className="fa fa-edit"></i></Col>
                                <div className='d-flex flex-wrap px-0 gap-2 mt-4'>
                                    <p className='subject'>Math</p>
                                    <p className='subject'>Hindi</p>
                                    <p className='subject'>English</p>
                                    <p className='subject'>Music</p>
                                    <p className='subject'>Sports</p>
                                    <p className='subject'>Social Studies</p>
                                </div>
                            </Row>
                            <Row className='class_list_wrapper '>
                                <Col><h3 className='class_number'>Class 7</h3></Col>
                                <Col className='text-end h4 icon_color'><i className="fa fa-edit"></i></Col>
                                <div className='d-flex flex-wrap px-0 gap-2 mt-4'>
                                    <p className='subject'>Math</p>
                                    <p className='subject'>Hindi</p>
                                    <p className='subject'>English</p>
                                    <p className='subject'>Music</p>
                                    <p className='subject'>Sports</p>
                                    <p className='subject'>Social Studies</p>
                                </div>
                            </Row>
                        </Col>
                        <Col xl={4} lg={6} md={6} className='acadmics_column'>
                            <Row className='class_list_wrapper '>
                                <Col><h3 className='class_number'>Class 2</h3></Col>
                                <Col className='text-end h4 icon_color'><i className="fa fa-edit"></i></Col>
                                <div className='d-flex flex-wrap px-0 gap-2 mt-4'>
                                    <p className='subject'>Math</p>
                                    <p className='subject'>Hindi</p>
                                    <p className='subject'>English</p>
                                    <p className='subject'>Music</p>
                                    <p className='subject'>Sports</p>
                                    <p className='subject'>Social Studies</p>
                                </div>
                            </Row>
                            <Row className='class_list_wrapper '>
                                <Col><h3 className='class_number'>Class 5</h3></Col>
                                <Col className='text-end h4 icon_color'><i className="fa fa-edit"></i></Col>
                                <div className='d-flex flex-wrap px-0 gap-2 mt-4'>
                                    <p className='subject'>Math</p>
                                    <p className='subject'>Hindi</p>
                                    <p className='subject'>English</p>
                                    <p className='subject'>Music</p>
                                    <p className='subject'>Sports</p>
                                    <p className='subject'>Social Studies</p>
                                </div>
                            </Row>
                            <Row className='class_list_wrapper '>
                                <Col><h3 className='class_number'>Class 8</h3></Col>
                                <Col className='text-end h4 icon_color'><i className="fa fa-edit"></i></Col>
                                <div className='d-flex flex-wrap px-0 gap-2 mt-4'>
                                    <p className='subject'>Math</p>
                                    <p className='subject'>Hindi</p>
                                    <p className='subject'>English</p>
                                    <p className='subject'>Music</p>
                                    <p className='subject'>Sports</p>
                                    <p className='subject'>Social Studies</p>
                                </div>
                            </Row>
                        </Col>
                        <Col xl={4} lg={6} md={6} className='acadmics_column'>
                            <Row className='class_list_wrapper '>
                                <Col><h3 className='class_number'>Class 3</h3></Col>
                                <Col className='text-end h4 icon_color'><i className="fa fa-edit"></i></Col>
                                <div className='d-flex flex-wrap px-0 gap-2 mt-4'>
                                    <p className='subject'>Math</p>
                                    <p className='subject'>Hindi</p>
                                    <p className='subject'>English</p>
                                    <p className='subject'>Music</p>
                                    <p className='subject'>Sports</p>
                                    <p className='subject'>Social Studies</p>
                                </div>
                            </Row>
                            <Row className='class_list_wrapper '>
                                <Col><h3 className='class_number'>Class 6</h3></Col>
                                <Col className='text-end h4 icon_color'><i className="fa fa-edit"></i></Col>
                                <div className='d-flex flex-wrap px-0 gap-2 mt-4'>
                                    <p className='subject'>Math</p>
                                    <p className='subject'>Hindi</p>
                                    <p className='subject'>English</p>
                                    <p className='subject'>Music</p>
                                    <p className='subject'>Sports</p>
                                    <p className='subject'>Social Studies</p>
                                </div>
                            </Row>
                            <Row className='class_list_wrapper '>
                                <Col><h3 className='class_number'>Class 9</h3></Col>
                                <Col className='text-end h4 icon_color'><i className="fa fa-edit"></i></Col>
                                <div className='d-flex flex-wrap px-0 gap-2 mt-4'>
                                    <p className='subject'>Math</p>
                                    <p className='subject'>Hindi</p>
                                    <p className='subject'>English</p>
                                    <p className='subject'>Music</p>
                                    <p className='subject'>Sports</p>
                                    <p className='subject'>Social Studies</p>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            {/* </Col>
            </Row> */}
        </>
    )
}
