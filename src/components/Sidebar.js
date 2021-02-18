import React from "react";

import Skills from "./Skills";
import Certifications from "./Certifications";
import AdditionalEducation from "./AdditionialEducation";
import Languages from "./Languages";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Skills />
      <Certifications />
      <AdditionalEducation />
      <Languages />
    </div>
  );
}
