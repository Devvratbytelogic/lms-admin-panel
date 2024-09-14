import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

export default function Complaints() {
    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Header className='border-bottom-0'>
                            <Card.Title>Complaints</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Form>
                                    <Row>
                                        <Col as={Col} xs={12} md={4}>
                                            <Form.Group>
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control
                                                    name='name'
                                                    defaultValue={"rohit"}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col as={Col} xs={12} md={4}>
                                            <Form.Group>
                                                <Form.Label>Date</Form.Label>
                                                <Form.Control
                                                    type='date'
                                                    name='date'
                                                    defaultValue={"rohit"}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col as={Col} xs={12} md={4}>
                                            <Form.Group>
                                                <Form.Label>Complaint Type</Form.Label>
                                                <Form.Control
                                                    name='complaint_type'
                                                // defaultValue={"rohit"}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col as={Col} md={12}>
                                            <Form.Group>
                                                <Form.Label>Description</Form.Label>
                                                <textarea className='border border-primary rounded-3 w-100' rows={5} name="description" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className='my-5 justify-content-end'>
                                        <Button className='w-auto btn-dark'>Submit</Button>
                                    </Row>
                                </Form>
                            </Row>
                            <Row className='border-top-thick-dark pt-3 '>
                                <Row className='justify-content-between'>
                                    <Col as={Col} xs={12} md={6} className='fw-semibold'>Complaint's List</Col>
                                    <Col as={Col} xs={12} md={6} className='d-flex justify-content-end gap-3'>
                                        <span>
                                            <input className="border border-dark search-input" type="text" placeholder="Search Teacher" />
                                        </span>
                                        <span>
                                            <Button variant="" className="filter-button text-dark"> <i className="fa fa-filter"></i> Filter</Button>
                                        </span>
                                    </Col>
                                </Row>
                                <Row className='justify-content-between mt-6'>
                                    <Col as={Col} xs={12} lg={4} className='text-white mb-3 p-2'>
                                        <Card className='card-style'>
                                            <Card.Body>
                                                <Row>
                                                    <Col as={Col}>
                                                        <p>Teacher's Name</p>
                                                    </Col>
                                                    <Col as={Col} className='text-end'>
                                                        <p>Type</p>
                                                    </Col>
                                                </Row>
                                                <Row className='my-2'>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deleniti, est eum itaque dolorem, odio, at nesciunt praesentium reprehenderit numquam delectus! Vel modi itaque ad hic perspiciatis doloribus eos sint?</p>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <p>By: Person Name</p>
                                                    </Col>
                                                    <Col className='text-end'>
                                                        <p>Date</p>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col as={Col} xs={12} lg={4} className='text-white mb-3 p-2'>
                                        <Card className='card-style'>
                                            <Card.Body>
                                                <Row>
                                                    <Col as={Col}>
                                                        <p>Teacher's Name</p>
                                                    </Col>
                                                    <Col as={Col} className='text-end'>
                                                        <p>Type</p>
                                                    </Col>
                                                </Row>
                                                <Row className='my-2'>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deleniti, est eum itaque dolorem, odio, at nesciunt praesentium reprehenderit numquam delectus! Vel modi itaque ad hic perspiciatis doloribus eos sint?</p>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <p>By: Person Name</p>
                                                    </Col>
                                                    <Col className='text-end'>
                                                        <p>Date</p>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col as={Col} xs={12} lg={4} className='text-white mb-3 p-2'>
                                        <Card className='card-style'>
                                            <Card.Body>
                                                <Row>
                                                    <Col as={Col}>
                                                        <p>Teacher's Name</p>
                                                    </Col>
                                                    <Col as={Col} className='text-end'>
                                                        <p>Type</p>
                                                    </Col>
                                                </Row>
                                                <Row className='my-2'>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deleniti, est eum itaque dolorem, odio, at nesciunt praesentium reprehenderit numquam delectus! Vel modi itaque ad hic perspiciatis doloribus eos sint?</p>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <p>By: Person Name</p>
                                                    </Col>
                                                    <Col className='text-end'>
                                                        <p>Date</p>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}