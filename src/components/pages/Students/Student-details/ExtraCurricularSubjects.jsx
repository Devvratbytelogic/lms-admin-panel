import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const subjects = [
    { name: 'Physical Ed.', percentage: 81 },
    { name: 'Arts', percentage: 72 },
    { name: 'Music', percentage: 88 },
    { name: 'NCC', percentage: 81 },
];

const ExtraCurricularSubjects = () => {
    return (
        <div>
            <h4 className='card-title'>Extracurricular Subjects</h4>
            <Row>
                {subjects.map((subject, index) => (
                    <Col key={index} md={6} className="mb-3">
                        <Card className="subject-card">
                            <Card.Body>
                                <h6 className='academic_subjects_title'>{subject.name}</h6>
                                <p className="text-muted mb-0">{subject.percentage}%</p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ExtraCurricularSubjects;