import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { BiEdit, BiLogOut } from 'react-icons/bi';
import './Profile.css'; // Make sure to import your CSS styles

export const Profile = () => {
    // handle logout
    const { logout } = useAuth0();

    const handleLogout = () => {
        logout({ returnTo: window.location.origin }); // This will now use the correct port
    }; 

    const { user } = useAuth0();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);  // State for toggling edit mode
    const [newName, setNewName] = useState(user?.name || '');  // State for the new name

    // Function to open the modal when the image is clicked
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Handle name change
    const handleNameChange = (event) => {
        setNewName(event.target.value);  // Update name with new input value
    };

    // Save the new name
    const saveName = () => {
        // Simulate saving the name. In a real application, you might want to update this in your database or through API calls.
        setIsEditing(false);  // Turn off editing mode
        console.log('New name saved:', newName);  // For demonstration purposes
    };

    return (
        <div className="profile-container">
        {/* Profile image that opens the modal on click */}
        <div className="profile">
            <img
            className="profile-img"
            src={user?.picture}
            alt={user?.name}
            onClick={openModal}  // Open modal on image click
            />
        </div>

        {/* Modal popup showing the user details */}
        {isModalOpen && (
            <div className="profile-modal">
            <div className="profile-modal-content">
                <span className="close-btn" onClick={closeModal}>&times;</span>
                <h2>User Profile</h2>
                <img className="modal-profile-img" src={user?.picture} alt={user?.name} />
                
                {/* Name display/edit */}
                <div className="name-section">
                <p><strong>Name : </strong> 
                    {isEditing ? (
                    <input
                        type="text"
                        value={newName}
                        onChange={handleNameChange}  // Update the name as user types
                        className="name-input"
                    />
                    ) : (
                    newName
                    )}
                </p>
                {isEditing ? (
                    <button className="save-btn" onClick={saveName}>Save</button>
                ) : (
                    <a onClick={() => setIsEditing(true)}>
                        <BiEdit size={20}/>
                    </a>
                )}
                </div>
                
                <p><strong>Email : </strong> {user?.email}</p>
                <button className="p-lg" onClick={handleLogout} aria-label="Log Out">
                    <BiLogOut className='p-icon' size={15}/>
                    Log Out {/*Logout button */}
                </button>
            </div>
            </div>
        )}
        </div>
    );
};
