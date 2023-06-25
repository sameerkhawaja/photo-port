import React, {useState} from "react"

function Stopwatch() {
    // use the useState react hook
    // sets seconds to 0 and setSeconds is the function we can call to update the value of seconds
    const [seconds, setSeconds] = useState(0);

    function startStopwatch() {
        setInterval(() => {
            // when you pass a callback function, by default it uses the state as an argument
            setSeconds((prevState) => prevState + 1);
        }, 1000)
    }

    return (
    <div>
        {seconds}
        <button onClick={startStopwatch} >Start</button>
    </div>
    )
}

export default Stopwatch;