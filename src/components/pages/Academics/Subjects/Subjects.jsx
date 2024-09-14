import React from 'react'
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import SubjectDataTable from '../../../../commondata/academics/subject';


export default function Subjects() {
    return (
        <>
            <Row>
                <Card>
                    <Card.Header className="card-header border-bottom-0">
                        <Row className='w-100'>
                            <Col md={6}>
                                <h3 className="card-title">Add Subject</h3>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md={6}>
                                <Row className="mb-2">
                                    <Form.Group as={Col} md="6" className='custom_col'>
                                        <Form.Label>Name <span className="required_icon">*</span></Form.Label>
                                        <Form.Control title="text" name="title" placeholder='Class Name' />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" className='custom_col'>
                                        <Form.Label>Subject Code<span className="required_icon">*</span></Form.Label>
                                        <Form.Control title="text" name="title" placeholder='Class Name' />
                                    </Form.Group>
                                </Row>
                                <Row className="mt-4">
                                    <Form.Group as={Col} md="2" className='custom_col'>
                                        <Form.Check
                                            type="radio"
                                            id="type1"
                                            label="Theory"
                                            name="type"
                                            value="type1"
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} md="2" className='custom_col'>
                                        <Form.Check
                                            type="radio"
                                            id="type2"
                                            label="Practical"
                                            name="type"
                                            value="type2"
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" className=' mt-4'>
                                        <Button type="submit" className="btn-dark ms-auto px-6">Save Subject</Button>
                                    </Form.Group>
                                </Row>
                            </Col>
                        </Row>
                        <div className='mt-6'>
                            <SubjectDataTable />
                        </div>
                    </Card.Body>
                </Card>
            </Row>
        </>
    )
}
