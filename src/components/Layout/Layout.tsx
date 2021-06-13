import { FC } from "react";
import { Container, MainContent } from "src/theme/globalStyle";
import { Navbar, Sidebar } from "..";

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
