import React from 'react';
import '../css/appheader.css';


type AppHeaderProps = {
    label : {latitude: number, longitude: number};
    color? : string
    style?: React.CSSProperties;
    sitename?: string;

}


const AppHeader = ({label , color, style, sitename}: AppHeaderProps) => {
    
    
    
    return (
        <div className='header-div' style={style}>
            
            {sitename? <h1>{sitename}</h1> : <h1 style={{color: color}}>Wind Data</h1>}
            <h1>Latitude: {label.latitude} Longitude: {label.longitude}</h1>
        </div>
    );
};

export default AppHeader;
