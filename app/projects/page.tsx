import React from "react";

import { fetchProject } from "@/client/routes/project.route";

import { Project } from "@/sanity.types";
import TableView from "./component.tsx/table";

const Projects = async () => {
  const data: Project[] = await fetchProject();

  return (
    <div className="flex flex-col gap-14 lg:gap-16" id="projects">
      <TableView data={data} />
    </div>
  );
};

export default Projects;
