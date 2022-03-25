import React from 'react';
import './Body.css';
import Button from '../../components/button/Button'
import Circle from '../../components/circle/Circle'

import iconLeft from '../../img/body/iconLeft.svg';
import iconRight from '../../img/body/iconRight.png';
import iconArrow from '../../img/body/iconArrow.svg';

    const Body = (props) => {
 

        return (
            <>
                <div className="body_container">
                    <div className="block_text">
                        <div className="high_text_container">
                            <div className="high_text">SIRIUS DAO</div>
                            <div className="high_text">$1,07<span className="text">
                                <img src={iconArrow} className="iconArrowTop" alt="iconLeft" /> 2.5%</span></div>
                        </div>
                        <div className="text">DAO hedge fund SiriusDAO utilizes various strategies: from investments in IDO to classical trading, farming, stacking, etc.</div>

                    </div>

                    <div className="adaptive_container">

                        <div className="info_container border_radius_right">
                        <div className="smole_text  smole_text_left wide">Requested Amount</div>
                               
                            <div className="info_icon">
                                 <img src={iconLeft} className="info_img" alt="iconLeft" />
                            </div>
                            <div className="info_text">
                                <div className="text_top ">SR DAO</div>
                                <div className="text_bottom wide ">SIRIUS DAO</div>
                            </div>
                            <div className="inputGroup">
                                <div className="smole_text  smole_text_top narrow">Requested Amount</div>
                                <input  type="number"  placeholder="0" />
                            </div>

                        </div>

                        <div className="info_container info_container_rev border_radius_Left info_bgcolor">
                        <div className="smole_text  smole_text_right wide">Offered Amount</div>
                                
                            <div className="info_icon iconRevers">
                                <img src={iconRight} 
                                 className="info_img" alt="iconLeft" />
                            </div>

                            <div className="info_text txtRevers">
                                <div className="text_top info_text_right">USDT</div>
                                <div className="text_bottom  info_text_right wide">TETHER</div>
                            </div>

                            <div className="inputGroup igRevers">
                                <div className="smole_text  smole_text_down narrow">Offered Amount</div>
                                <input   type="number"  placeholder="0" />
                            </div>


                        </div>
                        <Circle />

                    </div>
                </div>
                <div className="button_container">
                <a href="https://client.aragon.org/#/siriusdao/0x2d3238856263782bc82ecad66b7d6af2fa7c746f/"><Button text="DEPOSIT" /></a>
                    
                    <Button text="WITHDRAW" />
                </div>


            </>
        )
    }


export default Body