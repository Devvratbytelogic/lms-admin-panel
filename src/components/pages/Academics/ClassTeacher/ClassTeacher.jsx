import React from 'react'
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import ClassTeacherDataTable from '../../../../commondata/academics/class-teacher';


export default function ClassTeacher() {
    return (
        <>
            <Row>
                <Card>
                    <Card.Header className="card-header border-bottom-0">
                        <Row className='w-100'>
                            <Col md={6}>
                                <h3 className="card-title">Assign Class Teacher</h3>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md={12}>
                                <Row className="mb-2">
                                    <Form.Group as={Col} md="4" className='custom_col'>
                                        <Form.Label>Class <span className="required_icon">*</span></Form.Label>
                                        <Form.Control title="text" name="title" placeholder='Class Name' />
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" className='custom_col'>
                                        <Form.Label>Section<span className="required_icon">*</span></Form.Label>
                                        <Form.Control title="text" name="title" placeholder='Class Name' />
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" className='custom_col'>
                                        <Form.Label>Select Teacher<span className="required_icon">*</span></Form.Label>
                                        <Form.Control title="text" name="title" placeholder='Class Name' />
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group as={Col} md="12" className=' mt-4'>
                                        <Button type="submit" className="btn-dark ms-auto px-6">Assign Teacher</Button>
                                    </Form.Group>
                                </Row>
                            </Col>
                        </Row>
                        <Row className='mt-6'>
                            <ClassTeacherDataTable />
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
        </>
    )
}
