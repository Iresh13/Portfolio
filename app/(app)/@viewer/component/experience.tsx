import ChipComponent from "@/app/components/chip";
import { Title } from "@/app/components/title";
import { fetchExperience } from "@/client/routes/experience.route";
import { Experience } from "@/sanity.types";

import React from "react";

export async function ExperienceView() {
  const data: Experience[] = await fetchExperience();

  return (
    <div className="flex flex-col gap-14 md:gap-20 lg:gap-12" id="experience">
      <Title title="Experience" />

      {data?.map((experience: Experience) => {
        return (
          <div
            key={experience.workplace}
            className="hover:bg-slate-800/50 hover:bg-opacity-20  hover:border-transparent hover:border-2 opacity-100 lg:opacity-55 hover:opacity-100 rounded-lg gap-5 flex flex-col hover:shadow-2xl p-0 md:p-4 lg:p-8"
          >
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-20">
              <p className="text-gray-300 text-md lg:text-lg italic font-light min-w-52">
                {experience.start_date} - {experience.end_date}
              </p>

              <div className="flex flex-col gap-2">
                <p className="text-white text-lg lg:text-2xl ">
                  {experience.workplace}, {experience.position}
                </p>
                <p className="text-white text-lg lg:text-2xl ">
                  {experience.location}
                </p>

                <p className="text-white text-md lg:text-xl">
                  {experience.description_content}
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                  {experience.technologies_used?.map((technology: any) => {
                    return (
                      <ChipComponent
                        key={technology.built_with}
                        tag={technology.built_with}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
