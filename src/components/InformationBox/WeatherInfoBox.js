import React from 'react'

export default function WeatherInfoBox(props) {
    // Conditions to determine the background and font color based on the 'color' propnpm
    const backgroundColor = props.color === 'black' ? '' : 'white';
    const fontColor = props.color === 'black' ? 'white' : 'black';

    // Creates a container with two headings for measurement and value
    return (
        <div style={{display: 'flex', 
        backgroundColor, 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: 600, right: 0, left: 0, margin:'auto'}}>
        {/* Heading for the measurement and value*/}
        <h1 style={{color: fontColor, fontSize: 15, padding: 10}}>{props.measurement}</h1>
        <h1 style={{color: fontColor, fontSize: 15, padding: 10}}>{props.value}</h1>
        </div>
    )
}