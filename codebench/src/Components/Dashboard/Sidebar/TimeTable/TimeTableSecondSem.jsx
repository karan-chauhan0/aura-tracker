import React from "react";
import "./TimeTable.css"; 

// TimeTableSecondSem.js
export const timetableSecondSem = [
    {
        day: "Monday",
        slots: [
            { time: "09:00 - 10:00", subject: "" },
            { time: "10:00 - 11:00", subject: "AutomataTheory, NLH2"},
            { time: "11:00 - 01:00", subject: "OOP's, NLH2", colSpan:2 },
            { time: "01:00 - 02:00", subject: "" },
            { time: "02:00 - 05:00", subject: "XML LAB (CC)", colSpan:3 },
            { time: "05:00 - 06:00", subject: "" },
        ],
    },
    {
        day: "Tuesday",
        slots: [
            { time: "09:00 - 12:00", subject: "Data Structure LAB (L2)", colSpan:3 },
            { time: "12:00 - 01:00", subject: "" },
            { time: "01:00 - 02:00", subject: "" },
            { time: "02:00 - 04:00", subject: "Data Structur, NLH2", colSpan:2 },
            { time: "04:00 - 05:00", subject: "" },
            { time: "05:00 - 06:00", subject: "" },
        ],
    },
    {
        day: "Wednesday",
        slots: [
            { time: "09:00 - 10:00", subject: "" },
            { time: "10:00 - 12:00", subject: "AutomataTheory, NLH2", colSpan:2 },
            { time: "12:00 - 01:00", subject: "OOP's, NLH2" },
            { time: "01:00 - 02:00", subject: "" },
            { time: "02:00 - 03:00", subject: "" },
            { time: "03:00 - 05:00", subject: "XML, NLH2", colSpan:2 },
            { time: "05:00 - 06:00", subject: "" },
        ],
    },
    {
        day: "Thursday",
        slots: [
            { time: "09:00 - 10:00", subject: "" },
            { time: "10:00 - 11:00", subject: "" },
            { time: "11:00 - 12:00", subject: "" },
            { time: "12:00 - 01:00", subject: "" },
            { time: "01:00 - 02:00", subject: "" },
            { time: "02:00 - 05:00", subject: "OOP's LAB (L3)", colSpan:3 },
            { time: "05:00 - 06:00", subject: "" },
        ],
    },
    {
        day: "Friday",
        slots: [
            { time: "09:00 - 10:00", subject: "" },
            { time: "10:00 - 11:00", subject: "" },
            { time: "11:00 - 01:00", subject: "Data Structure, NLH2", colSpan:2 },
            { time: "01:00 - 02:00", subject: "" },
            { time: "02:00 - 03:00", subject: "" },
            { time: "03:00 - 05:00", subject: "Technical Writing, NLH1", colSpan:2 },
            { time: "05:00 - 06:00", subject: "XML, NLH2" },
        ],
    },
];

const TimeTableSecondSem = () => {
  return (
    <div className="container-timetable">
        <div className="timetable">
            <div className="timetable-container">
                <table>
                    <thead>
                        <tr>
                            <th className="time">Time</th>
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
                        {timetableSecondSem.map(({ day, slots }) => (
                            <tr key={day}>
                                <td className="days">{day}</td>
                                {slots.map((slot, index) => (
                                    <td
                                        key={index}
                                        colSpan={slot.colSpan || 1}
                                        className={slot.subject.includes("LAB") ? "labs" : ""}
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

export default TimeTableSecondSem;
