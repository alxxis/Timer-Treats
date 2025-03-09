import {Link, useLocation } from 'react-router-dom'
import React from 'react';
import {useState, useEffect} from "react";

export default function Timer(props, {treat = "Sesame Bun", duration = 2*60*60*1000}){
    const[time, setTime] = useState(duration);

    useEffect(() => (
        setTime(() => {
            setTime(time-1000);
        }, 1000)
    ), [time]);

    const getFormattedTime = (milliseconds) => {
        let total_seconds = parseInt(Math.floor(milliseconds/1000));
        let total_minutes = parseInt(Math.floor(total_seconds/60));
        let total_hours = parseInt(Math.floor(total_minutes/60));
        let seconds = parseInt(total_seconds % 60);
        let minutes = parseInt(total_minutes%60);
        let hours = parseInt(total_hours%24);
        return `${hours} : ${minutes} : ${seconds}`
    }

    return(
        <div>
            <div>{getFormattedTime(time)}</div>
            <div> img</div>
            <div>{treat}</div>
            <Link to="/BurntTreat">Cancel and Return Home</Link>
        </div>
    );
}