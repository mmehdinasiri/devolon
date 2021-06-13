import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { CatList, Layout } from "src/components";
import useDidMountEffect from "src/hooks/useDidMountEffect";
import { RootState, useAppDispatch } from "src/store";
import { getCategories } from "src/store/actions/category.action";
import { getCats } from "src/store/actions/cats.action";
import { resetCateList } from "src/store/reducer/cats.reducer";
import { updateSelectedCategory } from "src/store/reducer/selectedCategory.reducer";

const Cats: FC = () => {
  const dispatch = useAppDispatch();
  const categoriesStore = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
    return () => {
      dispatch(resetCateList());
    };
  }, []);

  useDidMountEffect(() => {
    dispatch(getCats({ category: categoriesStore.categories[0].id, page: 0 }));
    dispatch(updateSelectedCategory(categoriesStore.categories[0]));
  }, [categoriesStore.categories]);
  return (
    <Layout hasSidebar>
      <CatList />
    </Layout>
  );
};

export default Cats;
