import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import TimeTableFirst from './TimeTableFirst';
import TimeTableSecond from './TimeTableSecond';
import './TimeTable.css';

const TimeTable = () => {
    const [selectedYear, setSelectedYear] = useState("default");

    const handleChange = (event) => {
        setSelectedYear(event.target.value);
    };

    return (
        <div className="container-timetable">
            <div className="timetable">
                <Sidebar />
                <div className="timetable-container">
                    <h1 className="header--title">{
                        selectedYear === "MCA 1st Year" ? "Time Table MCA 1st Year" : selectedYear === "MCA 2nd Year" ? "Time Table MCA 2nd Year" : "Time Table"
                    }</h1>
                    <select name="year" className="year" onChange={handleChange}>
                        <option value="default">Select</option>
                        <option value="MCA 1st Year">MCA 1st Year</option>
                        <option value="MCA 2nd Year">MCA 2nd Year</option>
                    </select>

                    {/* Conditionally render the timetable based on the selected year */}
                    {selectedYear === "MCA 1st Year" && <TimeTableFirst />}
                    {selectedYear === "MCA 2nd Year" && <TimeTableSecond />}
                </div>
            </div>
        </div>
    );
};

export default TimeTable;
