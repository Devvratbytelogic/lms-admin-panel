import React from 'react'
import OverallAttendance from './OverallAttendance';
import AcademicSubjects from './AcademicSubjects';
import BehavioralCharts from './BehavioralCharts';
import ExtraCurricularSubjects from './ExtraCurricularSubjects';
import PaymentHistory from './PaymentHistory';
import { Card, Row, Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { generateEditStudentDetailsPage } from '../../../../routes/routes';


export default function StudentDetails() {
    const location = useLocation();
    const pathName = location.state;
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
    console.log('status', id);

    return (
        <>
            <Row className='my-5 align-items-center'>
                <Col md={1}>
                    <h3 className={`studen_details_tab ${pathName.page === 'profile' ? 'active' : ''}`}>Profile </h3>
                </Col>
                <Col md={1}>
                    <h3 className={`studen_details_tab  ${pathName.page === 'edit_profile' ? 'active' : ''}`} style={{ textAlign: 'center' }}> <Link to={generateEditStudentDetailsPage(id)}>Edit </Link></h3>
                </Col>
                <Col md={3}>
                    <h3 className={`studen_details_tab ${pathName.page === 'change_profile_password' ? 'active' : ''}`}><Link to={generateEditStudentDetailsPage(id)}>Change Password </Link></h3>
                </Col>
            </Row>
            <Row>
                <Card className='mt-0 pt-0'>
                    <Card.Body className='pt-5'>
                        <Row>
                            <Col md={6}>
                                <div>
                                    <h4 className='fw-semibold'>Profile Details</h4>
                                    <Card className="profile-card">
                                        <Card.Body>
                                            <div className="d-flex align-items-center">
                                                <div className="me-3 img_wrapper" >
                                                    <img src='/placeholder.png' alt='' className='w-100 h-100 object-fit-contain' />
                                                </div>
                                                <div className='d-grid gap-4 text-center '>
                                                    <div>
                                                        <h4 className='mb-0'>Kartik Sharma</h4>
                                                        <p className="class_text">Class 9 th</p>
                                                    </div>
                                                    <small className='profile_card_p'><i class="fa fa-circle" aria-hidden="true"></i>&nbsp;
                                                        +91 xxxxxxxxxx &nbsp;<i class="fa fa-circle" aria-hidden="true"></i>&nbsp;
                                                        Delhi &nbsp;<i class="fa fa-circle" aria-hidden="true"></i>&nbsp;
                                                        kartik@gmail.com</small>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <Card className="education-card mt-3">
                                        <Card.Body>
                                            <h5>Education</h5>
                                            <hr />
                                            <ul>
                                                <div className='d-flex justify-content-between gap-4'><li>History Major, University Academy Historia </li> <span>(2015-2017)</span></div>
                                                <div className='d-flex justify-content-between gap-4'><li>Master of History, University Academy Historia </li> <span>(2017-2020)</span></div>
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col md={6}>
                                <OverallAttendance />
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col md={6}>
                                <AcademicSubjects />
                            </Col>
                            <Col md={6}>
                                <BehavioralCharts />
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col md={6}>
                                <ExtraCurricularSubjects />
                            </Col>
                            <Col md={6}>
                                <PaymentHistory />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
        </>
    )
}
