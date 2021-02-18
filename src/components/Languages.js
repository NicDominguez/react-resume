import React from "react";

import { languagesData } from "../data.js";

export default function Languages() {
  return (
    <div className="languages">
      <h1>Languages</h1>
      <ul>
        {languagesData.map((language, index) => {
          return (
            <li key={index}>
              <p>{`${language.language} - ${language.level}`}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
