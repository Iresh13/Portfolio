"use client";

import React, { ReactNode } from "react";

export function GlassmorphismCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`${className} hover:shadow-lg hover:border hover:border-slate-600 hover:bg-slate-600 hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur hover:bg-opacity-10 hover:backdrop-saturate-100 hover:backdrop-contrast-100 hover:p-2 hover:md:p-3 hover:lg:p-10 rounded-lg`}
    >
      <div className="hover:p-6 transition-transform duration-300 ease-in-out hover:scale-105">
        {children}
      </div>
    </div>
  );
}
