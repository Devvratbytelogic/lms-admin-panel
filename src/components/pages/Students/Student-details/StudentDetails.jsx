import React from 'react'
import OverallAttendance from './OverallAttendance';
import AcademicSubjects from './AcademicSubjects';
import BehavioralCharts from './BehavioralCharts';
import ExtraCurricularSubjects from './ExtraCurricularSubjects';
import PaymentHistory from './PaymentHistory';
import { Card, Row, Col } from 'react-bootstrap';
import { Link, useLocation, useParams } from 'react-router-dom';
import { generateEditStudentDetailsPage, generateStudentDetailsPage } from '../../../../routes/routes';


export default function StudentDetails() {
    const location = useLocation();
    const pathName = location.state;
    const { id } = useParams()

    return (
        <>
            <div className='my-5 align-items-center student_tab'>
                <h3 className={`studen_details_tab ${pathName?.page === 'profile' ? 'active' : ''}`}><Link to={generateStudentDetailsPage(id)} state={{ page: 'profile' }}>Profile</Link> </h3>
                <h3 className={`studen_details_tab  ${pathName?.page === 'edit_profile' ? 'active' : ''}`} style={{ textAlign: 'center' }}> <Link to={generateEditStudentDetailsPage(id)} state={{ page: 'edit_profile' }}>Edit </Link></h3>
                <h3 className={`studen_details_tab ${pathName?.page === 'change_profile_password' ? 'active' : ''}`} state={{ page: 'change_profile_password' }}><Link to="#">Change Password </Link></h3>
                {/* <h3 className={`studen_details_tab ${pathName?.page === 'change_profile_password' ? 'active' : ''}`} state={{ page: 'change_profile_password' }}><Link to={generateEditStudentDetailsPage(id)}>Change Password </Link></h3> */}
            </div>

            <Card className='mt-0 pt-0 position-relative'>
                <div className='add_class_btn edit_student_btn px-3' onClick={() => dispatch(openModal({ componentName: 'AddClass', data: 'check' }))}>
                    <i className='icon icon-note'></i>
                    <button>Edit</button>
                </div>
                <Card.Body className='pt-6'>
                    <Row>
                        <Col md={6}>
                            <div>
                                <h4 className='card-title'>Profile Details</h4>
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
                            <AcademicSubjects />
                            <ExtraCurricularSubjects />
                        </Col>
                        <Col md={6}>
                            <OverallAttendance />
                            <BehavioralCharts />
                            <PaymentHistory />
                        </Col>
                    </Row>
                    {/* <Row className="mt-4">
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
                    </Row> */}
                </Card.Body>
            </Card>
        </>
    )
}
