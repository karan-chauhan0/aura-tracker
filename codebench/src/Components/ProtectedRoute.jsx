import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem("token"); // Adjust as needed

    if (!isAuthenticated) {
        console.log("User not authenticated - Redirecting to Login");
        return <Navigate to="/" />;
    }

    return children;
};

export default ProtectedRoute;
