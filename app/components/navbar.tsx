"use client";

import { useSmoothScroll } from "@/hooks/scroll-animation";
import { Divider } from "@nextui-org/react";
import React, { Fragment, useEffect, useState } from "react";
import { NavLinks } from "../constants/nav-links";
import { clsx } from "clsx";

export function Navbar() {
  const [hash, setHash] = useState<string>("");

  useEffect(() => {
    const currentHash = window.location.hash;
    setHash(currentHash);

    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        block: "start",
        behavior: "smooth",
        inline: "end",
      });
    }
  };

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
            className={clsx(
              "flex flex-row items-center gap-5 transition-all duration-300 ease-in-out hover:text-blue-400 hover:scale-110 group text-xl",
              {
                "text-slate-200": navLinks.link !== hash,
                "text-blue-400": navLinks.link === hash,
              }
            )}
          >
            <Divider
              className={clsx(
                "group-hover:w-24 w-14 transition-all duration-300 group-hover:bg-blue-400 ",
                {
                  "bg-slate-200": navLinks.link !== hash,
                  "bg-blue-400": navLinks.link === hash,
                }
              )}
            />
            {navLinks.name}
          </a>
        );
      })}
    </Fragment>
  );
}
