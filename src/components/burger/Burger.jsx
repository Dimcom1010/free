
import React, { useState, useEffect } from 'react';
import './Burger.css';



const Burger = (props) => {
    const [count, setCount] = useState(true);

    return (
        <>
            <div className="burger" onClick={() => setCount(true)}>
                <div className="burger_circle"></div>
                <div className="burger_circle"></div>
                <div className="burger_circle"></div>
            </div>   
            
            {count ? <div className="menu"  onClick={() => setCount(false)}>
                    <div className="menu_cross" onClick={() => setCount(false)}></div>
                    <div className="menu_item">ABOUT US</div>
                    <div className="menu_item">DASHBOARD</div>
                    <div className="menu_item">MY ACCOUNT</div>
                    <div className="menu_item">CONNECT WALLET</div>
                    
            </div>: <div/> }



        </>
    )
}

export default Burger