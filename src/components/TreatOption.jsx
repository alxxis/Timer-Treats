import './components.css';
import {useState} from 'react';

export default function TreatOption({setIsPopped, setTime, setTreat, setDescription, time = 15, unit = "m", treat = "Sesame Bun", description="Soft bread topped with sesame seeds, often filled with beans, or sweet pastes"}){
    const displayedTime = parseInt(time) >=60 ? time/60 : time;
    return(
        <div className="component-container" onClick={() => {setIsPopped(true); setTime(time); setTreat(treat); setDescription(description)}}>
            <div className="time-selection-container">{displayedTime}{unit}</div>
            <img src={`/${treat}.png`} width={"50%"} height={"50%"} style={{paddingTop:"10px"}}/>
            <p style={{fontWeight:"300"}}>{treat}</p>
        </div>
    );
}