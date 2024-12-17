import { Github, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="flex gap-4 flex-row lg:flex-col">
      <Github />
      <Linkedin />
      <Twitter />
    </div>
  );
};

export default Footer;
