import { ReactNode } from "react";
import Background from "../components/background";
import Footer from "../components/nav-footer";

const Layout = ({
  sidebar,
  viewer,
}: {
  sidebar: ReactNode;
  viewer: ReactNode;
}) => {
  return (
    <Background>
      <div className="flex lg:h-screen overflow-scroll flex-col ">
        <div className="flex overflow-hidden flex-col lg:flex-row gap-20 lg:gap-0">
          <div className="md:min-w-[520px]">{sidebar}</div>
          <div className="flex flex-col gap-4">{viewer}</div>
        </div>

        <Footer />
      </div>
    </Background>
  );
};

export default Layout;
