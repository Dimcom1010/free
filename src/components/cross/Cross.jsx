import React from "react";
import './Cross.css';



const Cross = (props) => {
    console.log('props')
    console.log(props)
    return (
        <>
        
        <div className="menu_cross" onClick={() => setCount(false)}></div>
          

        </>
    )
}

export default Cross