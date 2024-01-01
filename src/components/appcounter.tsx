import React from 'react';
import '../css/appcounter.css';
import { FontIcon } from '@fluentui/react/lib/Icon';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { mergeStyles } from '@fluentui/react/lib/Styling';
import { useState } from 'react';

initializeIcons();

const iconClass = mergeStyles({
    fontSize: 25,
    height: 25,
    width: 25,
    margin: '0 25px',
    color: '#004578',
    selectors: {
      ':hover': { color: '#106ebe' },
    },
  });


 

function AppCounter() {

    const [counter, setCounter] = useState(0);

    function incrementCounter() {
        setCounter(prevCounter => prevCounter + 1)
    } 

    function decrementCounter() {
        if (counter === 0)
        return;
        setCounter(prevCounter => prevCounter - 1)
    }

    return (
        <div className='counter-div'>
            <h3 style={{alignItems:"left", marginLeft: "2.5em"}}>Counter</h3>
            <button className='counter-btn' onClick={decrementCounter}><FontIcon iconName="CalculatorSubtract" className={iconClass} /></button>
            <label style={{width: "25px", height:"25px", fontSize: "2em"}} >{counter}</label>
            <button className='counter-btn' onClick={incrementCounter}><FontIcon iconName="Add" className={iconClass}/></button>
            

            
        </div>
    );
}

export default AppCounter;