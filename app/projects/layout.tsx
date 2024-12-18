import { ReactNode } from "react";
import Background from "../components/background";
import Footer from "../components/nav-footer";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Background>
      <div className="flex lg:h-screen overflow-scroll flex-col p-4 no-scrollbar">
        <section className="p-8 flex flex-col gap-5">
          <Link href="./">
            <ArrowLeft className="hover:animate-arrow-left" />
          </Link>

          <h3 className="text-slate-300 text-3xl underline font-semibold ">
            My Projects
          </h3>
        </section>

        {children}

        <section className="pt-8">
          <Footer />
        </section>
      </div>
    </Background>
  );
};

export default Layout;
