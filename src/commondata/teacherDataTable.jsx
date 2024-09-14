import React, { useState } from 'react';
import { Button, Card, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import logo from "../../src/assets/images/logo/Photo.png"
import { Link } from 'react-router-dom';

const TeacherDataTable = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [isAllSelected, setIsAllSelected] = useState(false);

    const handleSelectAll = () => {
        if (isAllSelected) {
            setSelectedRows([]);
        } else {
            setSelectedRows(data.map(row => row.id));
        }
        setIsAllSelected(!isAllSelected);
    };

    const handleRowSelected = (state) => {
        setSelectedRows(state.selectedRows.map(row => row.id));
        setIsAllSelected(state.selectedRows.length === data.length);
    };

    const columns = [
        {
            name: 'Teachers Name',
            selector: row => {
                return (
                    <div>
                        <Row className='align-items-center'>
                            <Col>
                                <img src={logo} alt="error" />
                            </Col>
                            <Col>
                                <p>{row.teacherName}</p>
                                <p>{row.email}</p>
                            </Col>
                        </Row>

                    </div>
                );
            },
            sortable: true,
        },
        {
            name: 'SchoolID',
            selector: row => row.schoolId,
            sortable: true,
        },
        {
            name: 'Subject',
            selector: row => row.subject,
            sortable: true,
        },
        {
            name: 'Classes',
            selector: row => row.classes,
            sortable: true,
        },
        {
            name: 'Phone Number',
            selector: row => row.phoneNumber,
            sortable: true,
        },
        {
            name: 'Address',
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
                        <Link to={"/teacher-profile"}><i className="fa fa-ellipsis-v"></i></Link>
                    </OverlayTrigger>
                </div>
            ),
        },
    ];

    const data = [
        {
            id: 1,
            teacherName: 'Mr. xyz',
            email: 'demo@gmail.com',
            schoolId: 'SI-ENG-123',
            subject: 'English Literature',
            classes: '9A, 10B',
            phoneNumber: '+91 7293898234',
            address: 'Gurugram, Haryana'
        },
        {
            id: 2,
            teacherName: 'Mr. abc',
            email: 'demo2@gmail.com',
            schoolId: 'SI-ENG-124',
            subject: 'Mathematics',
            classes: '8A, 9B',
            phoneNumber: '+91 1234567890',
            address: 'Delhi'
        },
    ];

    const paginationComponentOptions = {
        rowsPerPageText: 'Rows per page',
        rangeSeparatorText: 'of',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'All',
    };

    return (
        <Card>
            <Card.Header className='justify-content-between'>
                <Row>
                    <Col as={Col} md={12} className='fw-bold fs-5'> All Teachers List</Col>
                </Row>
                <Row>
                    <Col md={12} className="d-flex justify-content-between gap-2 align-items-center">
                        <span>
                            <input className="border border-dark search-input" type="text" placeholder="Search Teacher" />
                        </span>
                        <span>
                            <Button variant="" className="filter-button"> <i className="fa fa-filter"></i> Filter</Button>
                        </span>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body>
                <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    striped
                    paginationComponentOptions={paginationComponentOptions}
                    selectableRows
                    onSelectedRowsChange={handleRowSelected}
                    selectableRowsComponentProps={{ indeterminate: isAllSelected }}
                />
            </Card.Body>
        </Card>
    );
};

export default TeacherDataTable;
