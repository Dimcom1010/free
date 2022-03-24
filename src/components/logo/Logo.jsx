import React from "react";

import './Logo.css';
import mainLogo from '../../img/logo/logo.svg';



const Logo = (props) => {

    return (
        <>
            <div className="logo_container">
                <img src={mainLogo} className="logo" alt="fireSpot" />
            </div>
        </>
    )
}

export default Logo