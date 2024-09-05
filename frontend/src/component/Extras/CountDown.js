import React, { useEffect, useState } from 'react'

const CountDown = () => {
    const [days, setDays] = useState(0);
    const [hour, setHour] = useState(0);
    const [mins, setMins] = useState(0);
    const [secs, setSeconds] = useState(0);

    const deadline = "December, 31, 2022"

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
        setHour(Math.floor(time / (1000 * 60 * 60) % 24))
        setMins(Math.floor((time / 1000 / 60) % 60))
        setSeconds(Math.floor((time / 1000) % 60))
    }
    useEffect(() => {
        // const interval = setInterval(())
    }, [])

    return (
        <div>CountDown</div>
    )
}

export default CountDown