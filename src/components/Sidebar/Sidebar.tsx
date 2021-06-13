import { FC } from "react";
import { Aside } from "../../theme/globalStyle";
import { SidebarTitle, CategoryWrapper, CategoryItem } from "./SideBar.element";

const categories = [
  { id: 5, name: "boxes" },
  { id: 15, name: "clothes" },
  { id: 1, name: "hats" },
  { id: 14, name: "sinks" },
  { id: 2, name: "space" },
  { id: 4, name: "sunglasses" },
  { id: 7, name: "ties" },
];

const SideBar: FC = () => {
  return (
    <Aside>
      <SidebarTitle>Categories</SidebarTitle>
      <CategoryWrapper>
        {categories &&
          categories.map((item: ICatCategory) => (
            <CategoryItem key={item.id}>{item.name}</CategoryItem>
          ))}
      </CategoryWrapper>
    </Aside>
  );
};

export default SideBar;
