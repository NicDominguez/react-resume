import React from "react";

import { additionalEducationData } from "../data.js";

export default function AdditionalEducation() {
  return (
    <div className="additional-education">
      <h1>Additional Education</h1>
      <ul>
        {additionalEducationData.map((program, index) => {
          return (
            <li key={index}>
              <p>{`${program.title} - ${program.organization}`}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
