import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import Calender from "./Components/Dashboard/Sidebar/Calender/Calender";
import Timetable from "./Components/Dashboard/Sidebar/TimeTable/TimeTable";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/calender"
                    element={
                        <ProtectedRoute>
                            <Calender />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/timetable"
                    element={
                        <ProtectedRoute>
                            <Timetable />
                        </ProtectedRoute>
                    }
                />
                <Route path="/" element={<Login />} /> {/* Default to login */}
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
