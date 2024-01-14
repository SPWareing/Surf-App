import React from 'react';
import '../css/buttonSwitch.css';



export interface ButtonProps {
    id: number;
    label: string;
    location: Location;
    direction?: number;
    image?: string;
  
}

export interface Location {
    latitude: number;
    longitude: number;
  }

const BUTTONLIST = [
    {id: 1, label: "Saunton Sands", location: {latitude: 51.1173, longitude: -4.2049}, direction: 90},
    {id: 2, label: "Croyde Bay", location: {latitude: 51.13, longitude: -4.2245, direction: 90, image: "https://images.unsplash.com/photo-1579879122909-f7df941d9906?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}},
    {id: 3, label: "Bantham", location: {latitude: 50.2779, longitude: -3.8689, direction: 45}},
    {id: 4, label: "Woolacombe", location: {latitude: 51.173, longitude: -4.2069, direction: 90}},

]

interface ButtonSwitchProps {
    onClick: (button: ButtonProps) => void;  
}

const ButtonSwitch = ({onClick}: ButtonSwitchProps) => {
    return (
        <div className='container'>
            <h3>SURF SPOTS</h3>
            {BUTTONLIST.map((button) => (
                <button key={button.id} onClick={()=> onClick(button)}>{button.label} </button>
                
            )
            )}
        </div>
    );
}

export default ButtonSwitch;