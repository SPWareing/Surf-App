import React from 'react';
import '../css/appheader.css';


type AppHeaderProps = {
    label : {latitude: number, longitude: number};
    color? : string
    style?: React.CSSProperties;
    sitename?: string;
    image?: string;

}


const AppHeader = ({label , color, style, sitename}: AppHeaderProps) => {
    

    
    
    return (
        <div className='header-div' style={style}>
            
            {sitename? <h1>{sitename}</h1> : <h1 style={{color: color}}>Wind Data</h1>}
            <div>
                <h1>Latitude: {label.latitude}</h1> 
                <h1>Longitude: {label.longitude}</h1>
                </div>
            
        </div>
    );
};

export default AppHeader;
