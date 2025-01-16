import React, { useRef } from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar/Sidebar';
import { Profile } from './Profile/Profile';
import { Content } from './Content/Content';
import Cards from '/src/Components/Dashboard/Cards/Cards.jsx';
import Teachers from './Cards/Teachers';
import Chart from './Chart/Chart';

function Dashboard() {
    return (
        <>
            <div className="container-dashboard">
                <div className="dashboard">
                    <Sidebar />
                    <div className="dashboard--content">
                        <div className="dashboard-main">
                            <Content />
                            <Profile />
                        </div> 
                        <div className="flex gap-4 justify-between">
                            <Cards />
                            <div className="line-chart">
                                <Chart />
                            </div>
                            <Teachers />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
