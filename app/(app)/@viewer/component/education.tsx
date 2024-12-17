import { Title } from "@/app/components/title";
import { fetchEducation } from "@/client/routes/education.route";
import { Education } from "@/sanity.types";

import React from "react";

export async function EducationView() {
  const data = await fetchEducation();

  return (
    <div className="flex flex-col gap-6 lg:gap-8" id="education">
      <Title title="Education" />

      {data?.map((education: Education) => {
        return (
          <div
            key={data.institution}
            className="border-slate-500 px-4 py-3 border-2 opacity-100 lg:opacity-55 hover:opacity-100 rounded-lg"
          >
            <p className="text-white text-lg lg:text-2xl ">
              {education.institution}
            </p>

            <p className="text-white text-md lg:text-xl">{education.degree}</p>

            <p className="text-gray-300 text-md lg:text-lg italic font-light">
              {education.start_date} - {education.end_date}
            </p>

            <p className="text-white text-md lg:text-xl">
              {education.location}
            </p>
          </div>
        );
      })}
    </div>
  );
}
