import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import './Attendance.css';

const Attendance = () => {
    const [selectedYear, setSelectedYear] = useState("default");

    const handleChange = (event) => {
        setSelectedYear(event.target.value);
    };

    return (
        <div className="container-attendance">
            <div className="attendance">
                <Sidebar />
                <div className="attendance-container">
                    <h1 className="header--title">{
                        selectedYear === "MCA 1st Year" ? "MCA 1st Year Attendance" : selectedYear === "MCA 2nd Year" ? "MCA 2nd Year Attendance" : "Attendance"
                    }</h1>
                    <select name="year" className="year" onChange={handleChange}>
                        <option value="default">Select</option>
                        <option value="MCA 1st Year">MCA 1st Year</option>
                        <option value="MCA 2nd Year">MCA 2nd Year</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Attendance;