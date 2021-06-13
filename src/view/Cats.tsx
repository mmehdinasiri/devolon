import { FC, useEffect } from "react";
import { CatList, Layout } from "../components";
import { useAppDispatch } from "../store";
import { getCategories } from "../store/actions/category.action";

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
