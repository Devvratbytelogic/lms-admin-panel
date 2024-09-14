import React, { useState } from 'react';
import { Button, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
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
        name: `Class Name`,
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
        name: 'Action',
        cell: (row) => (
            <div className="action_icon_wrapper">
                <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                    <i className="fa fa-edit"></i>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                    <i className="fa fa-trash-o text-danger"></i>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
                    <i className="fa fa-ellipsis-v"></i>
                </OverlayTrigger>
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
];


const paginationComponentOptions = {
    rowsPerPageText: 'Rows per page',
    rangeSeparatorText: 'of',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'All',
};

const StudentsListDataTable = () => {
    const [filterText, setFilterText] = useState('');
    const filteredData = initialData.filter(item =>
        item.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <>
            <Row className="search_bar">
                <Col as={Col} md={7} ></Col>
                <Col as={Col} md={5} >
                    <div className='search_bar_wrapper'>
                        <input
                            type="text"
                            placeholder="Search by ID, Name, or Subject"
                            className="form-control search_input"
                            value={filterText}
                            onChange={(e) => setFilterText(e.target.value)}
                        />
                        <div className='search_icon'><i className='fa fa-search'></i></div>
                        <Button type="button" className="btn btn-icon search_btn"> <i className="fa fa-sliders text-black"></i> Filters</Button>
                    </div>
                </Col>
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

export default StudentsListDataTable;
