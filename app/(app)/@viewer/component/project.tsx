import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/sanity.types";
import { Title } from "@/app/components/title";
import ChipComponent from "@/app/components/chip";
import { GlassmorphismCard } from "./glass-morphism-card";
import { fetchProject } from "@/client/routes/project.route";
import { ArrowRight } from "lucide-react";

export async function ProjectView() {
  const data = await fetchProject();

  return (
    <div className="flex flex-col gap-14 lg:gap-16" id="projects">
      <Title title="Projects" />

      {data?.map((project: Project) => {
        return (
          <Fragment key={project.projectName}>
            {project.visible && (
              <GlassmorphismCard className="group">
                <Link href={(project.link as string) || ""}>
                  <div className="flex lg:flex-row lg:gap-10 flex-col-reverse gap-5">
                    <Image
                      src={project.image_url as string}
                      height={50}
                      width={100}
                      className="object-contain size-fit shadow-sm rounded-sm group-hover:border-2  group-hover:border-slate-600 border-slate-700"
                      alt={project.preview?.attribution as string}
                    />

                    <div className="flex flex-col gap-5 lg:gap-10">
                      <section className="flex flex-col gap-2">
                        <p className="text-slate-200 text-xl lg:text-2xl group-hover:text-slate-200 transition-colors">
                          {project.projectName}
                        </p>

                        <p className="text-slate-300 text-lg lg:text-xl group-hover:text-slate-200 transition-colors">
                          {project.platform}
                        </p>

                        <p className="text-slate-300 text-lg lg:text-xl group-hover:text-slate-200 transition-colors line-clamp-8 lg:line-clamp-6">
                          {project.description_content}
                        </p>
                      </section>

                      <div className="flex flex-row gap-4 flex-wrap">
                        {project.technologies_used?.map(
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
                </Link>
              </GlassmorphismCard>
            )}
          </Fragment>
        );
      })}

      <Link
        href={"/projects"}
        className="group flex gap-4 items-center underline hover:animate-arrow"
      >
        <p className="text-slate-400 text-xl lg:text-2xl group-hover:text-slate-200 transition-colors">
          See All Projects
        </p>
        <ArrowRight className="group-hover:scale-125" />
      </Link>
    </div>
  );
}
