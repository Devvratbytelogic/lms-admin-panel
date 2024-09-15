import React from 'react'
import { Row, Col, Card } from "react-bootstrap";
import StudentPromotionDataTable from '../../../../../commondata/students/student-promotion';


export default function StudentPromotion() {
    return (
        <>
            <Card className='mt-0 pt-0'>
                <Card.Header className="card-header border-bottom-0">
                    <Row className='w-100'>
                        <Col md={6}>
                            <h3 className="card-title">Promotion Section</h3>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className='pt-0 bordered_data_table'>
                    <StudentPromotionDataTable />
                </Card.Body>
            </Card>
        </>
    )
}
