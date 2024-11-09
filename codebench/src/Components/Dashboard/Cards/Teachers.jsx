import React, { useState } from 'react';
import './Cards.css';
import Image1 from '../../../assets/pic1.jpg';
import Image2 from '../../../assets/pic2.jpg';
import Image3 from '../../../assets/pic3.jpg';

const Teachers = () => {
  // Define the state to hold the selected subject
  const [selectedSubject, setSelectedSubject] = useState('DCO');
  
  // Teacher profiles data
  const teachersData = {
    'DCO': {
      name: 'John Doe',
      bio: 'Expert in Data Communication and Networking.',
      image: Image1,  // Placeholder image URL
    },
    'C-Programming': {
      name: 'Jane Smith',
      bio: 'Experienced C programming teacher with 10+ years of teaching.',
      image: Image2,
    },
    'FOL': {
      name: 'Tom Brown',
      bio: 'Specialized in Formal Languages and Automata Theory.',
      image: Image3,
    },
    'IT Managment': {
      name: 'Alice White',
      bio: 'Skilled in IT infrastructure and management.',
      image: Image1,
    },
    'Shell-Programming': {
      name: 'Bob Green',
      bio: 'Shell scripting expert with a focus on system automation.',
      image: Image2,
    }
  };

  // Handle subject selection change
  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  return (
    <div className="teacher--list">
      <div className="list--header">
        <h2>Teacher</h2>
        <div className="p">
            <p className='subject'>Subject :</p>
            <select onChange={handleSubjectChange} value={selectedSubject}>
                <option value="DCO">DCO</option>
                <option value="C-Programming">C-Programming</option>
                <option value="FOL">FOL</option>
                <option value="IT Managment">IT Management</option>
                <option value="Shell-Programming">Shell-Programming</option>
            </select>
        </div>
        
      </div>

      {/* Teacher profile section */}
      <div className="teacher-profile">
        <h3>{teachersData[selectedSubject].name}</h3>
        <p>{teachersData[selectedSubject].bio}</p>
        <img src={teachersData[selectedSubject].image} alt={teachersData[selectedSubject].name} />
      </div>
    </div>
  );
}

export default Teachers;
