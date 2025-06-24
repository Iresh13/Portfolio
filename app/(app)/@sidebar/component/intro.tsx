import { fetchIntroduction } from "@/client/routes/introduction.route";
import { Introduction } from "@/sanity.types";
import React from "react";

export async function Intro() {
  const data: Introduction = await fetchIntroduction();

  return (
    <div className="group flex flex-col gap-5">
      <h1 className="text-slate-200 md:text-slate-300 text-3xl lg:text-5xl">
        {data?.name} {"  "}
        <span className="text-2xl lg:text-3xl animate-wave inline-block">
          👋
        </span>
      </h1>
      <h2 className="text-slate-300 text-xl lg:text-2xl group-hover:text-slate-200 transition-colors">
        {data?.position}
      </h2>
      <h3 className="text-slate-400 text-lg lg:text-xl group-hover:text-slate-200 transition-colors">
        {data?.short_description}
      </h3>
    </div>
  );
}
