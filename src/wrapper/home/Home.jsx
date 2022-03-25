import React, { useState} from 'react';
import './Home.css';
import Header from '../header/Header'
import Body from '../body/Body'
import About from '../about/About'
import Dashbord from '../dashbord/Dashbord'
import MyAccount from '../myAccount/MyAccount'
import ConnectWallet from '../connectWallet/ConnectWallet'
import Footer from '../footer/Footer'
import PrivacyPolicy from '../privacyPolicy/PrivacyPolicy'
import CookiePolicy from '../cookiePolicy/CookiePolicy'
import Telegram from '../telegram/Telegram'
import {
    Routes,
    Route
  } from "react-router-dom";


const Home = (props) => {
    const [connectWallet, setconnectWallet] = useState(false);

    return (
        <>
            <div className="wrapper">
                <div className="container">
                <Header setAttiveCW={setconnectWallet}
                 /> 

                <Routes>
                    <Route path="/about_us" element={ <About/>}></Route>
                    <Route path="/dashbord" element={<Dashbord/>}></Route>
                    <Route path="/my_account" element={<MyAccount/>}></Route>
                    <Route path="/" element={<Body/>}></Route>
                    <Route path="/privacyPolicy" element={<PrivacyPolicy/>}></Route>
                    <Route path="/cookiePolicy" element={<CookiePolicy/>}></Route>
                    <Route path="/telegram" element={<Telegram/>}></Route>
                </Routes>
                <ConnectWallet active={connectWallet} setAttiveCW={setconnectWallet}/>
                <Footer/>
                </div>
            </div>
        </>
    )
}

export default Home