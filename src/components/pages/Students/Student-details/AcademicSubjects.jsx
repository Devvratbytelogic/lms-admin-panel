import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const subjects = [
    { name: 'Hindi', percentage: 81 },
    { name: 'English', percentage: 72 },
    { name: 'Maths', percentage: 88 },
    { name: 'Science', percentage: 81 },
    { name: 'SST', percentage: 81 },
];

const AcademicSubjects = () => {
    return (
        <div>
            <h4 className='card-title'>Academic Subjects</h4>
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

export default AcademicSubjects;