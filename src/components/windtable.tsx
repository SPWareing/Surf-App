import React, { useState } from 'react';
import {FaArrowUp} from 'react-icons/fa';
import '../css/windtable.css';


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
    
    const [filter, setFilter] = useState(true);
    
    
    if(windData) {
    
    const {latitude, longitude, hourly : {time, wave_height, wave_period, wind_wave_direction}, hourly_units} = windData
    
    let dateObject;

    if(filter){

    dateObject = time.map((t) => new Date(t));}else{
    dateObject = time.map((t) => new Date(t)).filter((_, index) => index % 3 === 0);
    }


    


    return (
        <div className='table-responsive'>
          <button onClick={()=>setFilter(!filter)}>{filter? "Hourly": "3hr"}</button>
           <table >
            <tr>
              <th style={{width:"20px"}}> Time</th>
              <th> Wave Height</th>
              <th> Wave Period</th>
              <th> Wind Direction</th>
            </tr>
            {dateObject.map((t, index) => (
              <tr key={index}>
                <td>{t.getUTCHours()}</td>
                <td>{`${wave_height[index]}m`}</td>
                <td>{`${wave_period[index]}s`}</td>
                <td title={wind_wave_direction[index].toString() + hourly_units.wind_wave_direction} >{<FaArrowUp style={{transform: `rotate(${wind_wave_direction[index]}deg) scaleY(-1)`, height: '25px'}} />}</td>
              </tr>))}
            
            
             </table>

           </div>) 


    } else { return (   <h2>Waiting for data</h2>
    )

    }

    

    
};

export default WindTable;
