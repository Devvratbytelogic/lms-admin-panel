import React from 'react'
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import StudentsListDataTable from '../../../commondata/students/student-list';


export default function ClassTeacher() {
    return (
        <>
            <Row>
                <Card className='mt-0 pt-0'>
                    <Card.Header className="card-header border-bottom-0">
                        <Row className='w-100'>
                            <Col md={6}>
                                <h3 className="card-title">Assign Class </h3>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body className='pt-0'>
                        <StudentsListDataTable />
                    </Card.Body>
                </Card>
            </Row>
        </>
    )
}
