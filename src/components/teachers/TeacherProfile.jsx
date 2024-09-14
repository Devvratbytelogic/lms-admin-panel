import React, { useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import TeacherProfileMain from './TeacherProfileMain';
import DocumentInfo from './add-teacher/DocumentInfo';
import AddPayrollForm from './add-teacher/AddPayrollForm';
import EditTeacher from './add-teacher/EditTeacher';
import ChangePassword from './add-teacher/ChangePassword';

export default function TeacherProfile() {
    const [activeForm, setActiveForm] = useState('basic');

    const renderForm = () => {
        switch (activeForm) {
            case 'Profile':
                return <TeacherProfileMain />;
            case 'payroll':
                return <EditTeacher />;
            case 'document':
                return <ChangePassword />;
            default:
                return <TeacherProfileMain />;
        }
    };

    return (
        <>
            <div className="container mx-auto p-4">
                <Row className="mb-6">
                    <Col as={Col} md={6} className='d-flex justify-content-between'>
                        <Row>
                            <Col as={Col} xs={12} md={4} className='mb-3'>
                                <Button
                                    onClick={() => setActiveForm('Profile')}
                                    variant={activeForm === 'basic' ? 'primary' : 'default'}
                                    className='w-100'
                                >
                                    Profile
                                </Button>
                            </Col>
                            <Col as={Col} xs={12} md={4} className='mb-3'>
                                <Button
                                    onClick={() => setActiveForm('payroll')}
                                    variant={activeForm === 'payroll' ? 'primary' : 'default'}
                                    className='w-100'
                                >
                                    Edit
                                </Button>
                            </Col>
                            <Col as={Col} xs={12} md={4} className='mb-3'>
                                <Button
                                    onClick={() => setActiveForm('document')}
                                    variant={activeForm === 'document' ? 'primary' : 'default'}
                                >
                                    Change Password
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className="p-0">
                    {renderForm()}
                </div>
            </div>
        </>
    )
}