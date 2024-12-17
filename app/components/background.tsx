"use client";

import React, { ReactNode, useState, useEffect } from "react";

const Background = ({ children }: { children: ReactNode }) => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);

    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("resize", updateWindowSize);

    updateWindowSize();

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  const gradientStyle = isClient
    ? {
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(219, 234, 254, 0.1), rgba(17, 24, 39, 0.5), rgba(17, 24, 39, 1))`,
        transform: `translate(${
          (mousePosition.x - windowSize.width / 2) / 20
        }px, ${(mousePosition.y - windowSize.height / 2) / 20}px)`,
      }
    : {};

  return (
    <div className="relative min-h-screen w-full bg-slate-900 overscroll-none">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/10 via-gray-900/50 to-gray-900 pointer-events-none transition-transform duration-300 ease-out"
        style={gradientStyle}
      />
      <div className="relative z-10 pt-5">{children}</div>
    </div>
  );
};

export default Background;
