import React from 'react';
import { Card, Table } from 'react-bootstrap';
import CustomDatePicker from './CustomDatePicker';

const payments = [
    { name: 'Tuition Fee', date: '2 March 2021, 15:45 PM', amount: '₹ 50,036', status: 'Complete' },
    { name: 'Mess Fee', date: '2 March 2021, 15:45 PM', amount: '₹ 50,036', status: 'Pending' },
    { name: 'Hostel Fee', date: '2 March 2021, 15:45 PM', amount: '₹ 50,036', status: 'Canceled' },
    { name: 'Transport fee', date: '2 March 2021, 15:45 PM', amount: '₹ 50,036', status: 'Complete' },
];

const PaymentHistory = () => {
    return (
        <Card className="payment-history mt-6">
            <Card.Body>
                {/* <div className="d-flex justify-content-between align-items-center pb-3 border-bottom">
                    <h4 className='card-title'>Payment History</h4>
                    <input type="date" className="form-control" style={{ width: 'auto' }} />
                </div> */}
                <div className="d-flex justify-content-end align-items-center pb-3 border-bottom">
                    <CustomDatePicker />
                </div>
                <Table responsive className='mt-2'>
                    {/* <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead> */}
                    <tbody>
                        {payments.map((payment, index) => (
                            <tr key={index}>
                                <td className='payment_name'>{payment.name}</td>
                                <td className='payment_date'>{payment.date}</td>
                                <td className='payment_amount'>{payment.amount}</td>
                                <td>
                                    <span className={`badge fw-bold text-${payment.status === 'Complete' ? 'success' : payment.status === 'Pending' ? 'warning' : 'danger'}`}>
                                        {payment.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default PaymentHistory;