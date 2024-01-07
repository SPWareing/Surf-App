import React, { useState } from 'react';

import WindDirectionArrow from './windArrowDirection';
import '../css/windtable.css';


export interface SurfData {
    latitude: number
    longitude: number
    generationtime_ms: number
    utc_offset_seconds: number
    timezone: string
    timezone_abbreviation: string
    elevation: number
    hourly_units: HourlyUnits
    hourly: Hourly
  }
  
  export interface HourlyUnits {
    time: string
    wave_height: string
    wave_period: string
    wind_wave_direction: string
  }
  
  export interface Hourly {
    time: string[]
    wave_height: number[]
    wave_period: number[]
    wind_wave_direction: number[]
  }

  export interface WindData {
    latitude:              number;
    longitude:             number;
    generationtime_ms:     number;
    utc_offset_seconds:    number;
    timezone:              string;
    timezone_abbreviation: string;
    elevation:             number;
    hourly_units:          HourlyUnits;
    hourly:                Hourly;
}

export interface Hourly {
    time:             string[];
    temperature_2m:   number[];
    pressure_msl:     number[];
    surface_pressure: number[];
    wind_speed_10m:   number[];
}

export interface HourlyUnits {
    time:             string;
    temperature_2m:   string;
    pressure_msl:     string;
    surface_pressure: string;
    wind_speed_10m:   string;
}

export interface WindTableProps {
    surfData?: SurfData;
    windData?: WindData;
}



const WindTable = ({surfData, windData}: WindTableProps) => {
    
    const [filter, setFilter] = useState(true);
    const [showColumns, setShowColumns] = useState(true);
    
    
    if(surfData && windData) {
    
    const {latitude, longitude, hourly : {time, wave_height, wave_period, wind_wave_direction}, hourly_units} = surfData

    const {hourly: {temperature_2m, pressure_msl, surface_pressure, wind_speed_10m}} = windData;
    
    let dateObject;

    if(filter){

    dateObject = time.map((t) => new Date(t));}else{
    dateObject = time.map((t) => new Date(t)).filter((_, index) => index % 3 === 0);
    }


    


    return (
        <div className='table-responsive'>
          <div ><button onClick={()=>setFilter(!filter)}>{filter? "Hourly": "3hr"}</button>
          <button onClick={()=>setShowColumns(!showColumns)}>{filter? "Hide Extra": "Show Extra"}</button>
          </div>
           <table >
            <tr>
              <th style={{width:"20px"}}> Time</th>
              <th> Wave Height</th>
              <th> Wave Period</th>
              <th> Wind Direction</th>
              {showColumns &&<th> Temperature</th>}
              {showColumns &&<th> Surface Pressure</th>}
            </tr>
            {dateObject.map((t, index) => (
              <tr key={index}>
                <td>{t.getUTCHours()}</td>
                <td>{`${wave_height[index]}m`}</td>
                <td>{`${wave_period[index]}s`}</td>
                <td title={wind_wave_direction[index].toString() + hourly_units.wind_wave_direction} >
                  {<WindDirectionArrow direction={wind_wave_direction[index]} speed={wind_speed_10m[index]} />}</td>
                {showColumns && <td>{`${temperature_2m[index]}°C`}</td>}
                {showColumns &&<td>{`${surface_pressure[index]} hPa`}</td>}
              </tr>))}
            
            
             </table>

           </div>) 


    } else { return (   <h2 style={{color: 'grey'}}>Waiting for data</h2>
    )

    }

    

    
};

export default WindTable;
