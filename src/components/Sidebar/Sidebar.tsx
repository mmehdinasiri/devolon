import { FC } from "react";
import { useSelector } from "react-redux";
import { Aside, Loading } from "src/theme/globalStyle";
import { RootState } from "src/store";
import { SidebarTitle, CategoryWrapper, CategoryItem } from "./SideBar.element";

const SideBar: FC = () => {
  const categories = useSelector((state: RootState) => state.categories);
  return (
    <Aside>
      {categories.loading && <Loading />}
      <SidebarTitle>Categories</SidebarTitle>
      <CategoryWrapper>
        {categories.categories &&
          categories.categories.map((item: ICatCategory) => (
            <CategoryItem key={item.id}>{item.name}</CategoryItem>
          ))}
      </CategoryWrapper>
    </Aside>
  );
};

export default SideBar;
