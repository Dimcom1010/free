import React, { useState, useEffect } from 'react';
import './Body.css';
import Button from '../../components/button/Button'
import Circle from '../../components/circle/Circle'
import iconLeft from './iconLeft.svg';
import iconRight from './iconRight.png';
 

const Body = (props) => {

        const [count1, setCount1] = useState('');
        const [count2, setCount2] = useState('');
      
         useEffect((count1,count2) => {
            setCount1(count2)
            setCount2(count1)
          
        });
    return (
        <>
            <div className="body_container">
                <div className="block_text">
                    <div className="high_text_container">
                        <div className="high_text">SIRIUS DAO</div>
                        <div className="high_text">$1,07<span className="text">
                        &#129041; 2.5%</span></div>
                    </div>
                    <div className="text">DAO hedge fund SiriusDAO utilizes various strategies: from investments in IDO to classical trading, farming, stacking, etc.</div>

                </div>

                <div className="adaptive_container">

                    <div className="info_container border_radius_right">
                        <div className="smole_text text_left">Requested Amount</div>
                        <div className="info_icon">
                            <img src={iconLeft} className="info_img" alt="iconLeft" />
                        </div>
                        <div className="info_text">
                            <div className="text_top">SR DAO</div>
                            <div className="text_bottom wide">SIRIUS DAO</div>
                        </div>
                        
                            <input type="text"   placeholder='0' value={count1} onChange={event => setCount2(event.target.value*2) }/>
                        
                    </div>

                    <div className="info_container flexRevers border_radius_Left info_bgcolor">
                        <div className="smole_text text_right">Offered Amount</div>
                        <div className="info_icon">
                            <img src={iconRight} className="info_img" alt="iconLeft" />
                        </div>
                        <div className="info_text">
                            <div className="text_top">USDT</div>
                            <div className="text_bottom wide">TETHER1</div>
                        </div>
                        <input type="text"   placeholder='0' value={count2} onChange={event => setCount1(event.target.value/2)}/>
                    </div>
                    <Circle  />  

                    </div>
                </div>
                <div className="button_container">
                    <Button  text="DEPOSIT" />
                    <Button text="WITHDRAW" />
                </div>

            
        </>
    )
}

export default Body