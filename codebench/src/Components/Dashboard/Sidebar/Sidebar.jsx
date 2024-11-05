import React, { useRef } from 'react';
import { BiHome, BiBookAlt, BiMessage, BiSolidReport, BiTask, BiStats, BiHelpCircle} from 'react-icons/bi';
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <>
            <div className="menu">
                <div className="logo">
                    <BiBookAlt className='logo-icon' />
                    <h2>AuraTracker</h2>
                </div>

                <div className="menu--list">
                    <a href="#" className="item">
                        <BiHome className='icon'/>
                        Dashboard
                    </a>
                    <a href="#" className="item">
                        <BiTask className='icon'/>
                        Assignment
                    </a>
                    <a href="#" className="item">
                        <BiSolidReport className='icon'/>
                        Report
                    </a>
                    <a href="#" className="item">
                        <BiMessage className='icon'/>
                        Message
                    </a>
                    <a href="#" className="item">
                        <BiStats className='icon'/>
                        Stats
                    </a>
                    <a href="#" className="item">
                        <BiHelpCircle className='icon'/>
                        Help
                    </a>
                </div>
            </div>
            
        </>
    );
}

export default Sidebar;
