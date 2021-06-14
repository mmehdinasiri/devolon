import { FC, useState } from "react";
import { Skeleton, StyledImage, StyledImageContent } from "./image.element";

interface IImagePops {
  src: string;
  alt?: string;
  ratio: string;
  radiusTop?: boolean;
}

const Image: FC<IImagePops> = ({ src, alt, ratio, radiusTop }) => {
  const [imageError, setImageError] = useState<boolean>(false);
  const [imageLoad, setImageLoad] = useState<boolean>(false);
  return (
    <StyledImage
      className={`ratio-box-${ratio} ${radiusTop ? "border-radius-top" : ""}`}
    >
      {!imageLoad && <Skeleton />}
      <StyledImageContent>
        <img
          src={imageError ? "images/image-placeholder.jpg" : src}
          alt={alt}
          style={{ width: "100%" }}
          onError={() => {
            setImageError(true);
          }}
          data-testid="image"
          onLoad={() => {
            setImageLoad(true);
          }}
        />
      </StyledImageContent>
    </StyledImage>
  );
};

export default Image;
