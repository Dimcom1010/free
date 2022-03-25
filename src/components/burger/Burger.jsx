
import React, { useState } from 'react';
import './Burger.css';
import {NavLink} from 'react-router-dom';
import Logo from '../../components/logo/Logo';
import Cross from '../../components/cross/Cross';

const Burger = ({setAttiveCW}) => {
    const [count, setCount] = useState(false);

    return (
        <>

            <div className="burger" onClick={() => setCount(true)}>
                <div className="burger_circle"></div>
                <div className="burger_circle"></div>
                <div className="burger_circle"></div>
            </div>   
            
            {count ? <div className="menu"  onClick={() => setCount(false)}>
                    <Cross/>
                    <NavLink  to="/" className="menu_item menu_link" ><Logo></Logo></NavLink>
                    
                    <NavLink  to="/about_us" className="menu_item menu_link" >ABOUT US</NavLink>
                    <NavLink  to="/dashbord" className="menu_item menu_link" >DASHBOARD</NavLink>
                    <NavLink  to="/my_account" className="menu_item menu_link" >MY ACCOUNT</NavLink>
                    <div onClick={() => setAttiveCW(true)} className="menu_item menu_link">CONNECT WALLET</div>
            </div>:<> </> }



        </>
    )
}

export default Burger