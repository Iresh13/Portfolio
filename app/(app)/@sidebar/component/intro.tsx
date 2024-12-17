import { fetchIntroduction } from "@/client/routes/introduction.route";
import React, { Fragment } from "react";

export async function Intro() {
  const data = await fetchIntroduction();

  return (
    <Fragment>
      <h1 className="text-white text-lg lg:text-4xl font-normal">
        {data.short_description} {"  "}
        <span className="text-lg lg:text-4xl  animate-wave inline-block">
          👋
        </span>
      </h1>
      <h2 className="text-white text-lg lg:text-3xl  font-normal">
        {data.position}
      </h2>
      <h3 className="text-white text-md lg:text-xl font-normal">
        {data.short_description}
      </h3>
    </Fragment>
  );
}
