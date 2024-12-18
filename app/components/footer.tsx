import React from "react";
import { SocialLinks } from "../constants/social-links";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex gap-4 flex-row lg:flex-col">
      {SocialLinks.map((socialLinks) => (
        <Link
          href={socialLinks.url}
          key={socialLinks.name}
          aria-label={socialLinks.name}
        >
          {socialLinks.icon}
        </Link>
      ))}
    </div>
  );
};

export default Footer;
