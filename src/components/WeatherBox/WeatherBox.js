import React from 'react'
import Cloud from '../../assets/cloudicon.png' // Import the cloud icon image from the 'assets' folder

// Define a functional component called 'WeatherBox' and passing 'props' as a parameter
export default function WeatherBox(props) {
    // Create a container to display weather information for a specific day
    return (
        <div>
            {/* Paragraph to display the day */}
            <p style={{ color: 'white' }}>{props.day}</p>

            {/* Image tag to display the cloud icon */}
            <img style={{ width: 100, height: 100 }} src={Cloud} alt="Cloud Icon" />

            {/* Paragraph to display the temperature for the day */}
            <p style={{ color: 'white', textAlign: 'center' }}>{props.temperature}</p>
        </div>
    );
}