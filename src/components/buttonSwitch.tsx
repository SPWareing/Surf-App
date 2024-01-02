import React from 'react';
import '../css/buttonSwitch.css';


export interface Location {
    latitude: number;
    longitude: number;
  }

const BUTTONLIST = [
    {id: 1, label: "Saunton Sands", location: {latitude: 51.1173, longitude: -4.2049}},
    {id: 2, label: "Croyde Bay", location: {latitude: 51.13, longitude: -4.2245}},
    {id: 3, label: "Bantham", location: {latitude: 50.2779, longitude: -3.8689}},
    {id: 4, label: "Woolacombe", location: {latitude: 51.173, longitude: -4.2069}},

]

interface ButtonSwitchProps {
    onClick: (location: Location) => void;  
}

const ButtonSwitch = ({onClick}: ButtonSwitchProps) => {
    return (
        <div className='container'>
            SURF SPOTS
            {BUTTONLIST.map((button) => (
                <button key={button.id} onClick={()=> onClick(button.location)}>{button.label} </button>
            )
            )}
        </div>
    );
}

export default ButtonSwitch;