import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "src/store";
import { getCats } from "src/store/actions/cats.action";
import { Loading } from "src/theme/globalStyle";
import { Button, CatCard } from "..";
import { CatContainer } from "./CatList.element";

const CatList: FC = () => {
  const catsStore = useSelector((state: RootState) => state.cats);
  const [page, setPage] = useState<number>(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (catsStore.cats[0]) {
      const catId = catsStore.cats[0].categories[0].id;
      dispatch(getCats({ category: catId, page }));
    }
  }, [page]);

  useEffect(() => {
    setPage(0);
  }, [catsStore.cats[0]?.categories[0]?.id]);
  return (
    <div>
      {catsStore.loading && <Loading />}
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
