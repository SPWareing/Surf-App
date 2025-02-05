import React from 'react';
import '../css/buttonSwitch.css';
import { ButtonProps, ButtonSwitchProps } from '../utils';

const BUTTONLIST: ButtonProps[] = [
    { id: 1, label: "Saunton Sands", location: { latitude: 51.1173, longitude: -4.2049, direction: 90 }, image: "https://images.unsplash.com/photo-1561911023-ee4e7211fc4c" },
    { id: 2, label: "Croyde Bay", location: { latitude: 51.13, longitude: -4.2245, direction: 90 }, image: "https://images.unsplash.com/photo-1606742316322-3180327b7289" },
    { id: 3, label: "Bantham", location: { latitude: 50.2779, longitude: -3.8689, direction: 45 }, image: "https://images.unsplash.com/photo-1694943698629-7b166e0e6069" },
    { id: 4, label: "Woolacombe", location: { latitude: 51.173, longitude: -4.2069, direction: 90 }, image: "https://images.unsplash.com/photo-1603566918287-960c259d96a5" },

]



const ButtonSwitch = ({ onClick }: ButtonSwitchProps) => {
    return (
        <div className='container'>
            <div className='containerChild'><h3>SURF SPOTS</h3></div>

            {BUTTONLIST.map((button) => (
                <button key={button.id} onClick={() => onClick(button)}>{button.label} </button>


            )
            )}
        </div>
    );
}

export default ButtonSwitch;