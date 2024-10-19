import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import AppHeader from './components/appheader';
import WindTable from "./components/windtable";
import { SurfData, WindData } from './utils/types/dtotypes';
import ButtonSwitch from './components/buttonSwitch';
import { ButtonProps } from './components/buttonSwitch';


function App() {
  const [surfData, setSurfData] = useState<SurfData | undefined>();
  const [windData, setWindData] = useState<WindData | undefined>();

  const [windError, setWindError] = useState(null);
  const [buttonClicked, setButtonClicked] = useState<ButtonProps>({ location: { latitude: 51.1173, longitude: -4.2049 } } as ButtonProps

  );

  const funcButtonClicked = (button: ButtonProps) => {

    setButtonClicked(button);
  };



  useEffect(() => {
    const { location } = buttonClicked;
    const { latitude, longitude } = location;

    const loadData = async () => {
      const response = await fetch(`https://marine-api.open-meteo.com/v1/marine?latitude=${latitude}&longitude=${longitude}&hourly=wave_height,wave_period,wind_wave_direction&forecast_days=1`, {
        method: "GET"
      })
      if (response.ok) {
        const data = await response.json();
        setSurfData(data);
      }
    }



    const loadWindData = async () => {

      const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,pressure_msl,surface_pressure,wind_speed_10m&forecast_days=1`,
        {
          method: "GET"
        });

      if (response.ok) {
        const data = await response.json();
        setWindData(data);
      }


    };
    loadData();
    loadWindData();

  }, [buttonClicked]);
  return (
    <div className='app-div'>
      <ButtonSwitch onClick={funcButtonClicked} />
      <div style={{ width: "100%", paddingBottom: "1em" }}>
        <AppHeader
          label={buttonClicked.location}
          style={{ marginBottom: "1em" }}
          sitename={buttonClicked.label}
          image={buttonClicked.image}
        />

        <WindTable surfData={surfData} windData={windData} />

      </div>
      <div className='footer'>
        <span style={{ paddingRight: '10px' }}>(2023) Open-Meteo.com Weather API.</span>
        <span>Images: <a href='https://unsplash.com/'>Unsplash</a>  </span>
      </div>

    </div>
  );
}

export default App;
