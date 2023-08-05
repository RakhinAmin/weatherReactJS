import React from 'react';
import logo from './logo.svg';
// Import the CSS styling
import './App.css';
// Import all of the different component functions
import Header from './components/Header/Header';
import LocationBox from './components/LocationBox/LocationBox';
import WeatherBox from './components/WeatherBox/WeatherBox';
import SearchBox from './components/SearchBox/SearchBox';
import WindBox from './components/WindBox/WindBox';
import InformationBox from './components/InformationBox/InformationBox';
import { FaSearchLocation } from 'react-icons/fa';

import { useState } from 'react';
import axios from 'axios';

function App() {
  // 'useState' hook creates a state variable 'weatherData' and a function to update it 'setWeatherData'
  const [weatherData, setWeatherData] = useState(null);

  const API = '049909705e431bbafa807eb4a6840770';

  // Function to search the weather data for a given location
  const searchLocation = (value) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API}`)
      .then((response) => {
        setWeatherData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Function to handle 'Enter' key press in the search box
  const handleEnterPress = (value) => {
    console.log(weatherData);
    searchLocation(value)
  }

  return (
    <div className="App">
      {/* Creates the header with text 'Weather tracker' */}
      <Header text='Weather tracker'/>
      {/* Creates the location box if weather data is available */}
      {weatherData && weatherData.name && (
        <LocationBox location={weatherData.name} comment={weatherData.weather[0].description} />
      )}

    {/* Creates the search box and passes the 'handleEnterPress' function as a prop */}
    <SearchBox onEnterPress={handleEnterPress}/>

      {/* Creates a row of weather boxes for each day of the week, placeholder data for now */}
      <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>

      <WeatherBox day='Monday' temperature='N/A'/>
      <WeatherBox day='Tuesday' temperature='N/A'/>
      <WeatherBox day='Wednesday' temperature='N/A'/>
      <WeatherBox day='Thursday' temperature='N/A'/>
      <WeatherBox day='Friday' temperature='N/A'/>
      <WeatherBox day='Saturday' temperature='N/A'/>
      <WeatherBox day='Sunday' temperature='N/A'/>
      </div>

    {/* Creates the information box that contains weather data */}
    <InformationBox data={weatherData}/>

    {/* Shows the visibility information */}
    <p style={{color:'white', marginLeft: 80}}>Visibility | 10,000</p>

      {/* Creates two wind boxes for wind speed and wind degree */}
      <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
      {weatherData && weatherData.wind && (
          <WindBox measurement='Wind Speed' value={weatherData.wind.speed}/>
        )}
        {weatherData && weatherData.wind && weatherData.wind.deg && (
          <WindBox measurement='Wind Deg' value={weatherData.wind.deg} />
        )}
      </div>

    </div>
  );
}
export default App;
