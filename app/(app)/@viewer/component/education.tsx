import { Title } from "@/app/components/title";
import { fetchEducation } from "@/client/routes/education.route";
import { Education } from "@/sanity.types";

import React from "react";
import { GlassmorphismCard } from "./glass-morphism-card";

export async function EducationView() {
  const data = await fetchEducation();

  return (
    <div className="flex flex-col gap-8 lg:gap-10" id="education">
      <Title title="Education" />

      {data?.map((education: Education) => {
        return (
          <GlassmorphismCard key={education.institution}>
            <p className="text-slate-200 text-md lg:text-base group-hover:text-slate-200 transition-colors">
              {education.institution}
            </p>

            <p className="text-slate-300 text-sm lg:text-base group-hover:text-slate-200 transition-colors">
              {education.degree}
            </p>

            <p className="text-slate-300 text-sm lg:text-base group-hover:text-slate-200 transition-colors">
              {education.start_date} - {education.end_date}
            </p>

            <p className="text-slate-300 text-sm lg:text-base group-hover:text-slate-200 transition-colors">
              {education.location}
            </p>
          </GlassmorphismCard>
        );
      })}
    </div>
  );
}
