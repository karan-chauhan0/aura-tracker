import React, {useState} from "react";
import Sidebar from '../../Sidebar/Sidebar';
import "./Assignment.css"; 

const Assignment = () => {

    // State to store the selected file
    const [file, setFile] = useState(null);

    // Function to handle file selection
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0]; // Get the first selected file
        if (selectedFile) {
        setFile(selectedFile); // Store the file in the state
        }
    };

    // Function to handle form submission or file processing
    const handleSubmit = () => {
        if (file) {
        // Handle the file upload or processing here
        console.log('File ready for upload:', file);
        } else {
        console.log('No file selected');
        }
    };

    return (
        <div className="container-assignment">
            <div className="assignment">
                <Sidebar />
                <div className="assignment-container">
                    <h1 className="header--title">Assignment</h1>
                    <div className="attach-document-container">
                        {/* File input for attaching documents */}
                        <label htmlFor="file-upload" className="attach-button">
                            Attach Document
                        </label>
                        <input
                            type="file"
                            id="file-upload"
                            onChange={handleFileChange}
                            style={{ display: 'none' }} // Hide the default file input
                        />
                        
                        {file && (
                            <div className="file-info">
                            <p><strong>Selected File:</strong> {file.name}</p>
                            </div>
                        )}

                        {/* Button to submit or process the file */}
                        <button onClick={handleSubmit} className="submit-button">
                            Submit
                        </button>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Assignment;
