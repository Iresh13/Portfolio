"use client";

import { useSmoothScroll } from "@/hooks/scroll-animation";
import { Divider } from "@nextui-org/react";
import React, { Fragment } from "react";
import { NavLinks } from "../constants/nav-links";

export function Navbar() {
  const scrollToElement = useSmoothScroll();

  const handleClick =
    (elementId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      scrollToElement(elementId);
    };

  return (
    <Fragment>
      {NavLinks.map((navLinks) => {
        return (
          <a
            key={navLinks.name}
            href={navLinks.link}
            onClick={handleClick(navLinks.href)}
            className="flex flex-row items-center gap-5 transition-all duration-300 ease-in-out hover:text-blue-400 hover:scale-110 group text-2xl text-slate-200 "
          >
            <Divider className="group-hover:w-24 w-14 bg-slate-200 transition-all duration-300 group-hover:bg-blue-400" />
            {navLinks.name}
          </a>
        );
      })}
    </Fragment>
  );
}
