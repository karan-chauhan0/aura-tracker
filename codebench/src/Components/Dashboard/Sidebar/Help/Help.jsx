import React from 'react';
import './Help.css';
import Sidebar from '../Sidebar';
import { BiHelpCircle, BiMailSend, BiPhone } from "react-icons/bi";

const Help = () => {
    return (
        <div className="container-help">
            <div className="help">
                <Sidebar />
                <div className="help-container">
                    <div className="heading-icon">
                        <h1 className='header--title'>Student Help <BiHelpCircle size={25}/> Center</h1>
                        {/* The anchor tag with a mailto link */}
                        <div className="bicons">
                            <a href="mailto:karan952899@gmail.com?subject=Need%20Help&body=Please%20describe%20your%20issue%20here." target="_blank" rel="noopener noreferrer">
                                <p>
                                <BiMailSend size={30} /> {/* Size of the icon */}
                                </p>
                            </a>
                            <a href="tel:+917668135348" target="_blank" rel="noopener noreferrer">
                                <p>
                                <BiPhone size={30} /> {/* Size of the icon */}
                                </p>
                            </a>
                        </div>
                    </div>                
                    <section className="section">
                        <h2>1. Getting Started</h2>
                        <p>Welcome to the student portal! Here's what you need to know to get started:</p>
                        <ul>
                            <li>Log in with your student credentials</li>
                            <li>Access your courses and materials on the dashboard</li>
                            <li>If you're new, visit the 'Onboarding' section for an introduction to the platform</li>
                        </ul>
                    </section>

                    <section className="section">
                        <h2>2. Frequently Asked Questions (FAQs)</h2>
                        <div className="faq">
                        <h3>How do I reset my password?</h3>
                        <p className='para'>If you've forgotten your password, click on the "Forgot Password" link on the login page and follow the instructions.</p>
                        </div>
                        <div className="faq">
                        <h3>Where can I access my course materials?</h3>
                        <p className='para'>Once logged in, go to your "Dashboard" and select your course. All course materials, including lectures, assignments, and grades, will be available there.</p>
                        </div>
                        <div className="faq">
                        <h3>How can I contact my instructor?</h3>
                        <p className='para'>You can contact your instructor through the "Messages" section within each course or directly via email, if provided in the course details.</p>
                        </div>
                    </section>

                    <section className="section">
                        <h2>3. Academic Resources</h2>
                        <ul>
                        <li><a href="https://www.coursera.org/">Coursera</a> - Online courses from universities around the world.</li>
                        <li><a href="https://www.khanacademy.org/">Khan Academy</a> - Free online educational resources for all subjects.</li>
                        <li><a href="https://www.scribbr.com/">Scribbr</a> - Citation tools and writing resources for students.</li>
                        </ul>
                    </section>

                    <section className="section">
                        <h2>4. Technical Support</h2>
                        <p>If you're experiencing technical issues, please follow these steps:</p>
                        <ul>
                        <li>Check the <strong>Status Page</strong> for any known outages.</li>
                        <li>Clear your browser cache and cookies if you're encountering loading issues.</li>
                        <li>If the problem persists, contact our support team at <a href="mailto:support@school.com">support@school.com</a>.</li>
                        </ul>
                    </section>

                    <section className="section">
                        <h2>5. Contact Us</h2>
                        <p>If you need further assistance, don't hesitate to reach out:</p>
                        <ul>
                        <li>Email: <a href="mailto:help@school.com">help@school.com</a></li>
                        <li>Phone: 1-800-123-4567</li>
                        <li>Live Chat: Available in the bottom-right corner of the page.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>

    );
};

export default Help;
