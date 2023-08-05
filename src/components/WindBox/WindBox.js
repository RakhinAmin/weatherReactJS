import React from 'react'
import Fan from '../../assets/wind.png'

export default function WindBox(props) {
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

        <div style={{display:'flex', flexDirection:'column', justifyContent: 'center'}}>
        <h1 style={{color: 'white', fontSize: 14, fontWeight: '500', textAlign: 'center'}}>{props.measurement}</h1>
        <h2 style={{color: 'white', fontSize: 16, fontWeight: '500', textAlign: 'center'}}>{props.value}</h2>
        </div>

        <div style={{alignSelf: 'center'}}>
            <img style={{width: 50, height: 50}} src={Fan}/>
        </div>
    </div>
    )
}