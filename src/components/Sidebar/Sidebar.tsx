import { FC } from "react";
import { useSelector } from "react-redux";
import { Aside, Loading } from "src/theme/globalStyle";
import { RootState, useAppDispatch } from "src/store";
import { resetCateList } from "src/store/reducer/cats.reducer";
import { getCats } from "src/store/actions/cats.action";
import { updateSelectedCategory } from "src/store/reducer/selectedCategory.reducer";
import { SidebarTitle, CategoryList, CategoryItem } from "./SideBar.element";

const SideBar: FC = () => {
  const dispatch = useAppDispatch();
  const categoriesStore = useSelector((state: RootState) => state.categories);
  const selectedCategory = useSelector(
    (state: RootState) => state.selectedCategory
  );

  const handelSelectCategory = (catObj: ICatCategory) => {
    dispatch(resetCateList());
    dispatch(getCats({ category: catObj.id, page: 0 }));
    dispatch(updateSelectedCategory(catObj));
  };
  return (
    <Aside>
      {categoriesStore.loading && <Loading />}
      <SidebarTitle data-testid="sidebar-title">Categories</SidebarTitle>
      <CategoryList>
        {categoriesStore.categories &&
          categoriesStore.categories.map((item: ICatCategory) => (
            <CategoryItem
              data-testid="sidebar-item"
              className={selectedCategory.id === item.id ? "active" : ""}
              key={item.id}
              onClick={() => handelSelectCategory(item)}
            >
              {item.name}
            </CategoryItem>
          ))}
      </CategoryList>
    </Aside>
  );
};

export default SideBar;
