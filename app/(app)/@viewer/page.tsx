import React from "react";
import { About } from "./component/about";
import { Education } from "./component/education";

const Viewer = () => {
  return (
    <div className="flex flex-col gap-8 overflow-y-auto p-6 md:p-10 lg:p-20">
      <About />
      <Education />
    </div>
  );
};

export default Viewer;
