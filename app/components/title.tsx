import React, { ReactNode } from "react";

export function Title({ title }: { title: string }): ReactNode {
  return (
    <h3 className="text-white text-xl  lg:hidden underline font-semibold">
      {title}
    </h3>
  );
}
