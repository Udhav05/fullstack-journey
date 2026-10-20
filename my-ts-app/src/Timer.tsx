import {useState, useEffect} from 'react';

function Timer() {
    const [seconds, setSeconds] = useState<number>(0);

    useEffect(() => {
        const id = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => {
            clearInterval(id);
        }
    }, []);


    return (
        <div>
            <h1>Timer</h1>
            <p>Seconds: {seconds}</p>
        </div>
    )
}

export default Timer;