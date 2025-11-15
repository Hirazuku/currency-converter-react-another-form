import React, { useState, useEffect } from 'react';
import {StyledClock} from "./styled";

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
            <StyledClock>
                Dzisiaj jest {myDate.toLocaleString("pl", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric"
                })}
            </StyledClock>
        </>
    )
}