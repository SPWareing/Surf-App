import React from 'react';
import { useEffect, useState } from 'react';

import './App.css';
import AppHeader from './components/appheader';

import WindTable from "./components/windtable";
import {  WindData } from './components/windtable';
import ButtonSwitch from './components/buttonSwitch';
import { Location } from './components/buttonSwitch'; 

function App() {
  const [windData, setWindData] = useState<WindData | undefined>();
  const [windError, setWindError] = useState(null);
  const [buttonClicked, setButtonClicked] = useState<Location>(
    {latitude: 51.1173, longitude: -4.2049}
  );

 const funcButtonClicked = (location: Location) => {
      
      setButtonClicked(location);
      console.log(buttonClicked);
    
    
    } 

   useEffect(() => {
    console.log(buttonClicked);}, [buttonClicked]
    );

    useEffect(() => {
            const {latitude, longitude} = buttonClicked;
            fetch(`https://marine-api.open-meteo.com/v1/marine?latitude=${latitude}&longitude=${longitude}&hourly=wave_height,wave_period,wind_wave_direction&forecast_days=1`, {
              method: "GET"
            })
            .then(response => response.json())
            .then(data => {console.log(data); setWindData(data);})
            .catch(error => {console.log(error); setWindError(error);})
            ;
            
          
      
          
          ;
    }, [buttonClicked]);
  return (
    <div className='app-div'>
      <ButtonSwitch onClick={funcButtonClicked}/>
      <div style={{width:"100%", paddingBottom: "1em"}}>
      <AppHeader label={buttonClicked} style={{marginBottom: "1em"}}/>
      
      <WindTable windData={windData}/>
      </div>
    </div>
  );
}

export default App;
