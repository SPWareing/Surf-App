import React from 'react';
import {FaArrowUp} from 'react-icons/fa';


export interface WindData {
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



export interface WindTableProps {
    windData?: WindData;
}



const WindTable = ({windData}: WindTableProps) => {
    
    
    
    
    if(windData) {
    
    const {latitude, longitude, hourly : {time, wave_height, wave_period, wind_wave_direction}} = windData
    
    

    const dateObject = time.map((t) => new Date(t));


    return (
        <div>
           <table>
  <thead>
    <tr>
      <th>Time</th>
      {dateObject.map((t, index) => (
        <td key={index}>{t.getUTCHours()}</td>
      ))}
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Wave Height</th>
      {wave_height.map((height, index) => (
        <td key={index}>{`${height}m`}</td>
      ))}
    </tr>
    <tr>
      <th>Wave Period</th>
      {wave_period.map((period, index) => (
        <td key={index}>{`${period}s`}</td>
      ))}
    </tr>
    <tr>
      <th>Wind Wave Direction</th>
      {wind_wave_direction.map((direction, index) => (
        <td key={index}>{<FaArrowUp style={{transform: `rotate(${direction}deg) scaleY(-1)`}}/>}</td>
      ))}
    </tr>
  </tbody>
</table>
        </div>
    )
    } else { return (   <h2>Waiting for data</h2>
    )

    }

    

    
};

export default WindTable;
