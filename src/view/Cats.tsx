import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { CatList, Layout } from "src/components";
import { RootState, useAppDispatch } from "src/store";
import { getCategories } from "src/store/actions/category.action";
import { getCats } from "src/store/actions/cats.action";

const Cats: FC = () => {
  const dispatch = useAppDispatch();
  const categories = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (categories.categories[0]?.id) {
      dispatch(getCats({ category: categories.categories[0].id, page: 0 }));
    }
  }, [categories, dispatch]);
  return (
    <Layout hasSidebar>
      <CatList />
    </Layout>
  );
};

export default Cats;
