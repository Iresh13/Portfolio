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
      className={`${className} hover:lg:shadow-lg hover:lg:border hover:lg:border-slate-600 hover:lg:bg-slate-600 hover:lg:bg-clip-padding hover:lg:backdrop-filter hover:lg:backdrop-blur hover:lg:bg-opacity-10 hover:lg:backdrop-saturate-100 hover:lg:backdrop-contrast-100 hover:lg:p-10 rounded-lg`}
    >
      <div className="hover:lg:p-6 transition-transform duration-300 ease-in-out hover:scale-105">
        {children}
      </div>
    </div>
  );
}
