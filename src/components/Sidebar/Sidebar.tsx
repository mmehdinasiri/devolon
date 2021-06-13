import { FC } from "react";
import { useSelector } from "react-redux";
import { Aside, Loading } from "src/theme/globalStyle";
import { RootState, useAppDispatch } from "src/store";
import { reset } from "src/store/reducer/cats.reducer";
import { getCats } from "src/store/actions/cats.action";
import { SidebarTitle, CategoryWrapper, CategoryItem } from "./SideBar.element";

const SideBar: FC = () => {
  const dispatch = useAppDispatch();
  const categoriesStore = useSelector((state: RootState) => state.categories);

  const handelSelectCategory = (id: number) => {
    dispatch(reset());
    dispatch(getCats({ category: id, page: 1 }));
  };
  return (
    <Aside>
      {categoriesStore.loading && <Loading />}
      <SidebarTitle>Categories</SidebarTitle>
      <CategoryWrapper>
        {categoriesStore.categories &&
          categoriesStore.categories.map((item: ICatCategory) => (
            <CategoryItem
              key={item.id}
              onClick={() => handelSelectCategory(item.id)}
            >
              {item.name}
            </CategoryItem>
          ))}
      </CategoryWrapper>
    </Aside>
  );
};

export default SideBar;
