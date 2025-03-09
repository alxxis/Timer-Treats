import './components.css';
import {useState} from 'react';

export default function TreatOption({setIsPopped, setTime, time = 15, unit = "min", treat = "Sesame Bun"}){
    return(
        <div className="component-container" onClick={() => {setIsPopped(true); setTime(time)}}>
            <div>{time}{unit}</div>
            <p>image</p>
            <p>{treat}</p>
        </div>
    );
}