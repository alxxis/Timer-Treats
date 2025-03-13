import './components.css';
import React from 'react';
import {Link} from 'react-router-dom'

export default function ConfirmChoice({time, trigger, setTrigger, treat = "Sesame Bun", description = "Soft bread topped with sesame seeds, often filled with beans, or sweet pastes"}){
    const clock = {time:time};
    return trigger ? (
        <div className="popup">
            <div className="popup-inner">
                <div onClick={() => setTrigger(false)}>x</div>
                <h2>{treat}</h2>
                <p>{description}</p>
                <p>{time}</p>
                <p>Select an activity:</p>
                <div>Study for exams</div>
                <div>Do homework</div>
                <div>Coding</div>
                <div>Do chores</div>
                <div>Writing</div>
                <div>Learn a new skill</div>
                <div>Read a book</div>
                <Link to={{pathname:"/Timer"}} state={clock}>Start Your Timer</Link>
            </div>
        </div>
    ) : "";
}