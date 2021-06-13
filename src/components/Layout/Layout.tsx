import { FC } from "react";
import { Navbar, Sidebar } from "..";
import { Container, MainContent } from "../../theme/globalStyle";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <MainContent>
        <Container>{children}</Container>
      </MainContent>
    </>
  );
};

export default Layout;
