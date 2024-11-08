import React, { useRef } from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar/Sidebar';
import { Profile } from './Profile/Profile';
import { Content } from './Content/Content';

function Dashboard() {
    return (
        <>
            <div className="container-dashboard">
                <div className="dashboard">
                    <Sidebar />
                    <div className="dashboard--content">
                        <Content />
                        <Profile />
                    </div> 
                </div>
            </div>
        </>
    );
}

export default Dashboard;
