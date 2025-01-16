import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import Calender from "./Components/Dashboard/Sidebar/Calender/Calender";
import Assignment from "./Components/Dashboard/Sidebar/Assignment/Assignment";
import TimeTableSecond from "./Components/Dashboard/Sidebar/TimeTable/TimeTableSecond";
import TimeTableFirst from "./Components/Dashboard/Sidebar/TimeTable/TimeTableFirst";
import TimeTable from "./Components/Dashboard/Sidebar/TimeTable/TimeTable";
import Attendance from "./Components/Dashboard/Sidebar/Attendance/Attendance";
import Help from "./Components/Dashboard/Sidebar/Help/Help";
import Cards from './Components/Dashboard/Cards/Cards';
import Teachers from './Components/Dashboard/Cards/Teachers';
import Chart from "./Components/Dashboard/Chart/Chart";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} /> {/* Default to login */}
                <Route
                    path="/calender"
                    element={
                        <ProtectedRoute>
                            <Calender />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/assignment"
                    element={
                        <ProtectedRoute>
                            <Assignment />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/timetable"
                    element={
                        <ProtectedRoute>
                            <TimeTable />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/timetablefirst"
                    element={
                        <ProtectedRoute>
                            <TimeTableFirst />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/timetablesecond"
                    element={
                        <ProtectedRoute>
                            <TimeTableSecond />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/attendance"
                    element={
                        <ProtectedRoute>
                            <Attendance />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/help"
                    element={
                        <ProtectedRoute>
                            <Help />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/cards"
                    element={
                        <ProtectedRoute>
                            <Cards />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/teachers"
                    element={
                        <ProtectedRoute>
                            <Teachers />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/chart"
                    element={
                        <ProtectedRoute>
                            <Chart />
                        </ProtectedRoute>
                    }
                />
                
            </Routes>
        </Router>
    );
};

export default App;
