import React from "react";

import { certificationData } from "../data.js";

export default function Certification() {
  return (
    <div className="certification">
      <h1>Certifications</h1>
      <ul>
        {certificationData.map((certificate, index) => {
          return (
            <li key={index}>
              <p>{`${certificate.title} - ${certificate.granter}`}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
