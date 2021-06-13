import { FC, useEffect } from "react";
import { CatList, Layout } from "src/components";
import { useAppDispatch } from "src/store";
import { getCategories } from "src/store/actions/category.action";

const Cats: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <Layout>
      <CatList />
    </Layout>
  );
};

export default Cats;
