import React, { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import './Calender.css';
import Calendar from 'react-calendar'; // Import react-calendar
import 'react-calendar/dist/Calendar.css'; // Import calendar styles

const Calender = () => {
    const [date, setDate] = useState(new Date()); // Initially selected date
    const [selectedDate, setSelectedDate] = useState(null); // Store selected date

    const handleDateChange = (newDate) => {
        setDate(newDate); // Update the date when user selects a date
    };

    const handleSelectDate = () => {
        setSelectedDate(date); // Set the selected date when user clicks "Select" button
    };

    return (
        <div className="container-calender">
            <div className="calender">
                <Sidebar />
                <div className="calender--content">
                    <h1 className="header--title">Calendar</h1>
                    <Calendar 
                        onChange={handleDateChange} 
                        value={date} 
                    />
                    <div className="select-button-container">
                        <button className="select-button" onClick={handleSelectDate}>
                            Select Date
                        </button>
                    </div>
                    {/* Display the selected date */}
                    {selectedDate && (
                        <p>Selected Date: {selectedDate.toDateString()}</p>
                    )}
                </div> 
            </div>
        </div>
    );
}

export default Calender;
