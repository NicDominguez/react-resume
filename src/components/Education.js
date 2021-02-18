import React from "react";

import { degreeData } from "../data.js";

function Degree({ degree }) {
  const {
    startDate,
    endDate,
    degreeType,
    major,
    location,
    schoolName
  } = degree;
  return (
    <div className="degree">
      <div className="sub-title-bar">
        <h3>{`${degreeType} in ${major}`}</h3>
        <p className="date">{`${startDate} - ${endDate}`}</p>
        <h4>{`${schoolName}, ${location}`}</h4>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <div className="education">
      <h1>Education</h1>
      {degreeData.map((degree, index) => {
        return <Degree key={index} degree={degree} />;
      })}
    </div>
  );
}
