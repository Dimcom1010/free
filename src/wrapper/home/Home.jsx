import React from "react";
import './Home.css';
import Header from '../header/Header'
import Body from '../body/Body'
import Footer from '../footer/Footer'


const Home = (props) => {

    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <Header/> 
                    <Body/>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default Home