import { fetchIntroduction } from "@/client/routes/introduction.route";
import React from "react";

const Viewer = async () => {
  const data = await fetchIntroduction();

  return (
    <div className="flex flex-col gap-10 overflow-y-auto p-6 md:p-10 lg:p-20">
      <p className="text-white text-xl font-normal" id="about">
        {data.name}
      </p>

      <p className="text-white text-xl font-normal" id="experience">
        {data.short_description}
      </p>

      <p className="text-white text-xl font-normal" id="education">
        {data.position}
      </p>

      <p className="text-white text-xl font-normal" id="projects">
        {data.description_content}
      </p>
    </div>
  );
};

export default Viewer;
