import { FC } from "react";
import { CatCard as StyledCatCard, CatCardTitle } from "./CatCard.element";

interface ICatCardProps {
  catImg: string;
  catId: string;
}
const CatCard: FC<ICatCardProps> = ({ catImg, catId }) => {
  return (
    <StyledCatCard>
      <img src={catImg} alt="catImage" />
      <CatCardTitle>Cat Id: {catId}</CatCardTitle>
    </StyledCatCard>
  );
};

export default CatCard;
