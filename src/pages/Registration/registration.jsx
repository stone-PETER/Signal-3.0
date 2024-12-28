import React from "react";
import "./register.css"
export const Registration=(props)=>
{
    return(
    <div id="registration" className="bg-indigo-950">
        <div className="col-md-10 col-md-offset-1 section-title text-center">
          <h2 className="title section-heading">Early Bird Registration</h2>
        </div>
         <div className="cards">
            <div className="card">
                <h3>IEEE SPS Members</h3>
                <h2>₹850</h2>
                <a href="https://www.yepdesk.com/signal-3-0" target="_blank">Register now</a>
            </div>
            <div className="card">
                <h3>IEEE Members</h3>
                <h2>₹950</h2>
                <a href="https://www.yepdesk.com/signal-3-0" target="_blank">Register now</a>
            </div>
            <div className="card">
                <h3>Non-IEEE Members</h3>
                <h2>₹1050</h2>
                <a href="https://www.yepdesk.com/signal-3-0" target="_blank" >Register now</a>
            </div>
        </div>
    </div>  
    );
};