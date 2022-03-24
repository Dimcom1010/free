import React from "react";
import './Footer.css';
import footerIcon from '../../img/footer/footerIcon.svg';
import { NavLink } from 'react-router-dom';

const Footer = (props) => {

    return (
        <>
            <div className="footer_container">
                <div className="footer_items">
                    <div className="footer_item wide">Powered by <img src={footerIcon} className="footerIcon" alt="footerIcon" /></div>
                    <div className="footer_item group">
                    
                        <NavLink to="/privacyPolicy" className="footer_link" >Privacy&nbsp;Policy</NavLink>
                        <NavLink to="/cookiePolicy" className="footer_link" >Cookie&nbsp;Policy</NavLink>
                        <NavLink to="/telegram" className="footer_link" >Telegram</NavLink>

                    </div>
                    <div className="footer_item narrow">Powered by <img src={footerIcon} className="footerIcon" alt="footerIcon" /></div>
                    <div className="footer_item">© All rights reserved</div>
                </div>
            </div>
        </>
    )
}

export default Footer