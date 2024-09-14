import React from 'react'
import { Button, Card, Col, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import DataTable from 'react-data-table-component';

export default function AssignTeacher() {


    const columns = [
        {
            name: 'Class',
            selector: row => row.class,
            sortable: true,
        },
        {
            name: `Teacher's Name`,
            selector: row => row.teachers_name,
            sortable: true,
        },
        {
            name: 'Section',
            selector: row => row.section,
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
        {
            id: 1,
            class: 'Class 2',
            teachers_name: 'xyz',
            section: 'A',
        },
        {
            id: 2,
            class: 'Class 2',
            teachers_name: 'xyz',
            section: 'A',
        },
    ];

    const paginationComponentOptions = {
        rowsPerPageText: 'Rows per page',
        rangeSeparatorText: 'of',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'All',
    };

    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Header className='border-bottom-0'>
                            <Card.Title>Assign Subject Teacher</Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Row>
                                <Form>
                                    <Row>
                                        <Col as={Col} xs={12} md={3} className='ps-0'>
                                            <Form.Group>
                                                <Form.Label>Select Class</Form.Label>
                                                <Form.Select className='rounded-3 border-primary' >
                                                    <option value="">Select</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col as={Col} xs={12} md={3} className='ps-0'>
                                            <Form.Group>
                                                <Form.Label>Select Section</Form.Label>
                                                <Form.Select className='rounded-3 border-primary' >
                                                    <option value="">Select</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col as={Col} xs={12} md={3} className='ps-0'>
                                            <Form.Group>
                                                <Form.Label>Select Subject</Form.Label>
                                                <Form.Select className='rounded-3 border-primary' >
                                                    <option value="">Select</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col as={Col} xs={12} md={3} className='ps-0'>
                                            <Form.Group>
                                                <Form.Label>Select Teacher</Form.Label>
                                                <Form.Select className='rounded-3 border-primary' >
                                                    <option value="">Select</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className='mt-3'>
                                        <Button className="w-auto">Assign Teacher</Button>
                                    </Row>
                                </Form>
                            </Row>
                            <Row className='mt-6'>
                                <DataTable
                                    columns={columns}
                                    data={data}
                                    pagination
                                    striped
                                    paginationComponentOptions={paginationComponentOptions}
                                    selectableRows
                                // onSelectedRowsChange={handleRowSelected}
                                // selectableRowsComponentProps={{ indeterminate: isAllSelected }}
                                />
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}