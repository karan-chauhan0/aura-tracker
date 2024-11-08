import React from "react";
import "./TimeTable.css"; 

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
                        <tr>
                            <td className="days">Monday</td>
                            <td></td>
                            <td className="labs" colSpan="3">Operating System Lab, L3, AKM</td>
                            <td></td>
                            <td></td>
                            <td colSpan={2}>Soft Computing, NLH2, SS</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="days">Tuesday</td>
                            <td></td>
                            <td>Operating System, GS3, MMG</td>
                            <td>IT Management, GS8</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={2}>Data Management System, NLH!, AKS</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="days">Wednesday</td>
                            <td></td>
                            <td colSpan={2}>Operating System, GS3, MMG</td>
                            <td></td>
                            <td></td>
                            <td>Soft Computing, GS7, SS</td>
                            <td>Analysus of Algorithms, GS7, ABS</td>
                            <td className="labs" colSpan={3}>AOA LAB L2, DIN</td>
                        </tr>
                        <tr>
                            <td className="days">Thursday</td>
                            <td colSpan={2}>Analysis Of Algorithms, NLH2, ABS</td>
                            <td colSpan={2}>Object Based Modeling, GS&, DKY</td>
                            <td></td>
                            <td></td>
                            <td className="labs" colSpan="3">AOA, CCTF LAB, ABS</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="days">Friday</td>
                            <td></td>
                            <td></td>
                            <td colSpan={2}>DMS, NLH2, AKS</td>
                            <td></td>
                            <td>OBM, NLH2, DKY</td>
                            <td className="labs" colSpan="3">Web Programming LAB L2, PD</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div> 
    </div>
  )
}

export default TimeTableSecond;