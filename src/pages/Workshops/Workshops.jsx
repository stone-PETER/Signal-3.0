import React from "react";
import wave from "../../assets/green wave 3.jpg";

import "./Workshops.css"; 
const workshopsData = [
  {
    name: "Coming Soon...",
    description: "We’re unveiling something extraordinary soon.. Stay with us!",
  },
  {
    name: "Coming Soon...",
    description: "We’re unveiling something extraordinary soon.. Stay with us!",
  },
  {
    name: "Coming Soon...",
    description: "We’re unveiling something extraordinary soon.. Stay with us!",
  },
  // Add more workshops as needed
];

const Workshops = () => {
  return (
    <div className="workshops-container">
      <div className="wave-container">
        <img src={wave} alt="Wave" className="wave-image" />
        <h2 className="workshop-heading">Workshops</h2>
      </div>
      <div className="workshops">
        {workshopsData.map((workshop, index) => (
          <div key={index} className="workshop-card">
            <div className="workshop-card-inner">
              <div className="workshop-card-front">
                <h1 className="workshopName">{workshop.name}</h1>
              </div>
              <div className="workshop-card-back">
                <h4 className="workshop-topic">Topics</h4>
                <p className="workshop-description">{workshop.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="wavegif">

      </div>
    </div>
  );
};

export default Workshops;
