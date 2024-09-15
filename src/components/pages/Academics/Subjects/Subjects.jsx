import React from 'react'
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import SubjectDataTable from '../../../../commondata/academics/subject';


export default function Subjects() {
    return (
        <>
            <Card>
                <Card.Header className="card-header pt-6 border-bottom-0">
                    <Row className='w-100'>
                        <Col md={6}>
                            <h3 className="card-title">Add Subject</h3>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className='pt-0'>
                    <div className='d-flex flex-wrap'>
                        <Form.Group className='custom_col col-12 col-md-3'>
                            <Form.Label>Name <span className="required_icon">*</span></Form.Label>
                            <Form.Control title="text" name="title" />
                        </Form.Group>
                        <Form.Group className='custom_col col-12 col-md-3'>
                            <Form.Label>Subject Code<span className="required_icon">*</span></Form.Label>
                            <Form.Control title="text" name="title" />
                        </Form.Group>
                    </div>
                    <div className="mt-4 d-flex gap-2 align-items-center">
                        <Form.Group >
                            <Form.Check
                                type="radio"
                                id="type1"
                                label="Theory"
                                name="type"
                                value="type1"
                            />
                        </Form.Group>
                        <Form.Group >
                            <Form.Check
                                type="radio"
                                id="type2"
                                label="Practical"
                                name="type"
                                value="type2"
                            />
                        </Form.Group>
                    </div>
                    <Row>
                        <Form.Group as={Col} md="12" className=' mt-4'>
                            <Button type="submit" className="btn-dark ms-auto px-6">Save Subject</Button>
                        </Form.Group>
                    </Row>
                    {/* </Col>*/}
                    <div className='mt-6'>
                        <SubjectDataTable />
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}
