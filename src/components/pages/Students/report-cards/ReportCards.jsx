import React from 'react'
import { Row, Col, Card } from "react-bootstrap";
import ReportCardsDataTable from '../../../../commondata/students/report-cards';


export default function ReportCards() {
    return (
        <>
            <Card className='mt-0 pt-0'>
                <Card.Header className="card-header border-bottom-0">
                    <Row className='w-100'>
                        <Col md={6}>
                            <h3 className="card-title">Report Card Section </h3>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className='pt-0'>
                    <ReportCardsDataTable />
                </Card.Body>
            </Card>
        </>
    )
}
