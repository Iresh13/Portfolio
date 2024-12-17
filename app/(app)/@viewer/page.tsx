import React from "react";
import { AboutView } from "./component/about";
import { EducationView } from "./component/education";

const Viewer = () => {
  return (
    <div className="flex flex-col gap-8 overflow-y-auto p-6 md:p-10 lg:p-20">
      <AboutView />
      <EducationView />
    </div>
  );
};

export default Viewer;
