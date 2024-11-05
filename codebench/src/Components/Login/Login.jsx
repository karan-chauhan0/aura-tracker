import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar"; 
import './Login.css';

const Login = () => {
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    const navigate = useNavigate();

    // Automatically redirect to the dashboard if the user is already logged in
    useEffect(() => {
        if (isAuthenticated) {
            navigate("/"); // Redirect to dashboard when logged in
        }
    }, [isAuthenticated, navigate]);

    const handleLogin = () => {
        loginWithRedirect();
    };

    return (
        <>
            <Navbar />
            <div className="your-component-wrapper">
            <div className="login-container">
                <div className="login-content">
                    <h1>Welcome to AuraTracker</h1>
                    <p>Track your progress and reach your goals with ease!</p>
                    
                    {isAuthenticated ? (
                        <>
                            <span className="user-name">Welcome back, {user?.name}!</span>
                            <button className="dashboard-button" onClick={() => navigate("/dashboard")}>
                                Go to Dashboard
                            </button>
                            <button className="logout-button" onClick={() => logout({ returnTo: window.location.origin })}>
                                Log Out
                            </button>
                        </>
                    ) : (
                        <button className="login-button" onClick={handleLogin}>
                            Log In
                        </button>
                    )}
                </div>
            </div>
            </div>
        </>
    );
};

export default Login;
