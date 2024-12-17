"use client";

import { Chip } from "@nextui-org/react";
import React from "react";

const ChipComponent = ({ tag }: { tag: string }) => {
  return (
    <Chip className="text-white text-md lg:text-xl px-4 py-2 bg-slate-700 opacity-80 mx-4">
      {tag}
    </Chip>
  );
};

export default ChipComponent;
