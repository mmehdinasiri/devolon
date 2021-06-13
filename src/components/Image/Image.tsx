import { FC, useState } from "react";
import { StyledImage, StyledImageContent } from "./image.element";

interface IImagePops {
  src: string;
  alt?: string;
  ratio: string;
  radiusTop?: boolean;
}

const Image: FC<IImagePops> = ({ src, alt, ratio, radiusTop }) => {
  const [imageError, setImageError] = useState<boolean>(false);
  return (
    <StyledImage
      className={`ratio-box-${ratio} ${radiusTop ? "border-radius-top" : ""}`}
    >
      <StyledImageContent>
        {!src || imageError ? (
          <img
            src="images/image-placeholder.jpg"
            alt="placeholder"
            style={{ width: "100%" }}
          />
        ) : (
          <img
            src={src}
            alt={alt}
            style={{ width: "100%" }}
            onError={() => {
              setImageError(true);
            }}
          />
        )}
      </StyledImageContent>
    </StyledImage>
  );
};

export default Image;
