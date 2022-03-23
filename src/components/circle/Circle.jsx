import React from "react";
import './Circle.css';
import arrow from './arrow.svg';


const Circle = (props) => {
    console.log('props')
    console.log(props)
    return (
        <>
        
            <div className="circle" onClick={() => console.log('Hello world!')}>
                <img src={arrow} className="arrow arrow_up" alt="arrow" />
                <img src={arrow} className="arrow arrow_down" alt="arrow" />
            </div>

        </>
    )
}

export default Circle