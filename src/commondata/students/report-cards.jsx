import React, { useState } from 'react';
import { Button, Col, Dropdown, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { generateStudentDetailsPage } from '../../routes/routes';

const columns = [
    {
        name: 'Student Name',
        cell: (row) => (
            <div className="student_wrapper">
                <Link to={generateStudentDetailsPage(row.student_id)} state={{ page: 'profile' }}>
                    <div className='d-flex gap-2 align-items-center'>
                        <img src={row.img} alt={""} className='rounded-circle w-25 h-25' />
                        <div>
                            <p className='sm text-black'>{row.name}</p>
                            <p className='secondary_text'>{row.email}</p>
                        </div>
                    </div>
                </Link>
            </div>
        ),
        sortable: true,
        width: '250px',
    },
    {
        name: 'Student Id',
        selector: row => row.student_id,
        sortable: true,
    },
    {
        name: `Class`,
        selector: row => row.class,
        sortable: true,
    },
    {
        name: `DOB`,
        selector: row => row.dob,
        sortable: true,
    },
    {
        name: `Phone Number`,
        selector: row => row.phone_number,
        sortable: true,
    },
    {
        name: `Address`,
        selector: row => row.address,
        sortable: true,
    },
    {
        name: 'Report Card',
        cell: (row) => (
            <div className="report_card">
                <Dropdown className="btn-group mb-2">
                    <Dropdown.Toggle
                        type="button"
                        className="btn dropdown-toggle report_card_dropdown"
                        variant=""
                        title="Action"
                    >
                        Select
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="w-100">
                        <Dropdown.Item className='d-flex align-content-center gap-4'>
                            <i className='fe fe-eye'></i>View
                        </Dropdown.Item>
                        <Dropdown.Item className='d-flex align-content-center gap-4'>
                            <i className='fe fe-download'></i>Download
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        ),
    },
];

const initialData = [
    {
        student_id: 'S001',
        img: 'https://randomuser.me/api/portraits/men/1.jpg',
        name: 'John Doe',
        class: '10A',
        dob: '2005-05-15',
        phone_number: '555-1234',
        address: '1234 Elm St, Springfield',
        email: 'johndoe@example.com',
    },
    {
        student_id: 'S002',
        img: 'https://randomuser.me/api/portraits/women/1.jpg',
        name: 'Jane Smith',
        class: '10B',
        dob: '2006-06-20',
        phone_number: '555-5678',
        address: '5678 Oak St, Springfield',
        email: 'janesmith@example.com',
    },
    {
        student_id: 'S003',
        img: 'https://randomuser.me/api/portraits/men/2.jpg',
        name: 'Michael Brown',
        class: '9A',
        dob: '2007-08-25',
        phone_number: '555-8765',
        address: '9101 Pine St, Springfield',
        email: 'michaelbrown@example.com',
    },
    {
        student_id: 'S004',
        img: 'https://randomuser.me/api/portraits/women/2.jpg',
        name: 'Emily Davis',
        class: '8A',
        dob: '2008-11-30',
        phone_number: '555-3456',
        address: '2233 Birch St, Springfield',
        email: 'emilydavis@example.com',
    },
    {
        student_id: 'S005',
        img: 'https://randomuser.me/api/portraits/men/3.jpg',
        name: 'Daniel Wilson',
        class: '9B',
        dob: '2006-03-17',
        phone_number: '555-9012',
        address: '7890 Maple St, Springfield',
        email: 'danielwilson@example.com',
    },
    {
        student_id: 'S001',
        img: 'https://randomuser.me/api/portraits/men/1.jpg',
        name: 'John Doe',
        class: '10A',
        dob: '2005-05-15',
        phone_number: '555-1234',
        address: '1234 Elm St, Springfield',
        email: 'johndoe@example.com',
    },
    {
        student_id: 'S002',
        img: 'https://randomuser.me/api/portraits/women/1.jpg',
        name: 'Jane Smith',
        class: '10B',
        dob: '2006-06-20',
        phone_number: '555-5678',
        address: '5678 Oak St, Springfield',
        email: 'janesmith@example.com',
    },
    {
        student_id: 'S003',
        img: 'https://randomuser.me/api/portraits/men/2.jpg',
        name: 'Michael Brown',
        class: '9A',
        dob: '2007-08-25',
        phone_number: '555-8765',
        address: '9101 Pine St, Springfield',
        email: 'michaelbrown@example.com',
    },
    {
        student_id: 'S004',
        img: 'https://randomuser.me/api/portraits/women/2.jpg',
        name: 'Emily Davis',
        class: '8A',
        dob: '2008-11-30',
        phone_number: '555-3456',
        address: '2233 Birch St, Springfield',
        email: 'emilydavis@example.com',
    },
    {
        student_id: 'S005',
        img: 'https://randomuser.me/api/portraits/men/3.jpg',
        name: 'Daniel Wilson',
        class: '9B',
        dob: '2006-03-17',
        phone_number: '555-9012',
        address: '7890 Maple St, Springfield',
        email: 'danielwilson@example.com',
    },
];


const paginationComponentOptions = {
    rowsPerPageText: 'Rows per page',
    rangeSeparatorText: 'of',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'All',
};

const ReportCardsDataTable = () => {
    const [filterText, setFilterText] = useState('');
    const filteredData = initialData.filter(item =>
        item.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <>
            <Row className="search_bar">
                <Form>
                    <div className='student_search_input_wrapper'>
                        <div className="student_search_input">
                            <Form.Group className="mb-3" controlId="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </div>

                        <div className="student_search_input">
                            <Form.Group className="mb-3" controlId="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </div>
                        <div className="student_search_input">
                            <Form.Group className="mb-3" controlId="lastName">
                                <Form.Label>Select Class</Form.Label>
                                <Form.Select>
                                    <option value="">Select</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className="student_search_input">
                            <Form.Group className="mb-3" controlId="lastName">
                                <Form.Label>Select Section</Form.Label>
                                <Form.Select>
                                    <option value="">Select</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className="student_search_input">
                            <Form.Group className="mb-3" controlId="lastName">
                                <Form.Label>Select Year</Form.Label>
                                <Form.Control type='date' />
                            </Form.Group>
                        </div>
                    </div>
                    <Form.Group as={Col} md="12" className='custom_col mt-4 text-end'>
                        <Button type="submit" className="btn-primary ms-auto px-6 rounded-lg">Search</Button>
                    </Form.Group>
                </Form>
            </Row>

            <DataTable
                columns={columns}
                data={filteredData}
                pagination
                striped
                paginationComponentOptions={paginationComponentOptions}
                selectableRows
                selectableRowsComponentProps={{ indeterminate: (isIndeterminate) => isIndeterminate }}
            />
        </>
    );
};

export default ReportCardsDataTable;
