import React from 'react'
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import ClassTeacherDataTable from '../../../../commondata/academics/class-teacher';


export default function ClassTeacher() {
    return (
        <>
            {/* <Row> */}
            <Card>
                <Card.Header className="card-header border-bottom-0 pt-6">
                    <Row className='w-100'>
                        <Col md={6}>
                            <h3 className="card-title">Assign Class Teacher</h3>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Row className="mb-2">
                        <Form.Group as={Col} md="4">
                            <Form.Label>Class <span className="required_icon">*</span></Form.Label>
                            <Form.Control title="text" name="title" placeholder='Class Name' />
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Section<span className="required_icon">*</span></Form.Label>
                            <Form.Control title="text" name="title" placeholder='Class Name' />
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Select Teacher<span className="required_icon">*</span></Form.Label>
                            <Form.Control title="text" name="title" placeholder='Class Name' />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} md="12" className=' mt-4'>
                            <Button type="submit" className="btn-dark ms-auto px-6">Assign Teacher</Button>
                        </Form.Group>
                    </Row>
                    {/* <Row>
                        <Col md={12}> */}
                    {/* </Col>
                    </Row> */}
                    <div className='mt-6'>
                        <ClassTeacherDataTable />
                    </div>
                </Card.Body>
            </Card>
            {/* </Row> */}
        </>
    )
}
