import React from 'react';
import { Card } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
    { name: 'Pre.Month', attendance: 80 },
    { name: 'Curr.Month', attendance: 85 },
];

const COLORS = ['#E5EEEF', '#FAC5B7'];

const OverallAttendance = () => {
    return (
        <div className='attendance_chart'>
            <Card>
                <Card.Body>
                    <h4 className='card-title'>Overall Attendance</h4>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart
                            data={data}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                            barCategoryGap="50%" // Adjust gap between bars to justify them
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="attendance" barSize="15%">  {/* Set bar width */}
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
