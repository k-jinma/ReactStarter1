import { useState } from "react";

export default function EventMouse({ defaultSrc, afterSrc, alt }){

    // const enter = () => {
    //     document.querySelector('img').src = afterSrc;
    // }

    // const leave = () => {
    //     document.querySelector('img').src = defaultSrc;
    // }

    const [current, setCurrent] = useState(defaultSrc);
    const enter = () => {
        setCurrent(afterSrc);
    }
    const leave = () => {
        setCurrent(defaultSrc);
    }
    
    return (
        <img src={current} alt={alt} onMouseEnter={enter} onMouseLeave={leave} />
    )
}