import React, { useRef, useState } from 'react';
import { Button, Card, Col, Form, Row, Table } from 'react-bootstrap';

export default function PreviousExam() {

    const [examDetails, setExamDetails] = useState({
        term: '',
        class: '',
        section: ''
    });
    const fileInputRef = useRef(null);

    const [examRows, setExamRows] = useState([
        { subject: '', class: '', section: '', teacher: '', date: '', startTime: '', endTime: '', roomNumber: '' }
    ]);

    const handleExamDetailsChange = (e) => {
        setExamDetails({ ...examDetails, [e.target.name]: e.target.value });
    };

    const handleExamRowChange = (index, field, value) => {
        const updatedRows = [...examRows];
        updatedRows[index][field] = value;
        setExamRows(updatedRows);
    };

    // const addExamRow = () => {
    //     setExamRows([...examRows, { subject: '', class: '', section: '', teacher: '', date: '', startTime: '', endTime: '', roomNumber: '' }]);
    // };

    // const removeExamRow = (index) => {
    //     const updatedRows = examRows.filter((_, i) => i !== index);
    //     setExamRows(updatedRows);
    // };




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
                    <Card className="px-2 bg-white rounded-lg shadow-md pb-3">
                        <Card.Header className='border-bottom-0 px-0'>
                            <Col as={Col} md={6}>
                                <Card.Title className="text-2xl font-bold mb-6">Previous Exam</Card.Title>
                            </Col>
                            <Col as={Col} md={6} className='d-flex justify-content-end'>
                                <Button className='filter-button'>Download</Button>
                            </Col>
                        </Card.Header>

                        <Row className='mb-3'>
                            <Col as={Col} xs={12} md={4} className='mb-3'>
                                <Form.Select name="term" value={examDetails.term} onChange={handleExamDetailsChange} className='border-primary rounded-3'>
                                    <option value="">Select Term</option>
                                    <option value="First">First Term</option>
                                    <option value="Second">Second Term</option>
                                    <option value="Third">Third Term</option>
                                </Form.Select>
                            </Col>
                            <Col as={Col} xs={12} md={4} className='mb-3'>
                                <Form.Select name="class" value={examDetails.class} onChange={handleExamDetailsChange} className='border-primary rounded-3'>
                                    <option value="">Class</option>
                                    <option value="1">Class 1</option>
                                    <option value="2">Class 2</option>
                                    <option value="3">Class 3</option>
                                </Form.Select>
                            </Col>
                            <Col as={Col} xs={12} md={4} className='mb-3'>
                                <Form.Select name="section" value={examDetails.section} onChange={handleExamDetailsChange} className='border-primary rounded-3'>
                                    <option value="">Section</option>
                                    <option value="A">Section A</option>
                                    <option value="B">Section B</option>
                                    <option value="C">Section C</option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row className='justify-content-end px-3'>
                            <Button className="w-auto">Create</Button>
                        </Row>

                        <p className="fw-semibold">
                            Exam: {examDetails.term} Term, Class {examDetails.class}, Section {examDetails.section}
                        </p>

                        <div className='table-responsive border-radious-20'>
                            <Table striped hover className='custom-table border-0'>
                                <thead className='bg-primary text-white'>
                                    <tr>
                                        <th>Subject</th>
                                        <th>Class</th>
                                        <th>Section</th>
                                        <th>Teacher</th>
                                        <th>Date</th>
                                        <th>Start Time</th>
                                        <th>End Time</th>
                                        <th>Room Number</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {examRows.map((row, index) => (
                                        <tr key={index} className='border-bottom'>
                                            <td>
                                                <Form.Select value={row.subject} onChange={(e) => handleExamRowChange(index, 'subject', e.target.value)}>
                                                    <option value="">Select Subject</option>
                                                    <option value="Math">Math</option>
                                                    <option value="Science">Science</option>
                                                    <option value="English">English</option>
                                                </Form.Select>
                                            </td>
                                            <td>
                                                <Form.Select value={row.class} onChange={(e) => handleExamRowChange(index, 'class', e.target.value)}>
                                                    <option value="">Select Class</option>
                                                    <option value="1">Class 1</option>
                                                    <option value="2">Class 2</option>
                                                    <option value="3">Class 3</option>
                                                </Form.Select>
                                            </td>
                                            <td>
                                                <Form.Select value={row.section} onChange={(e) => handleExamRowChange(index, 'section', e.target.value)}>
                                                    <option value="">Select Section</option>
                                                    <option value="A">Section A</option>
                                                    <option value="B">Section B</option>
                                                    <option value="C">Section C</option>
                                                </Form.Select>
                                            </td>
                                            <td>
                                                <Form.Select value={row.teacher} onChange={(e) => handleExamRowChange(index, 'teacher', e.target.value)}>
                                                    <option value="">Select Teacher</option>
                                                    <option value="Mr. Smith">Mr. Smith</option>
                                                    <option value="Ms. Johnson">Ms. Johnson</option>
                                                    <option value="Mrs. Davis">Mrs. Davis</option>
                                                </Form.Select>
                                            </td>
                                            <td>
                                                <Form.Control type="date" value={row.date} onChange={(e) => handleExamRowChange(index, 'date', e.target.value)} />
                                            </td>
                                            <td>
                                                <Form.Control type="time" value={row.startTime} onChange={(e) => handleExamRowChange(index, 'startTime', e.target.value)} />
                                            </td>
                                            <td>
                                                <Form.Control type="time" value={row.endTime} onChange={(e) => handleExamRowChange(index, 'endTime', e.target.value)} />
                                            </td>
                                            <td>
                                                <Form.Control type="text" value={row.roomNumber} onChange={(e) => handleExamRowChange(index, 'roomNumber', e.target.value)} />
                                            </td>
                                            <td className='text-center d-flex align-item-center'>
                                                {/* <button onClick={() => removeExamRow(index)} > */}
                                                <Button className='download-button text-white' variant=''>Download</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                        {/* <div className="mt-4 d-flex justify-content-between">
                            <Button onClick={addExamRow}>Add Row</Button>
                            <Button>Save</Button>
                        </div> */}
                    </Card>
                </Col>
            </Row>
        </>
    );
}
