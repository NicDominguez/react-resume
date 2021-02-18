import React from "react";

import { skillsData } from "../data.js";

export default function Summary() {
  const { clientSide, serverSide, design, business } = skillsData;

  return (
    <div className="skills">
      <h1>Skills & Technologies</h1>
      <div className="skill-category">
        <h2>Client-side</h2>
        <ul>
          {clientSide.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      </div>
      <div className="skill-category">
        <h2>Server-side</h2>
        <ul>
          {serverSide.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      </div>
      <div className="skill-category">
        <h2>Design</h2>
        <ul>
          {design.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      </div>
      <div className="skill-category">
        <h2>Business & Communication</h2>
        <ul>
          {business.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
