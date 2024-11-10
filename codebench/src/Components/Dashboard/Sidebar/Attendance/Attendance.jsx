import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import './Attendance.css';
import { timetableFirst } from '../TimeTable/TimeTableFirst';
import { timetableSecond } from '../TimeTable/TimeTableSecond';

const Attendance = () => {
    const [selectedYear, setSelectedYear] = useState("default");
    const [attendanceStatus, setAttendanceStatus] = useState({});
    const [todayTimetable, setTodayTimetable] = useState([]);

    const dayOfWeek = new Date().toLocaleDateString('en-US', { weekday: 'long' });

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    const handleAttendanceChange = (subject, status) => {
        setAttendanceStatus(prevStatus => ({
            ...prevStatus,
            [subject]: status,
        }));
    };

    useEffect(() => {
        let currentTimetable = [];
        if (selectedYear === "MCA 1st Year") {
            const dayTimetable = timetableFirst.find(day => day.day === dayOfWeek);
            currentTimetable = dayTimetable ? dayTimetable.slots : [];
        } else if (selectedYear === "MCA 2nd Year") {
            const dayTimetable = timetableSecond.find(day => day.day === dayOfWeek);
            currentTimetable = dayTimetable ? dayTimetable.slots : [];
        }
        setTodayTimetable(currentTimetable);
    }, [selectedYear, dayOfWeek]);

    return (
        <div className="container-attendance">
            <div className="attendance">
                <Sidebar />
                <div className="attendance-container">
                    <h1 className="header--title">
                        {selectedYear === "MCA 1st Year" 
                            ? "MCA 1st Year Attendance" 
                            : selectedYear === "MCA 2nd Year" 
                            ? "MCA 2nd Year Attendance" 
                            : "Attendance"}
                    </h1>

                    <select name="year" className="year" onChange={handleYearChange} value={selectedYear}>
                        <option value="default">Select</option>
                        <option value="MCA 1st Year">MCA 1st Year</option>
                        <option value="MCA 2nd Year">MCA 2nd Year</option>
                    </select>

                    {selectedYear !== "default" && todayTimetable.length > 0 && (
                        <div className="attendance-options">
                            <h2>{dayOfWeek} - Attendance Status</h2>
                            {todayTimetable.map((slot, index) => (
                                <div key={index} className="subject-attendance">
                                    <p>{slot.time} - {slot.subject || "Free Period"}</p>
                                    {slot.subject && (
                                        <>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    checked={attendanceStatus[slot.subject] === "Present"}
                                                    onChange={() => handleAttendanceChange(slot.subject, "Present")}
                                                />
                                                Present
                                            </label>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    checked={attendanceStatus[slot.subject] === "Absent"}
                                                    onChange={() => handleAttendanceChange(slot.subject, "Absent")}
                                                />
                                                Absent
                                            </label>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {selectedYear !== "default" && todayTimetable.length === 0 && (
                        <p>No timetable available for {dayOfWeek}.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Attendance;



// import React, { useState, useEffect } from 'react';
// import Sidebar from '../Sidebar';
// import './Attendance.css';
// import { timetableFirst } from '../TimeTable/TimeTableFirst';
// import { timetableSecond } from '../TimeTable/TimeTableSecond';

// const Attendance = () => {
//     const [selectedYear, setSelectedYear] = useState("default");
//     const [attendanceStatus, setAttendanceStatus] = useState({});
//     const [mondayTimetable, setMondayTimetable] = useState([]);

//     const handleYearChange = (event) => {
//         setSelectedYear(event.target.value);
//     };

//     const handleAttendanceChange = (subject, status) => {
//         setAttendanceStatus(prevStatus => ({
//             ...prevStatus,
//             [subject]: status,
//         }));
//     };

//     // Fetch Monday's timetable based on selected year
//     useEffect(() => {
//         let currentTimetable = [];
//         if (selectedYear === "MCA 1st Year") {
//             const mondaySchedule = timetableFirst.find(day => day.day === "Monday");
//             currentTimetable = mondaySchedule ? mondaySchedule.slots : [];
//         } else if (selectedYear === "MCA 2nd Year") {
//             const mondaySchedule = timetableSecond.find(day => day.day === "Monday");
//             currentTimetable = mondaySchedule ? mondaySchedule.slots : [];
//         }
        
//         // Filter out free periods
//         const filteredTimetable = currentTimetable.filter(slot => slot.subject && slot.subject !== "Free Period");
//         setMondayTimetable(filteredTimetable);
//     }, [selectedYear]);

//     return (
//         <div className="container-attendance">
//             <div className="attendance">
//                 <Sidebar />
//                 <div className="attendance-container">
//                     <h1 className="header--title">
//                         {selectedYear === "MCA 1st Year" 
//                             ? "MCA 1st Year Attendance" 
//                             : selectedYear === "MCA 2nd Year" 
//                             ? "MCA 2nd Year Attendance" 
//                             : "Attendance"}
//                     </h1>

//                     <select name="year" className="year" onChange={handleYearChange} value={selectedYear}>
//                         <option value="default">Select</option>
//                         <option value="MCA 1st Year">MCA 1st Year</option>
//                         <option value="MCA 2nd Year">MCA 2nd Year</option>
//                     </select>

//                     {selectedYear !== "default" && mondayTimetable.length > 0 && (
//                         <div className="attendance-options">
//                             <h2>Monday - Attendance Status</h2>
//                             {mondayTimetable.map((slot, index) => (
//                                 <div key={index} className="subject-attendance">
//                                     <p>{slot.time} - {slot.subject}</p>
//                                     <label>
//                                         <input
//                                             type="checkbox"
//                                             checked={attendanceStatus[slot.subject] === "Present"}
//                                             onChange={() => handleAttendanceChange(slot.subject, "Present")}
//                                         />
//                                         Present
//                                     </label>
//                                     <label>
//                                         <input
//                                             type="checkbox"
//                                             checked={attendanceStatus[slot.subject] === "Absent"}
//                                             onChange={() => handleAttendanceChange(slot.subject, "Absent")}
//                                         />
//                                         Absent
//                                     </label>
//                                 </div>
//                             ))}
//                         </div>
//                     )}

//                     {selectedYear !== "default" && mondayTimetable.length === 0 && (
//                         <p>No timetable available for Monday.</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Attendance;
