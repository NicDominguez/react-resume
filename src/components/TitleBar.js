import React from "react";

import { generalData } from "../data.js";

export default function TitleBar() {
  const { name, role, email, location, phone, portfolio } = generalData;

  return (
    <div className="title-bar">
      <h1>{name}</h1>
      <h2>{role}</h2>
      <span>{email}</span>
      <span>{location}</span>
      <span>{phone}</span>
      <a rel="noreferrer" target="_blank" href="http://www.nicdominguez.dev">
        <span>{portfolio}</span>
      </a>
    </div>
  );
}
