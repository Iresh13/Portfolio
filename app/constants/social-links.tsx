import { Github, Link2Icon, Linkedin, Twitter } from "lucide-react";

export const SocialLinks = [
  {
    name: "Github",
    url: "https://github.com/Iresh13",
    icon: (
      <Github className="hover:animate-bounce ease-linear hover:scale-150" />
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/iresh13/",
    icon: (
      <Linkedin className="hover:animate-bounce ease-linear hover:scale-150" />
    ),
  },
  {
    name: "Twitter",
    url: "https://x.com/ireshmaharjan",
    icon: (
      <Twitter className="hover:animate-bounce ease-linear hover:scale-150" />
    ),
  },
  {
    name: "Notion",
    url: "https://tin-gopher-32f.notion.site/Iresh-15e6cbd65a1780f59a96e5ac96a3ccdf",
    icon: (
      <Link2Icon className="hover:animate-bounce ease-linear hover:scale-150" />
    ),
  },
];
