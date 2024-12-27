import React from "react";
import "./register.css"
export const Registration=(props)=>
{
    return(
    <div id="registration">
        <div className="col-md-10 col-md-offset-1 section-title text-center">
          <h2 className="title">Registration</h2>
        </div>
         <div className="cards">
            <div className="card">
                <h3>IEEE  Members</h3>
                <h2>₹000</h2>
                <a href="#" target="_blank">Register now</a>
            </div>
            <div className="card">
                <h3>IEEE SPS Members</h3>
                <h2>₹000</h2>
                <a href="#" target="_blank">Register now</a>
            </div>
            <div className="card">
                <h3>Non-IEEE Members</h3>
                <h2>₹000</h2>
                <a href="#" target="_blank" >Register now</a>
            </div>
        </div>
    </div>  
    );
};