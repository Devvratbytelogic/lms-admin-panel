import React, { useRef } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { options_for_sunEditor } from "../../commondata/formEditorOptions";
import 'suneditor/dist/css/suneditor.min.css';
import SunEditor from "suneditor-react"; // Correct import

export default function AcademicSchedule() {
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log("Selected file:", file);
        }
    };

    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Header className='border-bottom-0'>
                            <Card.Title>Academic Schedule</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Row>
                                    <Col as={Col} xs={12} md={4}>
                                        <Form.Group>
                                            <Form.Label>Select Class</Form.Label>
                                            <Form.Select
                                                name='select_class'
                                                className='border-primary'
                                            >
                                                <option value="">Class</option>
                                                <option value="1">1st Class</option>
                                                <option value="2">2nd Class</option>
                                                <option value="3">3rd Class</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col as={Col} xs={12} md={4}>
                                        <Form.Group>
                                            <Form.Label>Select Subject</Form.Label>
                                            <Form.Select
                                                name='select_subject'
                                                className='border-primary'
                                            >
                                                <option value="">Subject</option>
                                                <option value="hindi">Hindi</option>
                                                <option value="english">English</option>
                                                <option value="maths">Maths</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col as={Col} xs={12} md={4}>
                                        <Form.Group>
                                            <Form.Label>Select Trimester</Form.Label>
                                            <Form.Select
                                                name='select_trimester'
                                                className='border-primary'
                                            >
                                                <option value="">Trimester</option>
                                                <option value="trimester-1">Trimester 1</option>
                                                <option value="trimester-2">Trimester 2</option>
                                                <option value="trimester-3">Trimester 3</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className='mt-6'>
                                    <Card className='card-academic-schedule py-3 px-3'>
                                        <Row className=''>
                                            <Col as={Col} xs={12} md={6} className='mb-3'>
                                                <Form.Group>
                                                    <Form.Label>Chapter Name</Form.Label>
                                                    <Form.Control
                                                        name='chapter_name'
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col className='d-flex justify-content-end align-items-center'>
                                                <Button onClick={handleButtonClick} variant='' className="filter-button">
                                                    <i className='fa fa-plus'>&nbsp;Upload PDF</i>
                                                </Button>
                                                <Form.Control
                                                    type="file"
                                                    name="upload_pdf"
                                                    accept="application/pdf"
                                                    onChange={handleFileChange}
                                                    ref={fileInputRef}
                                                    className='d-none'
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col as={Col} md={12}>
                                                <Form.Group>
                                                    <Form.Label>Description</Form.Label>
                                                    <SunEditor
                                                        name="product_highlight"
                                                        setOptions={options_for_sunEditor}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Row>
                                <Row className='justify-content-end'>
                                    <Button className='w-auto'>Create</Button>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}
