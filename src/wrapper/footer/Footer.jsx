import React from "react";
import './Footer.css';
import footerIcon from './footerIcon.svg';


const Footer = (props) => {

    return (
        <>
            <div className="footer_container">
                <div className="footer_items">
                    <div className="footer_item wide">Powered by <img src={footerIcon} className="footerIcon" alt="footerIcon" /></div>
                    <div className="footer_item group">
                        <div className="group_item">Privacy&nbsp;Policy</div>
                        <div className="group_item">Cookie&nbsp;Policy</div>
                        <div className="group_item">Telegram</div>
                    </div>
                    <div className="footer_item narrow">Powered by <img src={footerIcon} className="footerIcon" alt="footerIcon" /></div>
                    <div className="footer_item">© All rights reserved</div>
                </div>
            </div>
        </>
    )
}

export default Footer