import {Link, useLocation } from 'react-router-dom'
import React from 'react';

export default function Timer(props, {treat = "Sesame Bun"}){


    return(
        <div>
            <div>{props.time}</div>
            <div> img</div>
            <div>{treat}</div>
            <Link to="/BurntTreat">Cancel and Return Home</Link>
        </div>
    );
}