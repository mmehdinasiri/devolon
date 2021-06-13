import { FC } from "react";
import { Navbar } from "..";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
