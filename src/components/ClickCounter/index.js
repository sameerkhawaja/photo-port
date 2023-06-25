import React, {useState} from "react";

function ClickCounter(){
    const [clickCounter, setCounter] = useState(0);
    
    function incrementCounter(){
        setCounter((prevState) => prevState + 1);
    }

    return (
        <div>
            <button onClick={incrementCounter}>Counter is: {clickCounter}</button>
        </div>
    )
}

export default ClickCounter;