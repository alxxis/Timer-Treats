import './components.css';
import {useState} from 'react';

export default function TreatOption({setIsPopped, setTime, setTreat, setDescription, time = 15, unit = "min", treat = "Sesame Bun", description="Soft bread topped with sesame seeds, often filled with beans, or sweet pastes"}){
    const displayedTime = parseInt(time) >=60 ? time/60 : time;
    return(
        <div className="component-container" onClick={() => {setIsPopped(true); setTime(time); setTreat(treat); setDescription(description)}}>
            <div>{displayedTime}{unit}</div>
            <p>image</p>
            <p>{treat}</p>
        </div>
    );
}