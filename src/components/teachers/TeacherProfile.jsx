import React, { useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import TeacherProfileMain from './TeacherProfileMain';
import DocumentInfo from './add-teacher/DocumentInfo';
import AddPayrollForm from './add-teacher/AddPayrollForm';

export default function TeacherProfile() {
    const [activeForm, setActiveForm] = useState('basic');

    const renderForm = () => {
        switch (activeForm) {
            case 'basic':
                return <TeacherProfileMain />;
            case 'payroll':
                return <AddPayrollForm />;
            case 'document':
                return <DocumentInfo />;
            default:
                return <TeacherProfileMain />;
        }
    };

    return (
        <>
            <div className="container mx-auto p-4">
                <Row className="mb-6">
                    <Col as={Col} md={4} className='d-flex justify-content-betweenj'>
                        <Button
                            onClick={() => setActiveForm('basic')}
                            variant={activeForm === 'basic' ? 'primary' : 'default'}
                        >
                            Basic Info
                        </Button>
                        <Button

                            onClick={() => setActiveForm('payroll')}
                            variant={activeForm === 'payroll' ? 'primary' : 'default'}
                        >
                            Payroll Details
                        </Button>
                        <Button

                            onClick={() => setActiveForm('document')}
                            variant={activeForm === 'document' ? 'primary' : 'default'}
                        >
                            Document Info
                        </Button>
                    </Col>
                </Row>
                <div className="p-0">
                    {renderForm()}
                </div>
            </div>
        </>
    )
}