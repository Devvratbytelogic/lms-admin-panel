import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

export default function EditTeacher() {
    return (
        <>
            <Row className='mt-6'>
                <Col>
                    <Form>
                        <Row>
                            <Card>
                                <Card.Header className='justify-content-between p-0 border-bottom-0'>
                                    <Button className='rounded-0 mb-2 title-button'>Edit Teacher</Button>
                                    {/* <Button variant='' className='filter-button text-black py-0 me-1'><i className='fa fa-plus'>&nbsp; Bulk Upload</i></Button> */}
                                </Card.Header>

                                <Card.Body>
                                    <Row>
                                        <Col as={Col} xs={12} md={6}>
                                            <Form.Group>
                                                <Form.Label>First Name <span className='text-primary'>*</span></Form.Label>
                                                <Form.Control
                                                    name='first_name'
                                                    value={"Rohit"}
                                                    type='text'
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col as={Col} xs={12} md={6}>
                                            <Form.Group>
                                                <Form.Label>Last Name <span className='text-primary'>*</span></Form.Label>
                                                <Form.Control
                                                    name='last_name'
                                                    value={"Joshi"}
                                                    type='text'
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col as={Col} xs={12} md={6}>
                                            <Form.Group>
                                                <Form.Label>Email <span className='text-primary'>*</span></Form.Label>
                                                <Form.Control
                                                    name='email'
                                                    value={"joshi.rohit092003@gmail.com"}
                                                    type='email'
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col as={Col} xs={12} md={6}>
                                            <Form.Group>
                                                <Form.Label>Phone <span className='text-primary'>*</span></Form.Label>
                                                <Form.Control
                                                    name='phone'
                                                    value={"8279834994"}
                                                    type='text'
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col as={Col} xs={12} md={6}>
                                            <Form.Group>
                                                <Form.Label>Address <span className='text-primary'>*</span></Form.Label>
                                                <textarea
                                                    className='input-form rounded-3 w-100'
                                                    name='address'
                                                    value={"joshi.rohit092003@gmail.com"}
                                                    rows={5}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col as={Col} xs={12} md={6}>
                                            <Form.Group>
                                                <Form.Label>Place Of Birth <span className='text-primary'>*</span></Form.Label>
                                                <Form.Control
                                                    name='place_of_birth'
                                                    value={"Nainital, Uttarakhand"}
                                                    type='text'
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col as={Col} xs={12} md={6}>
                                            <Form.Group>
                                                <Form.Label>Date of Birth <span className='text-primary'>*</span></Form.Label>
                                                <Form.Control
                                                    name='date_of_birth'
                                                    value={"Nainital, Uttarakhand"}
                                                    type='date'
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col as={Col} xs={12} md={6}>
                                            <Form.Group>
                                                <Form.Label>Password <span className='text-primary'>*</span></Form.Label>
                                                <Form.Control
                                                    name='passsword'
                                                    value={"123456789"}
                                                    type='password'
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col as={Col} xs={12} md={6}>
                                            <Form.Group>
                                                <Form.Label>Asign Class Teacher <span className='text-primary'>*</span></Form.Label>
                                                <Form.Control
                                                    name='assign_class_teacher'
                                                    value={"4th class"}
                                                    type='text'
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Row>
                        <Row className='mt-4'>
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col as={Col} xs={12} md={6}>
                                            <Form.Group>
                                                <Form.Label>University <span className='text-primary'>*</span></Form.Label>
                                                <Form.Control
                                                    name='university'
                                                    value={"Rohit"}
                                                    type='text'
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col as={Col} xs={12} md={6}>
                                            <Form.Group>
                                                <Form.Label>Degree <span className='text-primary'>*</span></Form.Label>
                                                <Form.Control
                                                    name='degree'
                                                    value={"Joshi"}
                                                    type='text'
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col as={Col} xs={12} md={6}>
                                            <Form.Group>
                                                <Form.Label>Start & End Date <span className='text-primary'>*</span></Form.Label>
                                                <Row>
                                                    <Col as={Col} xs={12} md={6} className='mb-2'>
                                                        <Form.Control
                                                            name='start'
                                                            value={"Rohit"}
                                                            type='date'
                                                        />
                                                    </Col>
                                                    <Col as={Col} xs={12} md={6} className='mb-2'>
                                                        <Form.Control
                                                            name='start'
                                                            value={"Rohit"}
                                                            type='date'
                                                        />
                                                    </Col>
                                                </Row>
                                            </Form.Group>
                                        </Col>
                                        <Col as={Col} xs={12} md={6}>
                                            <Form.Group>
                                                <Form.Label>City <span className='text-primary'>*</span></Form.Label>
                                                <Form.Control
                                                    name='city'
                                                    value={"noida"}
                                                    type='text'
                                                />
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
            </Row >
        </>
    )
}