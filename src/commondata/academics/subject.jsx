import React from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const columns = [
    {
        name: 'Subject Code',
        selector: row => row.subject_code,
        sortable: true,
    },
    {
        name: 'Subject',
        selector: row => row.subject,
        sortable: true,
    },
    {
        name: 'Subject Type',
        selector: row => row.type,
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

const data = [
    { id: 1, subject_code: 'SJ-ENG-123', subject: "English Literature", type: 'Theory' },
    { id: 2, subject_code: 'GRC-HIS-456', subject: "History", type: 'Theory' },
    { id: 3, subject_code: 'JCK-MATH-789', subject: "Math", type: 'Theory' },
    { id: 4, subject_code: 'ROD-DRA-012', subject: "Drama", type: 'Theory' },
];

const paginationComponentOptions = {
    rowsPerPageText: 'Rows per page',
    rangeSeparatorText: 'of',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'All',
};

const SubjectDataTable = () => (
    <DataTable
        columns={columns}
        data={data}
        pagination
        striped
        paginationComponentOptions={paginationComponentOptions}
        selectableRows
        selectableRowsComponentProps={{ indeterminate: (isIndeterminate) => isIndeterminate }}
    />
);

export default SubjectDataTable;
