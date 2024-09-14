import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';

const lastYearData = [
    { name: 'Bad', value: 62 },
    { name: 'Good', value: 38 },
];

const currentYearData = [
    { name: 'Good', value: 92 },
    { name: 'Bad', value: 8 },
];

// Use specific colors for Good and Bad
const COLORS = {
    'Bad': '#FF8042',  // Orange
    'Good': '#00C49F',  // Green
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
                <Card>
                    <Card.Body>
                        <h4 className='fw-semibold'>Last year Behavioral</h4>
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
                                    {/* Center label for the highest value */}
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
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6}>
                <Card>
                    <Card.Body>
                        <h4 className='fw-semibold'>Current Behavioral</h4>
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
                                        <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
                                    ))}
                                    {/* Center label for the highest value */}
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
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default BehavioralCharts;
