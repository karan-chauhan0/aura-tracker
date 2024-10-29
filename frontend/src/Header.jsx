import React from 'react';
import './Header.css';
import logo from './assets/logo.png'; // Adjust the path as needed

function Header() {
    return (
        <header>
            <nav>
                <div className='logodiv'>
                    <a href="#home" className="logo">
                        <img src={logo} alt="Logo" />
                    </a>
                </div>
                <div className='navdiv'>
                    <a className="navbar-item">Home</a>
                    <a className="navbar-item">About Us</a>
                    <a className="navbar-item">Blog</a>
                    <a className="navbar-item">Courses</a>
                    <a className="navbar-item">Contact Us</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
