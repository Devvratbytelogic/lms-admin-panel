import React from 'react'
import { Accordion, Button, Card, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function AcademicSyllabus() {
    return (
        <>
            <Row className='px-0'>
                <Col xs={12} md={6} className='d-flex align-items-end mb-1'>
                    <Form className='w-100' as={Col} md={6}>
                        <Form.Group >
                            <Form.Label>Select Class</Form.Label>
                            <Form.Select name='select-class' className='border-primary rounded-3'>
                                <option value="">Select Class</option>
                                <option value="1">1st Class</option>
                                <option value="2">2nd Class</option>
                                <option value="3">3rd Class</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                    <Row as={Col} md={4}>
                        <Button className='w-auto'>Search</Button>
                    </Row>
                </Col>

                <Col xs={12} md={6} className='d-flex justify-content-end align-items-end mb-1'>
                    <Link to={"/academic-schedule"}>
                        <Button variant='' className='filter-button'>
                            <i className='fa fa-plus'>&nbsp; New Structure</i>
                        </Button>
                    </Link>
                </Col>
            </Row>

            <Row className='mt-6'>
                <Card className='w-100'>
                    <Card.Header className='border-bottom-0 d-flex flex-column flex-md-row justify-content-between'>
                        <Col xs={12} md={6}>
                            <Card.Title>Class 1</Card.Title>
                        </Col>
                        <Col xs={12} md={6} className='d-flex justify-content-end mt-3 mt-md-0'>
                            <button className='me-3'><i className='fa fa-edit text-secondry'></i></button>
                            <button><i className='fa fa-trash text-secondry'></i></button>
                        </Col>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Form as={Col} xs={12} md={6} className='d-flex flex-wrap'>
                                <Form.Group as={Col} xs={12} md={6} className='mb-2'>
                                    <Form.Select
                                        name="trimester"
                                        className='border-primary'
                                    >
                                        <option value="trimester 1">Trimester 1</option>
                                        <option value="trimester 2">Trimester 2</option>
                                        <option value="trimester 3">Trimester 3</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} xs={12} md={6} className='mb-2'>
                                    <Form.Select
                                        name="subject"
                                        className='border-primary'
                                    >
                                        <option value="subject">Subject</option>
                                        <option value="subject 1">Subject 1</option>
                                        <option value="subject 2">Subject 2</option>
                                    </Form.Select>
                                </Form.Group>
                            </Form>

                            <Col as={Col} xs={12} md={6} className='d-flex justify-content-end align-items-center mt-3 mt-md-0'>
                                <Button>Search</Button>
                            </Col>
                        </Row>

                        {/* Accordion Section */}
                        <Row className='mt-6'>
                            <Card className='academic-card w-100'>
                                <Card.Header className='border-bottom-0 pb-0'>
                                    <Card.Title className='fw-bolder'>Schedule</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Accordion defaultActiveKey="0">
                                        {['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4'].map((chapter, index) => (
                                            <Accordion.Item
                                                key={index}
                                                eventKey={index.toString()}
                                                className='mb-3 accordian-rounded-radious'
                                            >
                                                <Accordion.Header className='accordian-header text-light'>
                                                    {chapter}
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolorum ea corporis eaque debitis nobis ad cumque commodi eos eveniet eius omnis quisquam quae veniam esse tempore porro, illo hic, asperiores nemo nesciunt iure laborum minus! Ipsam similique assumenda vel?
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))}
                                    </Accordion>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
        </>
    )
}
