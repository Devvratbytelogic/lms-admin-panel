import React, { useState } from 'react';
import { Button, Col, Dropdown, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const columns = [
    {
        name: 'Roll Number',
        selector: row => row.roll_number,
        sortable: true,
        center: true
    },
    {
        name: 'Student Name',
        selector: row => row.name,
        sortable: true,
        center: true
    },
    {
        name: `Total Attendance`,
        selector: row => row.total_attendance,
        center: true
    },
    {
        name: `Total Attendance`,
        cell: (row) => (
            <div className="attendance_dropdown">
                <Dropdown className="btn-group mb-2">
                    <Dropdown.Toggle type="" variant="" title="Action" className='attendance_card_dropdown'>&nbsp;</Dropdown.Toggle>
                    <Dropdown.Menu className="w-100">
                        <Dropdown.Item className='text-center'>Present</Dropdown.Item>
                        <Dropdown.Item className='text-center'>Late</Dropdown.Item>
                        <Dropdown.Item className='text-center'>Absent</Dropdown.Item>
                        <Dropdown.Item className='text-center'>Half Day</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        ),
        center: true
    }
];

const initialData = [
    {
        roll_number: '1',
        img: 'https://randomuser.me/api/portraits/men/1.jpg',
        name: 'John Doe',
        class: '10A',
        total_attendance: '23/31',
        phone_number: '555-1234',
        address: '1234 Elm St, Springfield',
        email: 'johndoe@example.com',
    },
    {
        roll_number: '2',
        img: 'https://randomuser.me/api/portraits/women/1.jpg',
        name: 'Jane Smith',
        class: '10B',
        total_attendance: '23/31',
        phone_number: '555-5678',
        address: '5678 Oak St, Springfield',
        email: 'janesmith@example.com',
    },
    {
        roll_number: '3',
        img: 'https://randomuser.me/api/portraits/men/2.jpg',
        name: 'Michael Brown',
        class: '9A',
        total_attendance: '23/31',
        phone_number: '555-8765',
        address: '9101 Pine St, Springfield',
        email: 'michaelbrown@example.com',
    },
    {
        roll_number: '4',
        img: 'https://randomuser.me/api/portraits/women/2.jpg',
        name: 'Emily Davis',
        class: '8A',
        total_attendance: '23/31',
        phone_number: '555-3456',
        address: '2233 Birch St, Springfield',
        email: 'emilydavis@example.com',
    },
    {
        roll_number: '5',
        img: 'https://randomuser.me/api/portraits/men/3.jpg',
        name: 'Daniel Wilson',
        class: '9B',
        total_attendance: '23/31',
        phone_number: '555-9012',
        address: '7890 Maple St, Springfield',
        email: 'danielwilson@example.com',
    },
    {
        roll_number: '6',
        img: 'https://randomuser.me/api/portraits/men/1.jpg',
        name: 'John Doe',
        class: '10A',
        total_attendance: '23/31',
        phone_number: '555-1234',
        address: '1234 Elm St, Springfield',
        email: 'johndoe@example.com',
    },
    {
        roll_number: '7',
        img: 'https://randomuser.me/api/portraits/women/1.jpg',
        name: 'Jane Smith',
        class: '10B',
        total_attendance: '23/31',
        phone_number: '555-5678',
        address: '5678 Oak St, Springfield',
        email: 'janesmith@example.com',
    }
];


const paginationComponentOptions = {
    rowsPerPageText: 'Rows per page',
    rangeSeparatorText: 'of',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'All',
};

const StudentAttendanceDataTable = () => {
    const [filterText, setFilterText] = useState('');
    const filteredData = initialData.filter(item =>
        item.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <>
            <Row className="search_bar">
                <Form>
                    <Row>
                        <Col md={3} lg={3}>
                            <Form.Group className="mb-3" controlId="lastName">
                                <Form.Label>Classr</Form.Label>
                                <Form.Select>
                                    <option value="">Select</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={3} lg={3}>
                            <Form.Group className="mb-3" controlId="lastName">
                                <Form.Label>Section</Form.Label>
                                <Form.Select>
                                    <option value="">Select</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={3} lg={3}>
                            <Form.Group className="mb-3" controlId="lastName">
                                <Form.Label>Month Wise</Form.Label>
                                <Form.Control type="text" />

                            </Form.Group>
                        </Col>
                        <Col md={3} lg={3}>
                            <Form.Group className="mb-3" controlId="lastName">
                                <Form.Label>Day Wise</Form.Label>
                                <Form.Control type="text" />

                            </Form.Group>
                        </Col>

                        <Form.Group as={Col} md="12" className='custom_col mt-4 text-end'>
                            <Button type="submit" className="btn-primary ms-auto px-6 rounded-lg">Search</Button>
                        </Form.Group>
                    </Row>
                </Form>
            </Row>

            <DataTable
                columns={columns}
                data={filteredData}
                pagination
                // striped
                paginationComponentOptions={paginationComponentOptions}
            // selectableRows
            // selectableRowsComponentProps={{ indeterminate: (isIndeterminate) => isIndeterminate }}
            />
        </>
    );
};

export default StudentAttendanceDataTable;
