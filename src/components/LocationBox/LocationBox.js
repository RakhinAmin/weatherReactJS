import React from 'react';
import "./LocationBox.css"; // Import the CSS file for styling

// Define a functional component called 'LocationBox' and passing 'props' as a parameter
export default function LocationBox(props) {
    // Create the component with the provided background class for CSS styling
    return (
        <div className='background'>
            {/* Header to display the location name */}
            <h1 style={{ textAlign: 'center', color: 'white', padding: 20 }}>{props.location}</h1>

            {/* A horizontal line with a border to separate the content */}
            <div style={{ position: 'absolute', display: 'flex', left: 0, right: 0, margin: 'auto', width: '50%', justifyContent: 'center', border: '5px solid #FFFFFF' }} />

            {/* Paragraph to display additional comments */}
            <p style={{ textAlign: 'center', color: 'white', padding: 20 }}>{props.comment}</p>
        </div>
    );
}