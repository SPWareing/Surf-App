import React from 'react';
import '../css/appheader.css';


type AppHeaderProps = {
    label : {latitude: number, longitude: number};
    color? : string
    style?: React.CSSProperties;

}


const AppHeader = ({label , color, style}: AppHeaderProps) => {
    
    
    
    return (
        <div className='header-div' style={style}>
            <h1 style={{color: color}}>Wind Data</h1>
            <h1>Latitude: {label.latitude} Longitude: {label.longitude}</h1>
        </div>
    );
};

export default AppHeader;
