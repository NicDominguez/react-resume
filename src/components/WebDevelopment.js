import React from "react";

import { webDevelopmentData } from "../data.js";

function Experience({ experience }) {
  const { startDate, endDate, program, school, accomplishments } = experience;
  return (
    <div className="job">
      <div className="sub-title-bar">
        <h2>{`${program}`}</h2>
        <p className="date">{`${startDate} - ${endDate}`}</p>
        <h3>{`${school}`}</h3>
      </div>
      <ul>
        {accomplishments.map((bullet, index) => {
          return <li key={index}>{bullet}</li>;
        })}
      </ul>
    </div>
  );
}

export default function Employment() {
  return (
    <div className="employment">
      <h1>Web Development Experience</h1>
      {webDevelopmentData.map((experience, index) => {
        return <Experience key={index} experience={experience} />;
      })}
    </div>
  );
}
