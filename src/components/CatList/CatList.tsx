import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store";
import { Loading } from "src/theme/globalStyle";
import { CatCard } from "..";
import { CatContainer } from "./CatList.element";

const CatList: FC = () => {
  const catsStore = useSelector((state: RootState) => state.cats);
  return (
    <div>
      {catsStore.loading && <Loading />}
      <CatContainer>
        {catsStore.cats &&
          catsStore.cats.map((catItem: ICat) => (
            <CatCard key={catItem.id} catImg={catItem.url} catId={catItem.id} />
          ))}
      </CatContainer>
    </div>
  );
};

export default CatList;
