import React from 'react';
import { Card, Row, Col, Button, Form } from 'react-bootstrap';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';

const lastYearData = [
    { name: 'Bad', value: 62 },
    { name: 'Good', value: 38 },
];

const currentYearData = [
    { name: 'Good', value: 72 },
    { name: 'Bad', value: 28 },
];

// Use specific colors for Good and Bad
const COLORS = {
    'Bad': '#f7f8fa',  // Orange
    'Good': '#fadac3',  // Green
};
const COLORS2 = {
    'Bad': '#f7f8fa',  // Orange
    'Good': '#c3ebfa',  // Green
};

// Utility function to get the entry with the highest value
const getHighestData = (data) => {
    return data.reduce((prev, current) => (prev.value > current.value) ? prev : current);
};

const BehavioralCharts = () => {
    const highestLastYear = getHighestData(lastYearData);
    const highestCurrentYear = getHighestData(currentYearData);

    return (
        <Row>
            <Col md={6}>
                {/* <Card>
                    <Card.Body> */}
                <h4 className='card-title'>Last year Behavioral</h4>
                <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                        <Pie
                            data={lastYearData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            startAngle={90}
                            endAngle={-270}
                        >
                            {lastYearData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
                            ))}
                            <br />
                            <Label
                                value={`${highestLastYear.name} ${highestLastYear.value}%`}
                                position="center"
                                fill="#000"
                                fontSize={18}
                                fontWeight="bold"
                            />
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                {/* </Card.Body>
                </Card> */}
            </Col>
            <Col md={6}>
                {/* <Card>
                    <Card.Body> */}
                <h4 className='card-title'>Current Behavioral</h4>
                <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                        <Pie
                            data={currentYearData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            startAngle={90}
                            endAngle={-270}
                        >
                            {currentYearData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS2[entry.name]} />
                            ))}
                            <br />
                            <Label
                                value={`${highestCurrentYear.name} ${highestCurrentYear.value}%`}
                                position="center"
                                fill="#000"
                                fontSize={18}
                                fontWeight="bold"
                            />
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                {/* </Card.Body>
                </Card> */}
            </Col>
            <Row className='justify-content-center'>
                <Button type="submit" className="btn-primary mx-auto w-auto px-6">View</Button>
            </Row>
        </Row>
    );
};

export default BehavioralCharts;
