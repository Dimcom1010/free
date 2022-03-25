import React from 'react';
import './ConnectWallet.css';
import metaMask from '../../img/connectWallet/metaMask.svg';
import Cross from '../../components/cross/Cross';

const ConnectWallet = ({active,setAttiveCW}) => {

    return (
        <>{active ?
            <div className="container_ConnectWallet">
                    <div className="connectWallet">
                        <div onClick={() => setAttiveCW(false)}><Cross /></div>
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
            </div>: <></>}
            
        </>
    )
}

export default ConnectWallet