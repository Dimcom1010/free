import React from "react";
import './Burger.css';

const show=()=>{
    isLoggedIn=!isLoggedIn
    console.log('show')
}

let isLoggedIn = false
const Burger = (props) => {

    return (
        <>

            <div className="burger_icon" onClick={show}>
                <div className="burger_circle"></div>
                <div className="burger_circle"></div>
                <div className="burger_circle"></div>

            </div>

            <div>
                {isLoggedIn ? <div className="burger_items">
                    <div className="burger_item">ABOUT US</div>
                    <div className="burger_item">DASHBOARD</div>
                    <div className="burger_item">MY ACCOUNT</div>
                    <div className="burger_item">CONNECT WALLET</div>
                </div> : <div/> }
            </div>
            {/* <div>
      Пользователь <b>{isLoggedIn ? 'в данный момент' : 'не'}</b> авторизован.
    </div> */}

        </>
    )
}

export default Burger