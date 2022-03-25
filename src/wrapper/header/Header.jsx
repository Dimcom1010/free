import React from 'react';
import './Header.css';
import Logo from '../../components/logo/Logo';
import Burger from '../../components/burger/Burger';
import { NavLink } from 'react-router-dom';


const Home = ({setAttiveCW}) => {

    return (
        <>
            <div className="header_container">
                <div className="header_menu_left">
                    <div className="menu_items">

                        <NavLink to="/about_us" className="Nav_link" >ABOUT US</NavLink>
                        <NavLink to="/dashbord" className="Nav_link">DASHBOARD</NavLink>
                    </div>
                </div>
                <NavLink to="/"><Logo></Logo></NavLink>
                <div className="header_menu_rigth">
                    <div className="menu_items">
                        <NavLink to="/my_account" className="Nav_link">MY ACCOUNT</NavLink>
                        <div onClick={() => setAttiveCW(true)} className="header_link">CONNECT WALLET</div>
                    </div>
                </div>
            </div>
            <Burger setAttiveCW={setAttiveCW}/>
            
        </>
    )
}

export default Home
