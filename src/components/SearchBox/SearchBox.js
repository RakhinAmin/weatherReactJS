import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the FaSearch icon from the react-icons/fa library
import { useState } from 'react'; // Import the 'useState' hook from the 'react' library

// Define a function called 'SearchBox' and pass 'props' as a parameter
export default function SearchBox(props) {

  const [searchQuery, setSearchQuery] = useState('');

  // Event handler which trigger the 'onEnterPress' function from props when the 'Enter' key is pressed
  const handleEnterPress = (event) => {
    if (event.key === 'Enter') {
        props.onEnterPress(event.target.value); // Calls the 'onEnterPress' function the input value as an argument
    }
  };

  // Creates the search box with an input field and a search icon
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 50 }}>
        <div style={{ width: '0%', position: 'relative' }}>
            <div style={{position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)'}}>
            <FaSearch style={{ color: 'white', position: 'absolute'}}/>
            </div>
        </div>
        <input
          type='text'
          placeholder='Search weather'
          style={{
            backgroundColor: 'black',
            color: 'white',
            border: '1px solid white',
            paddingLeft: '40px',
            paddingRight: '40px',
            height: '50px',
            width: '80%',
            transform: 'translateY(-50%)'
          }}
          onKeyDown={handleEnterPress} // Attach the 'handleEnterPress' function to the 'onKeyDown' event
        />
      </div>
  );
}
