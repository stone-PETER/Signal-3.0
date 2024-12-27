import React from "react";
import wave from "../../assets/green wave 3.jpg";

import "./Workshops.css"; 
const workshopsData = [
  {
    name: "Workshop 1",
    description: "Description for Workshop 1",
  },
  {
    name: "Workshop 2",
    description: "Description for Workshop 2",
  },
  {
    name: "Workshop 3",
    description: "Description for Workshop 3",
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
