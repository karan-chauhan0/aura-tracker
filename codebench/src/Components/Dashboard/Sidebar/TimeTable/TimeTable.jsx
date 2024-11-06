import React from "react";
import Sidebar from '../../Sidebar/Sidebar';
import "./TimeTable.css"; 

const TimeTable = () => {
  return (
    <div className="container-timetable">
        <div className="timetable">
            <Sidebar />
            <div className="timetable-container">
                <h1 className="header--title">Time Table</h1>
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="days">Monday</td>
                            <td></td>
                            <td className="labs" colSpan="3">Shell Lab (A)</td>
                            <td></td>
                            <td>C Class, GS5, AMB</td>
                            <td className="labs" colSpan="3">DCO Lab, L1 (A)</td>
                        </tr>
                        <tr>
                            <td className="days">Tuesday</td>
                            <td>DCO, RT, GS7 (A)</td>
                            <td>C Class, GS7, AMB</td>
                            <td>IT Management, GS8</td>
                            <td></td>
                            <td></td>
                            <td>FOL, SSH, GS7</td>
                            <td className="labs" colSpan="3">C Programming Lab, L1 (A)</td>
                        </tr>
                        <tr>
                            <td className="days">Wednesday</td>
                            <td></td>
                            <td className="labs" colSpan="3">C Programming Lab, L1 (B)</td>
                            <td></td>
                            <td colSpan="2">FOL, SSH, GS8</td>
                            <td>DCO Class, RT, GS8</td>
                            <td>C Class, AMB, GS8</td>
                        </tr>
                        <tr>
                            <td className="days">Thursday</td>
                            <td className="labs" colSpan="3">Shell Lab, L1 (B)</td>
                            <td>C Class, GS8, AMB</td>
                            <td></td>
                            <td></td>
                            <td className="labs" colSpan="3">DCO Lab, L1 (B)</td>
                        </tr>
                        <tr>
                            <td className="days">Friday</td>
                            <td>IT Management, GS8</td>
                            <td>FOL, SSH, GS8</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan="2">DCO Class, GS8, RT</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div> 
    </div>
  );
};

export default TimeTable;
