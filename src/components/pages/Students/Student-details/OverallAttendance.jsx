import React from 'react';
import { Card } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
    { name: 'Jan', attendance: 80 },
    { name: 'Feb', attendance: 85 },
    { name: 'Mar', attendance: 75 },
    { name: 'Apr', attendance: 90 },
    { name: 'May', attendance: 70 },
];

const COLORS = ['#0077be', '#FFBB28', '#FF8042', '#00C49F', '#FF6384'];

const OverallAttendance = () => {
    return (
        <div className='attendance_chart'>
            <Card>
                <Card.Body>
                    <h4 className='fw-semibold'>Overall Attendance</h4>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="attendance">
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </Card.Body>
            </Card>
        </div>
    );
};

export default OverallAttendance;
