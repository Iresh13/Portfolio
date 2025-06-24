import React from "react";
import { Experience } from "@/sanity.types";
import { Title } from "@/app/components/title";
import ChipComponent from "@/app/components/chip";
import { GlassmorphismCard } from "./glass-morphism-card";
import { fetchExperience } from "@/client/routes/experience.route";
import Link from "next/link";
import { ArrowRight, MoveUpRight } from "lucide-react";

export async function ExperienceView() {
  const data: Experience[] = await fetchExperience();

  return (
    <div className="flex flex-col gap-14 lg:gap-16" id="experience">
      <Title title="Experience" />

      {data?.map((experience: Experience) => {
        return (
          <Link href={experience.Url as string} key={experience.workplace}>
            <GlassmorphismCard className="cursor-pointer group">
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-10">
                <p className="text-gray-300 text-sm lg:text-base italic font-light min-w-44">
                  {experience.start_date} - {experience.end_date}
                </p>

                <div className="flex flex-col gap-8 lg:gap-10">
                  <div className="flex flex-col gap-2">
                    <section className="flex flex-row gap-3">
                      <p className="text-slate-200 text-md lg:text-base group-hover:text-slate-200 transition-colors">
                        {experience.position},{" "}
                        <span className="font-bold">
                          {experience.workplace}
                        </span>
                      </p>
                      <MoveUpRight className="text-sm transform group-hover:scale-125 transition-all duration-300" />
                    </section>
                    <p className="text-slate-300 text-sm lg:text-base group-hover:text-slate-200 transition-colors">
                      {experience.location}
                    </p>

                    <p className="text-slate-300 text-lg lg:text-sm group-hover:text-slate-200 transition-colors">
                      {experience.description_content}
                    </p>
                  </div>

                  <div className="flex flex-row gap-4 flex-wrap">
                    {experience.technologies_used?.map(
                      (technology: Record<string, string>) => {
                        return (
                          <ChipComponent
                            key={technology.built_with}
                            tag={technology.built_with}
                          />
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </GlassmorphismCard>
          </Link>
        );
      })}

      <Link
        href={"/iresh.pdf"}
        className="group flex gap-4 items-center underline hover:animate-arrow"
      >
        <p className="text-slate-400 text-sm lg:text-base group-hover:text-slate-200 transition-colors">
          View Complete Resume
        </p>
        <ArrowRight className="group-hover:scale-125" />
      </Link>
    </div>
  );
}
