import React from 'react';
import { useEffect, useState } from 'react';

import './App.css';
import AppHeader from './components/appheader';

import WindTable from "./components/windtable";
import {  SurfData, WindData } from './components/windtable';
import ButtonSwitch from './components/buttonSwitch';
import { ButtonProps } from './components/buttonSwitch'; 

function App() {
  const [surfData, setSurfData] = useState<SurfData | undefined>();
  const [windData, setWindData] = useState<WindData | undefined>();

  const [windError, setWindError] = useState(null);
  const [buttonClicked, setButtonClicked] = useState<ButtonProps>({location: {latitude: 51.1173, longitude: -4.2049}} as ButtonProps
    
  );

 const funcButtonClicked = (button: ButtonProps) => {
      
      setButtonClicked(button);
      console.log(buttonClicked);
    
    
    } 

   useEffect(() => {
    console.log(buttonClicked);}, [buttonClicked]
    );

    useEffect(() => {
            const {location } = buttonClicked;
            const {latitude, longitude} = location;
            fetch(`https://marine-api.open-meteo.com/v1/marine?latitude=${latitude}&longitude=${longitude}&hourly=wave_height,wave_period,wind_wave_direction&forecast_days=1`, {
              method: "GET"
            })
            .then(response => response.json())
            .then(data => {console.log(data); setSurfData(data);})
            .catch(error => {console.log(error); setWindError(error);})
            ;

            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,pressure_msl,surface_pressure,wind_speed_10m&forecast_days=1`, 
            {
              method: "GET"
            })
            .then(response => response.json())
            .then(data=> {console.log(data); setWindData(data);})
            .catch(error => {console.log(error); setWindError(error);})
            
          
      
          
          ;
    }, [buttonClicked]);
  return (
    <div className='app-div'>
      <ButtonSwitch onClick={funcButtonClicked}/>
      <div style={{width:"100%", paddingBottom: "1em"}}>
      <AppHeader 
        label={buttonClicked.location} 
        style={{marginBottom: "1em"} }
        sitename={buttonClicked.label}
         />
      
      <WindTable surfData={surfData} windData={windData}/>
      
      </div>
      <div className='footer'>
    <span style={{paddingRight: '10px'}}>(2023) Open-Meteo.com Weather API.</span>
  </div>
      
    </div>
  );
}

export default App;
