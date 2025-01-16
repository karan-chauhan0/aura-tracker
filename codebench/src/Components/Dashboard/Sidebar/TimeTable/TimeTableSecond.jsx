import React from "react";
import "./TimeTable.css"; 

// TimeTableSecond.js
export const timetableSecond = [
    {
        day: "Monday",
        slots: [
            { time: "08:00 - 09:00", subject: "" },
            { time: "09:00 - 12:00", subject: "Operating System Lab, L3, AKM", colSpan:3 },
            { time: "12:00 - 01:00", subject: "" },
            { time: "01:00 - 02:00", subject: "" },
            { time: "02:00 - 04:00", subject: "Soft Computing, NLH2, SS", colSpan:2 },
            { time: "04:00 - 05:00", subject: "" },
            { time: "05:00 - 06:00", subject: "" },
        ],
    },
    {
        day: "Tuesday",
        slots: [
            { time: "08:00 - 09:00", subject: "" },
            { time: "09:00 - 10:00", subject: "Operating System, GS3, MMG" },
            { time: "10:00 - 11:00", subject: "IT Management, GS8" },
            { time: "11:00 - 12:00", subject: "" },
            { time: "12:00 - 01:00", subject: "" },
            { time: "01:00 - 02:00", subject: "" },
            { time: "02:00 - 04:00", subject: "Data Management System, NLH1, AKS", colSpan:2 },
            { time: "04:00 - 05:00", subject: "" },
            { time: "05:00 - 06:00", subject: "" },
        ],
    },
    {
        day: "Wednesday",
        slots: [
            { time: "08:00 - 09:00", subject: "" },
            { time: "09:00 - 11:00", subject: "Operating System, GS3, MMG", colSpan:2 },
            { time: "11:00 - 12:00", subject: "" },
            { time: "12:00 - 01:00", subject: "" },
            { time: "01:00 - 02:00", subject: "Soft Computing, GS7, SS" },
            { time: "02:00 - 03:00", subject: "Analysis of Algorithms, GS7, ABS" },
            { time: "03:00 - 06:00", subject: "AOA LAB L2, DIN", colSpan:3 },
        ],
    },
    {
        day: "Thursday",
        slots: [
            { time: "08:00 - 10:00", subject: "Analysis Of Algorithms, NLH2, ABS", colSpan:2 },
            { time: "10:00 - 12:00", subject: "Object Based Modeling, GS7, DKY", colSpan:2 },
            { time: "12:00 - 01:00", subject: "" },
            { time: "01:00 - 02:00", subject: "" },
            { time: "02:00 - 05:00", subject: "AOA, CCTF Lab, ABS", colSpan:3 },
            { time: "05:00 - 06:00", subject: "" },
        ],
    },
    {
        day: "Friday",
        slots: [
            { time: "08:00 - 09:00", subject: "" },
            { time: "09:00 - 10:00", subject: "" },
            { time: "10:00 - 12:00", subject: "DMS, NLH2, AKS", colSpan:2 },
            { time: "12:00 - 01:00", subject: "" },
            { time: "01:00 - 02:00", subject: "OBM, NLH2, DKY" },
            { time: "02:00 - 05:00", subject: "Web Programming Lab L2, PD", colSpan:3 },
            { time: "05:00 - 06:00", subject: "" },
        ],
    },
];

const TimeTableSecond = () => {
  return (
    <div className="container-timetable">
        <div className="timetable">
            <div className="timetable-container">
                <table>
                    <thead>
                        <tr>
                            <th className="time">Time</th>
                            <th>08:00 - 09:00</th>
                            <th>09:00 - 10:00</th>
                            <th>10:00 - 11:00</th>
                            <th>11:00 - 12:00</th>
                            <th>12:00 - 01:00</th>
                            <th>01:00 - 02:00</th>
                            <th>02:00 - 03:00</th>
                            <th>03:00 - 04:00</th>
                            <th>04:00 - 05:00</th>
                            <th>05:00 - 06:00</th>
                        </tr>
                    </thead>
                    <tbody>
                        {timetableSecond.map(({ day, slots }) => (
                            <tr key={day}>
                                <td className="days">{day}</td>
                                {slots.map((slot, index) => (
                                    <td
                                        key={index}
                                        colSpan={slot.colSpan || 1}
                                        className={slot.subject.includes("Lab") ? "labs" : ""}
                                    >
                                        {slot.subject}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div> 
    </div>
  )
}

export default TimeTableSecond;