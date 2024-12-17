"use client";

import { useState, useEffect } from "react";

import React, { ReactNode } from "react";

const Background = ({ children }: { children: ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-gray-900 overscroll-none">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/10 via-gray-900/50 to-gray-900 pointer-events-none transition-transform duration-300 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(219, 234, 254, 0.1), rgba(17, 24, 39, 0.5), rgba(17, 24, 39, 1))`,
          transform: `translate(${
            (mousePosition.x - window.innerWidth / 2) / 20
          }px, ${(mousePosition.y - window.innerHeight / 2) / 20}px)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background;
