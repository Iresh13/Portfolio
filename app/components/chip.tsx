"use client";

import { Chip } from "@nextui-org/react";
import React from "react";

const ChipComponent = ({
  tag,
  className,
}: {
  tag: string;
  className?: string;
}) => {
  return (
    <Chip
      className={`text-slate-100 text-md lg:text-xl px-4 py-2 bg-slate-700 opacity-80 mx-4 ${className}`}
    >
      {tag}
    </Chip>
  );
};

export default ChipComponent;
