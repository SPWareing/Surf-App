import React from 'react';
import '../css/appsidebar.css';



const SIDEBARITEMS = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'About' },
    { id: 3, name: 'Contact' },
    { id: 4, name: 'Blog' }
]

const AppSidebar = () => {



    return (
        <div className='sidebar-div'>
            <h3 style={{ alignItems: "center", width: "80%", margin: "auto" }}>Sidebar</h3>
            <ul>
                {SIDEBARITEMS.map((item, i) => {
                    return <li key={i}>{item.name}</li>
                })}
            </ul>
        </div>
    );
};

export default AppSidebar;