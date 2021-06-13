import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "src/store";
import { getCats } from "src/store/actions/cats.action";
import { Loading } from "src/theme/globalStyle";
import { Button, CatCard } from "..";
import { CatCategory, CatContainer } from "./CatList.element";

const CatList: FC = () => {
  const [page, setPage] = useState<number>(0);
  const dispatch = useAppDispatch();
  const catsStore = useSelector((state: RootState) => state.cats);
  const selectedCategoryState = useSelector(
    (state: RootState) => state.selectedCategory
  );

  useEffect(() => {
    if (selectedCategoryState.id && page > 0) {
      dispatch(getCats({ category: selectedCategoryState.id, page }));
    }
  }, [page]);

  useEffect(() => {
    setPage(0);
  }, [selectedCategoryState]);
  return (
    <div>
      {catsStore.loading && <Loading />}
      <CatCategory>{selectedCategoryState.name}</CatCategory>
      <CatContainer>
        {catsStore.cats &&
          catsStore.cats.map((catItem: ICat) => (
            <CatCard key={catItem.id} catImg={catItem.url} catId={catItem.id} />
          ))}
      </CatContainer>
      {catsStore.cats.length > 0 && (
        <Button label="Load more" clickHandler={() => setPage(page + 1)} />
      )}
    </div>
  );
};

export default CatList;
