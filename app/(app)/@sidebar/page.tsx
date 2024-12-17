import Footer from "@/app/components/footer";
import { Navbar } from "@/app/components/navbar";

import React from "react";
import { Intro } from "./component/intro";

const Sidebar = () => {
  return (
    <div className="h-auto lg:min-h-screen flex flex-col p-6 md:p-10 lg:p-20 gap-12">
      <section className="flex flex-col flex-1 lg:gap-5 gap-3">
        <Intro />
      </section>

      <section className="flex-col gap-2 hidden lg:visible lg:flex flex-1">
        <Navbar />
      </section>

      <section className="flex flex-row lg:flex-col">
        <Footer />
      </section>
    </div>
  );
};

export default Sidebar;
