import React, { useState, useEffect } from 'react';
import './ConnectWallet.css';
import metaMask from '../../img/connectWallet/metaMask.svg';
import Cross from '../../components/cross/Cross';
import Button from '../../components/button/Button'

const ConnectWallet = (props) => {
    const [connectWallet, setconnectWallet] = useState(true);

    return (
        <>
            


            <div className="container_ConnectWallet">
                {connectWallet ?
                    <div className="connectWallet">
                        <div onClick={() => setconnectWallet(false)}><Cross /></div>
                        <div className="connectWallet_text">Connect Wallet</div>
                        <div className="connectWallet_icons">
                            <div className="connectWallet_icon " >
                                <img src={metaMask} className="cw_icon" alt="fireSpot" />
                                <div className="cw_text">MetaMask</div>
                            </div>
                            {/* <div className="connectWallet_icon">
                            <img src={metaMask} className="cw_icon" alt="fireSpot" />
                            <div className="cw_text">MetaMask</div>
                        </div> */}
                            {/* <div className="connectWallet_icon">
                            <img src={metaMask} className="cw_icon" alt="fireSpot" />
                            <div className="cw_text">MetaMask</div>
                        </div> */}
                        </div>
                    </div>
                    : <div onClick={() => setconnectWallet(true)}> <Button  text="Connect Wallet" /></div>}
            </div>
            
        </>
    )
}

export default ConnectWallet