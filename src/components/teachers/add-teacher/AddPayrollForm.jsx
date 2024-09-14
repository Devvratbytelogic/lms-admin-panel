import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

export default function AddPayrollForm() {
    return (
        <>
            <Row className='mt-6'>
                <Col>
                    <Form>
                        <Row>
                            <Card>
                                <Card.Header className='justify-content-between p-0 border-bottom-0'>
                                    <Button className='rounded-0 title-button'>Add New Teacher</Button>
                                    {/* <Button variant='' className='filter-button'><i className='fa fa-plus'>&nbsp; Bulf Upload</i></Button> */}
                                </Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col as={Col} xs={12} md={3}>
                                            <Form.Group>
                                                <Form.Label>EPF No <span className='text-primary'>*</span></Form.Label>
                                                <Form.Control
                                                    name='first_name'
                                                    value={"Rohit"}
                                                    type='text'
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col as={Col} xs={12} md={3}>
                                            <Form.Group>
                                                <Form.Label>Basic Salary <span className='text-primary'>*</span></Form.Label>
                                                <Form.Control
                                                    name='last_name'
                                                    value={"Joshi"}
                                                    type='text'
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col as={Col} xs={12} md={3}>
                                            <Form.Group>
                                                <Form.Label>Contract Type  <span className='text-primary'>*</span></Form.Label>
                                                <Form.Select
                                                    name='last_name'
                                                    value={"Joshi"}
                                                    className='rounded-3 border-primary'
                                                >
                                                    <option value="one">one</option>
                                                    <option value="two">two</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col as={Col} xs={12} md={3}>
                                            <Form.Group>
                                                <Form.Label>Bank Account No <span className='text-primary'>*</span></Form.Label>
                                                <Form.Control
                                                    name='first_name'
                                                    value={"Rohit"}
                                                    type='text'
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col as={Col} xs={12} md={3}>
                                            <Form.Group>
                                                <Form.Label>Account No <span className='text-primary'>*</span></Form.Label>
                                                <Form.Control
                                                    name='first_name'
                                                    value={"Rohit"}
                                                    type='text'
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col as={Col} xs={12} md={3}>
                                            <Form.Group>
                                                <Form.Label>Bank Name <span className='text-primary'>*</span></Form.Label>
                                                <Form.Control
                                                    name='last_name'
                                                    value={"Joshi"}
                                                    type='text'
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col as={Col} xs={12} md={3}>
                                            <Form.Group>
                                                <Form.Label>Branch Name <span className='text-primary'>*</span></Form.Label>
                                                <Form.Select
                                                    name='last_name'
                                                    value={"Joshi"}
                                                    // type='text'
                                                    className='rounded-3 border-primary'

                                                >
                                                    <option value="one">one</option>
                                                    <option value="two">two</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Row>
                        <Row className='gap-3 justify-content-end my-3'>
                            <Button className='w-auto transparent-btn'>Cancel</Button>
                            <Button className='w-auto'>Submit</Button>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </>
    )
}
