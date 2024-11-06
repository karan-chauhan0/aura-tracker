import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Navbar.css';
import logo from './logo.png';

const Navbar = () => {
    const { logout, isAuthenticated } = useAuth0();
    // const navigate = useNavigate(); 

    return (
        <header className="header">
            <a href="/" className="logo">
                <img src={logo} alt="Logo" />
            </a>
            <nav className="navbar">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#courses">Courses</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
                <a href="/">
                {isAuthenticated ? (
                    <>
                        <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
                    </>
                ) : (
                    <></>
                )}
                </a>
                
            </nav>
        </header>
    );
};

export default Navbar;
