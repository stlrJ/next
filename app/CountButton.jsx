import { useState, useEffect } from "react";

export default function CountButton({id, increment = 1, nbkrnd, ibkrnd}){
    let [count, setCount] = useState(0)
    let [isActive, setIsActive] = useState(false);
    function handleClick(){
        setCount(count + increment)
        setIsActive(!isActive);
    }
    const buttonStyle = {
        backgroundColor: isActive ? nbkrnd : ibkrnd,
    };
    
    function rollOverCount(){
        if (count > 10){
            setCount(0)
        }
    }
    useEffect(rollOverCount, [count])
    return (
        <>
        <button id={id} style={buttonStyle} onClick={handleClick}>+{increment}</button>
        <div id="count">{count}</div>
        </>
    )
}