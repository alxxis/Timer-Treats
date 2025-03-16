import {Link, useLocation} from 'react-router-dom'
import React from 'react';
import {useState, useEffect, useRef} from "react";

export default function Timer(props){
    const location = useLocation();
    const{time} = location.state || {time:0};
    console.log("Location State:", location.state);
    const treat = props.treat || "Sesame Bun";
    const Ref = useRef(null);
    const [timer, setTimer] = useState("00:00:00");

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date()); //target time - current time = time remaining in milliseconds
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total,
            hours,
            minutes,
            seconds,
        };
    };

    const startTimer = (e) => {
        let { total, hours, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {
            // update the timer
            // check if less than 10 then we need to
            // add '0' at the beginning of the variable
            setTimer(
                (hours > 9 ? hours : "0" + hours) +
                ":" +
                (minutes > 9 ? minutes : "0" + minutes) +
                ":" +
                (seconds > 9 ? seconds : "0" + seconds)
            );
        }
    };

    const clearTimer = (e) => {
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next
        if(parseInt(time)<60){
            setTimer("00:" + `${time}` + ":00");
        } else{
            const min = time%60 <10 ? "0" + `${time%60}` : `${time%60}`;
            setTimer(`${time/60}` + ":" + min + ":00");
        }

        // If you try to remove this line the
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
    };

    const getDeadTime = () => {
        let deadline = new Date();

        // This is where you need to adjust if
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + parseInt(time)*60);
        return deadline;
    };

    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);



    const onClickReset = () => {
        clearTimer(getDeadTime());
    };

    console.log("Time:" + {time});

    return(
        <div>
            <div>{timer}</div>
            <div>{time}m</div>
            <button onClick={onClickReset}>Reset</button>
            <div> img</div>
            <div>{treat}</div>
            <Link to="/BurntTreat">Cancel and Return Home</Link>
        </div>
    );
}