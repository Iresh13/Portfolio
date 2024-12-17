import { ReactNode } from "react";
import Background from "../components/background";

const Layout = ({
  sidebar,
  viewer,
}: {
  sidebar: ReactNode;
  viewer: ReactNode;
}) => {
  return (
    <Background>
      <div className="flex lg:h-screen  overflow-scroll flex-col lg:flex-row">
        <div className="lg:min-w-[450px]">{sidebar}</div>
        <div className="flex flex-col gap-4">{viewer}</div>
      </div>
    </Background>
  );
};

export default Layout;
