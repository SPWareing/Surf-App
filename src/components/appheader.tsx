import React from 'react';
import '../css/appheader.css';


type AppHeaderProps = {
    label : string;
    color? : string

}


const AppHeader = ({label, color}: AppHeaderProps) => {
    
    
    
    return (
        <div className='header-div'>
            <h2>{label}</h2>
        </div>
    );
};

export default AppHeader;
