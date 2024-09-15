import React, { useState } from 'react';
import { Button, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const columns = [
    {
        name: 'Class',
        selector: row => row.class,
        sortable: true,
    },
    {
        name: 'Section',
        selector: row => row.section,
        sortable: true,
    },
    {
        name: `Teacher's name`,
        selector: row => row.teacher_name,
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
    { id: 1, class: 'Class2', section: 'A', teacher_name: 'John Doe' },
    { id: 2, class: 'Class2', section: 'B', teacher_name: 'Jane Smith' },
    { id: 3, class: 'Class3', section: 'C', teacher_name: 'Michael Johnson' },
    { id: 4, class: 'Class4', section: 'D', teacher_name: 'Emily Davis' },
];

const paginationComponentOptions = {
    rowsPerPageText: 'Rows per page',
    rangeSeparatorText: 'of',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'All',
};

const ClassTeacherDataTable = () => {
    const [filterText, setFilterText] = useState('');
    const filteredData = initialData.filter(item =>
        item.teacher_name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <>
            <Row className="search_bar">
                <Col as={Col} lg={7} md={12} sm={12} xs={12} ></Col>
                <Col as={Col} lg={5} md={12} sm={12} xs={12} >
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

export default ClassTeacherDataTable;
