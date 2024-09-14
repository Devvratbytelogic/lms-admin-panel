import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

export default function ChangePassword() {
    return (
        <>
            <Row className='mt-6'>
                <Col>
                    <Form>
                        <Row>
                            <Card>
                                <Card.Header className='justify-content-between p-0 border-bottom-0'>
                                    <Button className='rounded-0 mb-2 title-button'>Change Password</Button>
                                    {/* <Button variant='' className='filter-button text-black py-0 me-1'><i className='fa fa-plus'>&nbsp; Bulk Upload</i></Button> */}
                                </Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col as={Col} xs={12} md={6}>
                                            <Form.Group>
                                                <Form.Label>New Password <span className='text-primary'>*</span></Form.Label>
                                                <Form.Control
                                                    name='first_name'
                                                    value={"Rohit"}
                                                    type='password'
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col as={Col} xs={12} md={6}>
                                            <Form.Group>
                                                <Form.Label>Confirm Password <span className='text-primary'>*</span></Form.Label>
                                                <Form.Control
                                                    name='last_name'
                                                    value={"Joshi"}
                                                    type='password'
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Row>
                        <Row className='gap-3 justify-content-end my-3'>
                            <Button className='w-auto'>Cancel</Button>
                            <Button className='w-auto'>Save</Button>
                        </Row>
                    </Form>
                </Col>
            </Row >
        </>
    )
}
