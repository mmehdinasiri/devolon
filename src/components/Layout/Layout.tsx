import { FC } from "react";
import {
  Container,
  ContainerWithSidebar,
  MainContent,
} from "src/theme/globalStyle";
import { Navbar, Sidebar } from "..";

interface ILayoutProps {
  children: React.ReactNode;
  hasSidebar?: boolean;
}

const Layout: FC<ILayoutProps> = ({ children, hasSidebar }) => {
  return (
    <>
      <Navbar />
      {hasSidebar && <Sidebar />}

      <MainContent hasSidebar={hasSidebar}>
        {hasSidebar ? (
          <ContainerWithSidebar>{children}</ContainerWithSidebar>
        ) : (
          <Container>{children}</Container>
        )}
      </MainContent>
    </>
  );
};

export default Layout;
