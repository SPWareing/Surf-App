import React from 'react';
import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/appheader';
import AppSidebar from './components/appsidebar';
import AppCounter from './components/appcounter';
import WindTable from "./components/windtable";
import { WindTableProps, WindData } from './components/windtable';

function App() {
  const [windData, setWindData] = useState<WindData | undefined>();
  const [windError, setWindError] = useState(null);

    useEffect(() => {
        
            fetch("https://marine-api.open-meteo.com/v1/marine?latitude=51.1173&longitude=-4.2049&hourly=wave_height,wave_period,wind_wave_direction&forecast_days=1", {
              method: "GET"
            })
            .then(response => response.json())
            .then(data => {console.log(data); setWindData(data);})
            .catch(error => {console.log(error); setWindError(error);})
            ;
            
          
      
          
          ;
    }, []);
  return (
    <div className='app-div'>
      <AppSidebar/>
      <div style={{width:"100%"}}>
      <AppHeader label="My App"/>
      <AppCounter/>
      <WindTable windData={windData}/>
      </div>
    </div>
  );
}

export default App;
