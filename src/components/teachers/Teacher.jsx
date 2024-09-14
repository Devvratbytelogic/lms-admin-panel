import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import TeacherDataTable from '../../commondata/teacherDataTable'

export default function Teacher() {
    return (
        <>
            <Row>
                <Col>
                    <TeacherDataTable />
                </Col>
            </Row>
        </>
    )
}