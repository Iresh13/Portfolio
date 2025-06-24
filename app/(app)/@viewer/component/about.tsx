import { Title } from "@/app/components/title";
import { fetchIntroduction } from "@/client/routes/introduction.route";
import { Introduction } from "@/sanity.types";
import React from "react";

export async function AboutView() {
  const data: Introduction = await fetchIntroduction();

  return (
    <div id="about" className="flex flex-col gap-6 lg:gap-8">
      <Title title="About" />

      <h3 className="text-slate-100 md:text-slate-300 text-sm lg:text-base hover:text-slate-100 transition-colors">
        {data?.description_content}
      </h3>
    </div>
  );
}
