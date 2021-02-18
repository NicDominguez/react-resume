import React from "react";

import { summaryData } from "../data.js";

export default function Summary() {
  return (
    <div className="summary">
      <h1>Summary</h1>
      <p>{summaryData}</p>
    </div>
  );
}
