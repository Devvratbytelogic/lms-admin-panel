import React, { useState } from 'react';
import AddTeacherForm from './AddTeacherForm';
import AddPayrollForm from './AddPayrollForm';
import DocumentInfo from './DocumentInfo';
import { Button, Card, Col, Row } from 'react-bootstrap';

export default function AddTeacher() {
    const [activeForm, setActiveForm] = useState('basic');

    const renderForm = () => {
        switch (activeForm) {
            case 'basic':
                return <AddTeacherForm />;
            case 'payroll':
                return <AddPayrollForm />;
            case 'document':
                return <DocumentInfo />;
            default:
                return <AddTeacherForm />;
        }
    };

    return (
        <div className="container mx-auto p-4">
            <Row className="mb-6">
                <Col as={Col} md={6} className='d-flex justify-content-between'>
                    <Row>
                        <Col as={Col} xs={12} md={4} className='mb-3'>
                            <Button
                                onClick={() => setActiveForm('basic')}
                                variant={activeForm === 'basic' ? 'primary' : 'default'}
                                className='w-100'
                            >
                                Basic Info
                            </Button>
                        </Col>
                        <Col as={Col} xs={12} md={4} className='mb-3'>
                            <Button
                                onClick={() => setActiveForm('payroll')}
                                variant={activeForm === 'payroll' ? 'primary' : 'default'}
                            >
                                Payroll Details
                            </Button>
                        </Col>
                        <Col as={Col} xs={12} md={4} className='mb-3'>
                            <Button
                                onClick={() => setActiveForm('document')}
                                variant={activeForm === 'document' ? 'primary' : 'default'}
                            >
                                Document Info
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className="p-0">
                {renderForm()}
            </div>
        </div>
    );
};
