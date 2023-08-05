import React from 'react' // Import the 'React' object from the 'react' module

export default function Header(props) { // Define a function called 'Header' and pass 'props' as a parameter
    return (
        // The component returns a div containing an h1 element with certain styles
        <div>
            // header 1 takes text as a prop
            <h1 style={{color: 'white', fontWeight: '800', textAlign: 'center', padding: 30}}>{props.text}</h1>
        </div>
    )
}