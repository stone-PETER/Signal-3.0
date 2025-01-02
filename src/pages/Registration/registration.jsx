// import React from "react";
import "./register.css";
export const Registration = () => {
  return (
    <div id="registration" className="bg-indigo-950">
      <div className="col-md-10 col-md-offset-1 section-title text-center">
        <h2 className="title section-heading">Registration</h2>
      </div>
      <div className="cards">
        <div className="card">
          <h3>IEEE SPS Members</h3>
          <h2>₹1000</h2>
          <a href="https://www.yepdesk.com/signal-3-0" target="_blank">
            Register now
          </a>
        </div>
        <div className="card">
          <h3>IEEE Members</h3>
          <h2>₹1100</h2>
          <a href="https://www.yepdesk.com/signal-3-0" target="_blank">
            Register now
          </a>
        </div>
        <div className="card">
          <h3>Non-IEEE Members</h3>
          <h2>₹1300</h2>
          <a href="https://www.yepdesk.com/signal-3-0" target="_blank">
            Register now
          </a>
        </div>
      </div>
      <div className="col-md-10 col-md-offset-1 section-title text-center">
        <h2 className="title section-heading">
          Early Bird Registrations Closed
        </h2>
      </div>
      <div className="cards">
        <div className="card relative">
          <img
            className="absolute pb-3 z-2 max-w-full max-h-full"
            src="closed-stamp-3.png"
            alt="Registration Closed"
          />
          <h3>IEEE SPS Members</h3>
          <h2>₹850</h2>
        </div>
        <div className="card relative">
          <img
            className="absolute pb-3 z-2 max-w-full max-h-full"
            src="closed-stamp-3.png"
            alt="Registration Closed"
          />
          <h3>IEEE Members</h3>
          <h2>₹950</h2>
        </div>
        <div className="card relative">
          <img
            className="absolute pb-3 z-2 max-w-full max-h-full"
            src="closed-stamp-3.png"
            alt="Registration Closed"
          />
          <h3>Non-IEEE Members</h3>
          <h2>₹1050</h2>
        </div>
      </div>
    </div>
  );
};
