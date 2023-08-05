import React from 'react'
import Fan from '../../assets/wind.png' // Import the wind fan image from the 'assets' folder

// Define a function called 'WindBox' and pass 'props' as a parameter
export default function WindBox(props) {

    // Create a container for the wind information
    return (
    <div style={{display:'flex', 
    flexDirection:'row', 
    backgroundColor: 'rgba(0, 0, 0, 0.61)',
    border: '1px solid #FFFFFF',
    borderRadius: '12px',
    padding: 20,
    width: '40%',
    margin: 20,
    justifyContent: 'space-between'}}>

        {/* Div to display wind measurement and value */}
        <div style={{display:'flex', flexDirection:'column', justifyContent: 'center'}}>
        {/* Heading for the wind measurement */}
        <h1 style={{color: 'white', fontSize: 14, fontWeight: '500', textAlign: 'center'}}>{props.measurement}</h1>
        {/* Heading for the wind value */}
        <h2 style={{color: 'white', fontSize: 16, fontWeight: '500', textAlign: 'center'}}>{props.value}</h2>
        </div>

        {/* Div to display the wind fan image */}
        <div style={{alignSelf: 'center'}}>
            {/* Image tag to display the wind fan image */}
            <img style={{width: 100, height: 50}} src={Fan}/>
        </div>
    </div>
    )
}