import { Title } from "@/app/components/title";
import { fetchIntroduction } from "@/client/routes/introduction.route";
import { Introduction } from "@/sanity.types";
import React from "react";

export async function AboutView() {
  const data: Introduction = await fetchIntroduction();

  return (
    <div id="about" className="flex flex-col gap-6 lg:gap-8">
      <Title title="About" />

      <h3 className="text-white text-md lg:text-xl font-normal">
        {data?.description_content}
      </h3>
    </div>
  );
}
