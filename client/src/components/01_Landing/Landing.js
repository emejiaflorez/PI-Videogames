import React from "react";
import { NavLink } from "react-router-dom";
import '../01_Landing/Landing.css';

function Landing(){
    return (
        <div className="lan_Container">
            <div className="lan_textContainer">
                <h1 className="lan_title">Welcome</h1>
                <h3 className="lan_text">
                    Video Games App<br /> <br />Come on in...
                </h3>
                <NavLink to = '/home'>
                    <button className="lan_btn">go to home !</button>
               </NavLink>
               <p className="lan_foot">Copyright 2021 - Henry Version 1.0</p>
               <p className="lan_foot">Project developed by Enrique  Mejia  Florez</p>
           </div>
      </div>
    )
}

export default Landing;