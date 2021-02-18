import React from "react";

import { employmentData } from "../data.js";

function Job({ job }) {
  const {
    startDate,
    endDate,
    jobTitle,
    employer,
    location,
    role,
    accomplishments
  } = job;
  return (
    <div className="job">
      <div className="sub-title-bar">
        <h2>{jobTitle}</h2>
        <p className="date">{`${startDate} - ${endDate}`}</p>
        <h3>{`${employer}, ${location}`}</h3>
      </div>
      <p className="employment-role">{role}</p>
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
      <h1>Employment History</h1>
      {employmentData.map((job, index) => {
        return <Job key={index} job={job} />;
      })}
    </div>
  );
}
