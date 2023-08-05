import React from 'react';
import Background from '../../assets/infobox.png';
import WeatherInfoBox from './WeatherInfoBox';

export default function InformationBox(props) {
    const { data } = props;

    if (!data || !data.weather || data.weather.length === 0) { // If there is no weather data available, create a message to say this
      return <div>No weather data available</div>;
    }

  const {description, main} = props.data.weather[0];
  const { weather } = props.data || {}; // Extract specific weather data from the props.data object
  const { temp, feels_like, temp_min, temp_max, pressure, clouds, humidity } = props.data.main || {}; 

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'rgba(21, 70, 129, 0.462)',
      padding: 50,
      margin: 50,
    }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ color: 'white', fontSize: 50 }}>{temp || 'N/A'}</h1> // Display temperature data, or N/A if unavailable
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ backgroundImage: "url(" + Background + ")" }}>
            <h1 style={{ color: 'white', fontSize: 15 }}>
            {weather && weather[0] && weather[0].main && weather[0].description
      ? `${weather[0].main} | ${weather[0].description}` // Checks if the weather data is available or null/undefined
      : 'N/A'}
            </h1>
          </div>
          <div>
            // Displays the data for clouds, timezone and location name using a white font
            <h1 style={{ color: 'white', fontSize: 15 }}>Clouds: {props.data.clouds.all} | Time Zone: {props.data.timezone} | {props.data.name}</h1>
          </div>
        </div>
        // Div to seperate above data from below data
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', right: 0, left: 0, margin: 'auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginRight: 30 }}>
            <WeatherInfoBox measurement='temp' value={temp || 'N/A'} color='black' /> // Displays various weather data values
            <WeatherInfoBox measurement='temp_min' value={temp_min || 'N/A'} color='white' />
            <WeatherInfoBox measurement='pressure' value={pressure || 'N/A'} color='black' />
            <WeatherInfoBox measurement='sea level' value='294.8' color='white' />
          </div>
          // Div to create new column for styling
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <WeatherInfoBox measurement='feels_like' value={feels_like || 'N/A'} color='white' /> // Displays various weather data values
            <WeatherInfoBox measurement='temp_max' value={temp_max || 'N/A'} color='black' />
            <WeatherInfoBox measurement='humidity' value={humidity || 'N/A'} color='white' />
          </div>
        </div>
      </div>
    </div>
  );
}

