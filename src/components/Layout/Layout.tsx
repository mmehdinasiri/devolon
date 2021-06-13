import { FC } from "react";
import { Navbar, Sidebar } from "..";
import { MainContent } from "../../theme/globalStyle";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <MainContent>{children}</MainContent>
    </div>
  );
};

export default Layout;
