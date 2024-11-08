import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { BiHome, BiBookAlt, BiTask, BiStats, BiHelpCircle, BiLogOut, BiTime, BiCalendar, BiFingerprint } from 'react-icons/bi';
import { Link } from "react-router-dom";  // Assuming you're using React Router
import "./Sidebar.css";

const Sidebar = () => {
    const { logout } = useAuth0();

    const handleLogout = () => {
        logout({ returnTo: window.location.origin }); // This will now use the correct port
    };    

    return (
        
        <div className="menu">
            <div className="logo">
                <BiBookAlt className='logo-icon' />
                <h2 className='head'>CodeBench</h2>
            </div>

            <div className="menu--list">
                <Link to="/dashboard" className="item" aria-label="Dashboard">
                    <BiHome className='icon' />
                    Dashboard {/*dashborad button */}
                </Link>
                <Link to="/attendance" className="item" aria-label="Attendance">
                    <BiFingerprint className='icon' />
                    Attendance {/*Attendance button */}
                </Link>
                <Link to="/assignment" className="item" aria-label="Assignment">
                    <BiTask className='icon' />
                    Assignment {/*Assignment button */}
                </Link>
                <Link to="/calender" className="item" aria-label="Calender">
                    <BiCalendar className='icon' />
                    Calender {/*Calender button */}
                </Link>
                <Link to="/timetable" className="item" aria-label="Timetable">
                    <BiTime className='icon' />
                    Time Table {/*TimeTable button */}
                </Link>
                <Link to="/stats" className="item" aria-label="Stats">
                    <BiStats className='icon' />
                    Stats {/*Stats button */}
                </Link>
                <Link to="/help" className="item" aria-label="Help">
                    <BiHelpCircle className='icon' />
                    Help {/*Help button */}
                </Link>
                <button className="item" onClick={handleLogout} aria-label="Log Out">
                    <BiLogOut className='icon' />
                    Log Out {/*Logout button */}
                </button>
            </div>
        </div>
    );
}

export default Sidebar;
