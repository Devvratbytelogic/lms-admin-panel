import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaRegCalendarAlt } from 'react-icons/fa';


const CustomDatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div className="date-picker-container">
            <FaRegCalendarAlt className="calendar-icon" />
            <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd-MM-yyyy"
                placeholderText="dd-mm-yyyy"
                className="custom-input"
            />
        </div>
    );
};

export default CustomDatePicker;
