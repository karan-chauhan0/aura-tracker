import React, { useState } from 'react';
import './Cards.css';
import { BiBuilding, BiLogoCPlusPlus, BiNetworkChart, BiStats, BiLogoInternetExplorer } from "react-icons/bi";

// Course data
const courses = [
    {
        title: 'C Programming',
        icon: <BiLogoCPlusPlus />,
        description: 'Learn the fundamentals of C programming, data structures, and algorithms.',
        lecture : 'Total Lecture : 20 Hours Lecture',
        faculity : 'Prof. : Dr. Amit Biswas Sir',
        timetable : 'Lecture Day : Monday(1PM - 2PM), Tuesday(9AM - 10AM), Wednesday(4PM - 5PM), Thrusday1AM - 12PM)'
    },
    {
        title: 'DCO',
        icon: <BiNetworkChart />,
        description: 'Explore Data Communication and Networking concepts in depth.',
        lecture : 'Total Lecture : 20 Hours Lecture',
        faculity : 'Prof. : Dr. Amit Biswas Sir',
        timetable : 'Lecture Day : Monday(1PM - 2PM), Tuesday(9AM - 10AM), Wednesday(4PM - 5PM), Thrusday1AM - 12PM)'
    },
    {
        title: 'FOL',
        icon: <BiStats />,
        description: 'Understand the theory of formal languages and automata.',
        lecture : 'Total Lecture : 20 Hours Lecture',
        faculity : 'Prof. : Dr. Amit Biswas Sir',
        timetable : 'Lecture Day : Monday(1PM - 2PM), Tuesday(9AM - 10AM), Wednesday(4PM - 5PM), Thrusday1AM - 12PM)'
    },
    {
        title: 'Shell Programming',
        icon: <BiBuilding />,
        description: 'Learn to automate tasks using Shell scripting.',
        lecture : 'Total Lecture : 20 Hours Lecture',
        faculity : 'Prof. : Dr. Amit Biswas Sir',
        timetable : 'Lecture Day : Monday(1PM - 2PM), Tuesday(9AM - 10AM), Wednesday(4PM - 5PM), Thrusday1AM - 12PM)'
    },
    {
        title: 'IT Management',
        icon: <BiLogoInternetExplorer />,
        description: 'Learn the key concepts of managing IT infrastructure and services.',
        lecture : 'Total Lecture : 20 Hours Lecture',
        faculity : 'Prof. : Dr. Amit Biswas Sir',
        timetable : 'Lecture Day : Monday(1PM - 2PM), Tuesday(9AM - 10AM), Wednesday(4PM - 5PM), Thrusday1AM - 12PM)'
    }
    ];

    const Cards = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);  // To track the selected course for the modal

    // Handle card click to set the selected course
    const handleCardClick = (course) => {
        setSelectedCourse(course);
    };

    // Handle closing the modal
    const handleCloseModal = () => {
        setSelectedCourse(null);
    };

    return (
        <div>
        {/* Course Cards */}
        <div className="card--container">
            {courses.map((course, index) => (
            <div key={index} className="card" onClick={() => handleCardClick(course)}>
                <div className="card--cover">
                {course.icon}
                </div>
                <div className="card--title">
                <h4>{course.title}</h4>
                </div>
            </div>
            ))}
        </div>

        {/* Modal Popup */}
        {selectedCourse && (
            <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{selectedCourse.title}</h2>
                <p>{selectedCourse.description}</p>
                <p>{selectedCourse.lecture}</p>
                <p>{selectedCourse.faculity}</p>
                <p>{selectedCourse.timetable}</p>
                <button className="close-button" onClick={handleCloseModal}>Close</button>
            </div>
            </div>
        )}
        </div>
    );
};

export default Cards;
