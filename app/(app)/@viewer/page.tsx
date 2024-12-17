import React from "react";
import { AboutView } from "./component/about";
import { EducationView } from "./component/education";
import { ExperienceView } from "./component/experience";

const Viewer = () => {
  return (
    <div className="flex flex-col gap-28 overflow-y-auto p-6 md:p-10 lg:p-20">
      <AboutView />

      <ExperienceView />

      <EducationView />

      <p className="text-slate-100 w-8/12">
        Loosely designed in <b>Figma</b> and coded in <b>Cursor</b> by yours
        truly. Built with <b>Next.js</b> and <b>Tailwind CSS</b>, <b>Sanity</b>,
        deployed with <b>Vercel</b>. All text used are in the <b>Sour Grummy</b>{" "}
        typeface.
      </p>
    </div>
  );
};

export default Viewer;
