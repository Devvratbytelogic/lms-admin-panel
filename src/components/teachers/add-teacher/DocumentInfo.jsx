import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

export default function DocumentInfo() {
    return (
        <Card className="p-0">
            <Card.Header className='justify-content-between p-0 border-bottom-0'>
                <Button className='rounded-0 title-button'>Add New Teacher</Button>
                {/* <Button variant='' className='filter-button'><i className='fa fa-plus'>&nbsp; Bulf Upload</i></Button> */}
            </Card.Header>
            <Card.Body>
                <Form className="space-y-4">
                    <Row>
                        <Col as={Col} xs={12} md={3}>
                            <Form.Group>
                                <Form.Label htmlFor="resume">Resume</Form.Label>
                                <Form.Control id="resume" type="file" accept=".pdf,.doc,.docx" />
                            </Form.Group>
                        </Col>
                        <Col as={Col} xs={12} md={3}>
                            <Form.Group>
                                <Form.Label htmlFor="joiningLetter">Joining Letter</Form.Label>
                                <Form.Control id="joiningLetter" type="file" accept=".pdf,.doc,.docx" />
                            </Form.Group>
                        </Col>
                        <Col as={Col} xs={12} md={3}>
                            <Form.Group>
                                <Form.Label htmlFor="aadhaarCard">Aadhaar Card</Form.Label>
                                <Form.Control id="aadhaarCard" type="file" accept=".pdf,.jpg,.jpeg,.png" />
                            </Form.Group>
                        </Col>
                        <Col as={Col} xs={12} md={3}>
                            <Form.Group>
                                <Form.Label htmlFor="aadhaarCard">Aadhaar Card</Form.Label>
                                <Form.Control id="aadhaarCard" type="file" accept=".pdf,.jpg,.jpeg,.png" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col as={Col} xs={12} md={3}>
                            <Form.Group>
                                <Form.Label htmlFor="staffPhoto">Staff Photo</Form.Label>
                                <Form.Control id="staffPhoto" type="file" accept=".jpg,.jpeg,.png" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='mt-3 gap-2 justify-content-end'>
                        <Button className='w-auto'>Cancel</Button>
                        <Button type="submit" className='w-auto'>Submit</Button>
                    </Row>
                </Form>
            </Card.Body>
        </Card >
    );
};
