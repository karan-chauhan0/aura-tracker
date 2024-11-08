import React from "react";
import "./TimeTable.css";

// Exportable data structure for MCA 1st Year timetable
export const timetableFirst = [
    {
        day: "Monday",
        slots: [
            { time: "08:00 - 09:00", subject: "" },
            { time: "09:00 - 10:00", subject: "Shell Lab (A)", colSpan: 3 },
            { time: "10:00 - 11:00", subject: "" },
            { time: "11:00 - 12:00", subject: "C Class, GS5, AMB" },
            { time: "12:00 - 01:00", subject: "DCO Lab, L1 (A)", colSpan: 3 },
        ],
    },
    {
        day: "Tuesday",
        slots: [
            { time: "08:00 - 09:00", subject: "DCO, RT, GS7 (A)" },
            { time: "09:00 - 10:00", subject: "C Class, GS7, AMB" },
            { time: "10:00 - 11:00", subject: "IT Management, GS8" },
            { time: "11:00 - 12:00", subject: "" },
            { time: "12:00 - 01:00", subject: "" },
            { time: "01:00 - 02:00", subject: "FOL, SSH, GS7" },
            { time: "02:00 - 05:00", subject: "C Programming Lab, L1 (A)", colSpan: 3 },
        ],
    },
    {
        day: "Wednesday",
        slots: [
            { time: "08:00 - 09:00", subject: "" },
            { time: "09:00 - 12:00", subject: "C Programming Lab, L1 (B)", colSpan: 3 },
            { time: "08:00 - 09:00", subject: "" },
            { time: "12:00 - 01:00", subject: "FOL, SSH, GS8", colSpan: 2 },
            { time: "02:00 - 03:00", subject: "DCO Class, RT, GS8" },
            { time: "03:00 - 04:00", subject: "C Class, AMB, GS8" },
        ],
    },
    {
        day: "Thursday",
        slots: [
            { time: "08:00 - 11:00", subject: "Shell Lab, L1 (B)", colSpan: 3 },
            { time: "11:00 - 12:00", subject: "C Class, GS8, AMB" },
            { time: "12:00 - 01:00", subject: ""},
            { time: "12:00 - 01:00", subject: ""},
            { time: "02:00 - 05:00", subject: "DCO Lab, L1 (B)", colSpan: 3 },
        ],
    },
    {
        day: "Friday",
        slots: [
            { time: "08:00 - 09:00", subject: "IT Management, GS8" },
            { time: "09:00 - 10:00", subject: "FOL, SSH, GS8" },
            { time: "11:00 - 12:00", subject: ""},
            { time: "12:00 - 01:00", subject: ""},
            { time: "01:00 - 02:00", subject: ""},
            { time: "02:00 - 03:00", subject: ""},
            { time: "03:00 - 04:00", subject: ""},
            { time: "04:00 - 05:00", subject: "DCO Class, GS8, RT", colSpan: 2 },
        ],
    },
];

const TimeTableFirst = () => {
    return (
        <div className="container-timetable">
            <div className="timetable">
                <div className="timetable-container">
                    <table >
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
                            </tr>
                        </thead>
                        <tbody>
                            {timetableFirst.map(({ day, slots }) => (
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
                    <div className="data-table">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="data-f"><strong>CS31101 =</strong> Programmming & Problem Solving (AMB)</td>
                                    <td className="data-f"><strong>CS31201 =</strong> Programmming & Problem Solving (LAB) (AMB)</td>
                                </tr>
                                <tr>
                                    <td className="data-f"><strong>CS31102 =</strong> Principles of IT Industrial Management </td>
                                    <td className="data-f"></td>
                                </tr>
                                <tr>
                                    <td className="data-f"><strong>CS31103 =</strong> Digital Computer Organization (RT)</td>
                                    <td className="data-f"><strong>CS31202 =</strong> Digital Computer Organization (LAB) (RT)</td>
                                </tr>
                                <tr>
                                    <td className="data-f"><strong>CS31104 =</strong> Foundation if Logics (SSH)</td>
                                    <td className="data-f"><strong>CS31203 =</strong> Shell Programming (LAB) (RAN)</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="faculity">
                            <p>RT = Rajesh Tripati</p>
                            <p>AMB = Amita Biswas</p>
                            <p>SSH = Shalender Shukla</p>
                            <p>RAN = Ranvijay</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeTableFirst;
