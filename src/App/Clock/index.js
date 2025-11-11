import "./style.css"
import React, { useState, useEffect } from 'react';

export const Clock = () => {

    const [myDate, setMyDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setMyDate(myDate => new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return (
        <>
            <p className="clock">
                Dzisiaj jest {myDate.toLocaleString("pl", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric"
                })}
            </p>
        </>
    )
}