"use client";

import Footer from "@/app/components/footer";
import { useSmoothScroll } from "@/hooks/scroll-animation";
import { Divider } from "@nextui-org/react";
import React from "react";

const Sidebar = () => {
  const scrollToElement = useSmoothScroll();

  const handleClick =
    (elementId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      scrollToElement(elementId);
    };

  return (
    <div className="h-auto lg:min-h-screen flex flex-col p-6 md:p-10 lg:p-20 gap-12">
      <section className="flex flex-col flex-1 gap-8">
        <h1 className="text-white text-4xl font-normal">
          Hi I am Iresh.
          <span className="text-5xl animate-wave inline-block">👋</span>
        </h1>
        <h2 className="text-white text-2xl font-normal">Front End Engineer</h2>
        <h3 className="text-white text-xl font-normal">
          I build accessible, pixel-perfect digital experiences for the web.
        </h3>
      </section>

      <section className="flex-col gap-6 hidden lg:visible lg:flex flex-1">
        <a
          href="#about"
          onClick={handleClick("about")}
          className="hover:text-blue-400 hover:scale-110"
        >
          About
        </a>
        <a
          href="#experience"
          onClick={handleClick("experience")}
          className="hover:text-blue-400 hover:scale-110"
        >
          Experience
        </a>
        <a
          href="#education"
          onClick={handleClick("education")}
          className="flex flex-row items-center gap-5 transition-all duration-300 ease-in-out hover:text-blue-400 hover:scale-110 group"
        >
          <Divider className="group-hover:w-24 w-14 bg-white transition-all duration-300 group-hover:bg-blue-400" />
          Education
        </a>
        <a
          href="#projects"
          onClick={handleClick("projects")}
          className="hover:text-blue-400 hover:scale-110"
        >
          Projects
        </a>
      </section>

      <section className="flex flex-row lg:flex-col">
        <Footer />
      </section>
    </div>
  );
};

export default Sidebar;
