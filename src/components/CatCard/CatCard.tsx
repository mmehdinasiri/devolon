import { FC } from "react";
import { Image } from "..";
import { CatCard as StyledCatCard, CatCardTitle } from "./CatCard.element";

interface ICatCardProps {
  catImg: string;
  catId: string;
}
const CatCard: FC<ICatCardProps> = ({ catImg, catId }) => {
  return (
    <StyledCatCard>
      <Image src={catImg} alt="cat-image" ratio="4-3" radiusTop />
      <CatCardTitle data-testid="cardCatId">Cat Id: {catId}</CatCardTitle>
    </StyledCatCard>
  );
};

export default CatCard;
