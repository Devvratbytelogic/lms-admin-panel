import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import profile_circle from "../../../src/assets/images/pngs/profile_circle.png";

export default function TeacherProfileMain() {
    return (
        <>
            <Card className='px-3 py-6'>
                <Row>
                    <Col xs={12} md={6}>
                        <Row>
                            <Col md={12}>
                                <Card className='bg-secondry p-3'>
                                    <Row>
                                        <Col md={4} className='d-grid align-items-center'>
                                            <img src={profile_circle} alt="Profile" />
                                            <p className='text-primary text-size'>Class Teacher (4th Class)</p>
                                        </Col>
                                        <Col md={8}>
                                            <Row>
                                                <h1 className='text-center mb-0'>Gaurav Sharma</h1>
                                                <p className='text-center text-dark'>History Teacher</p>
                                            </Row>
                                            <Row>
                                                <Col xs={12} xl={4}>
                                                    <p><i className='fa fa-circle'>&nbsp;918279834586</i></p>
                                                </Col>
                                                <Col xs={12} xl={2}>
                                                    <p><i className='fa fa-circle'>&nbsp;Delhi</i></p>
                                                </Col>
                                                <Col xs={12} xl={4}>
                                                    <p><i className='fa fa-circle'>&nbsp;gaurav@gmail.com</i></p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col md={12} className='mt-5'>
                                <Card className='bg-secondry p-3'>
                                    <Row>
                                        <h2 className='text-dark text-size fs-4'>About</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </Row>
                                </Card>
                            </Col>
                            <Col md={12} className='mt-5'>
                                <Card className='bg-secondry p-3'>
                                    <Row>
                                        <h2 className='text-dark text-size fs-4'>Education</h2>
                                    </Row>
                                    <Row>
                                        <ul>
                                            <li className='d-flex justify-content-between mb-3'>
                                                <span>History Major, University Akademi Histori</span>
                                                <span>2013-2017</span>
                                            </li>
                                            <li className='d-flex justify-content-between mb-3'>
                                                <span>History Major, University Akademi Histori</span>
                                                <span>2013-2017</span>
                                            </li>
                                        </ul>
                                    </Row>
                                </Card>
                            </Col>
                            <Col md={12} className='mt-5'>
                                <Card className='bg-secondry p-3'>
                                    <Row>
                                        <h2 className='text-dark text-size fs-4'>Feedback</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores praesentium accusantium adipisci asperiores labore eveniet ab assumenda dicta ea porro, itaque sint maxime iste in alias tempore placeat pariatur.</p>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        <Row className='px-3'>
                            <Card className='bg-secondry p-3'>
                                <h2 className='text-center'>Schedule Classes</h2>
                                <p className='text-center text-dark'>Thursday, 10th April, 2021</p>
                            </Card>
                        </Row>
                        <Row>
                            <Col xs={12} lg={6}>
                                <Card className='bg-secondry p-3'>
                                    <h3 className='mb-0'>World History</h3>
                                    <p className='text-black '>Class VIB</p>
                                    <Row className='mt-3'>
                                        <span className='text-center'><i className='fa fa-calendar text-danger'></i> &nbsp;March 20, 2021</span>
                                        <span className='text-center'><i className='fa fa-clock-o text-warning'></i> &nbsp;March 20, 2021</span>
                                    </Row>
                                </Card>
                            </Col>
                            <Col xs={12} lg={6}>
                                <Card className='bg-secondry p-3'>
                                    <h3 className='mb-0'>World History</h3>
                                    <p className='text-black'>Class VIB</p>
                                    <Row className='mt-3'>
                                        <span className='text-center'><i className='fa fa-calendar text-danger'></i> &nbsp;March 20, 2021</span>
                                        <span className='text-center'><i className='fa fa-clock-o text-warning'></i> &nbsp;March 20, 2021</span>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} lg={6}>
                                <Card className='bg-secondry p-3'>
                                    <h3 className='mb-0'>World History</h3>
                                    <p className='text-black'>Class VIB</p>
                                    <Row className='mt-3'>
                                        <span className='text-center'><i className='fa fa-calendar text-danger'></i> &nbsp;March 20, 2021</span>
                                        <span className='text-center'><i className='fa fa-clock-o text-warning'></i> &nbsp;March 20, 2021</span>
                                    </Row>
                                </Card>
                            </Col>
                            <Col xs={12} lg={6}>
                                <Card className='bg-secondry p-3'>
                                    <h3 className='mb-0'>World History</h3>
                                    <p className='text-black'>Class VIB</p>
                                    <Row className='mt-3'>
                                        <span className='text-center'><i className='fa fa-calendar text-danger'></i> &nbsp;March 20, 2021</span>
                                        <span className='text-center'><i className='fa fa-clock-o text-warning'></i> &nbsp;March 20, 2021</span>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </>
    );
}
