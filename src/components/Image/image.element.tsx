import styled from "styled-components";

export const StyledImage = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.color.bodyBg};
  &.ratio-box-1-1 {
    padding-top: 100%;
  }
  &.ratio-box-2-1 {
    padding-top: 50%;
  }
  &.ratio-box-3-2 {
    padding-top: 66.66%;
  }
  &.ratio-box-4-3 {
    padding-top: 75%;
  }
  &.ratio-box-5-4 {
    padding-top: 80%;
  }
  &.ratio-box-8-5 {
    padding-top: 62.5%;
  }
  &.ratio-box-16-9 {
    padding-top: 56.25%;
  }
  &.border-radius-top {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
`;

export const StyledImageContent = styled.div`
  text-align: center;
  position: absolute;
  width: 100%;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  img {
    width: 100%;
  }
`;

export const Skeleton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.skeletonBg};
  z-index: 10;
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 11;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgb(255 255 255 / 0) 0,
      rgb(255 255 255 / 0.2) 20%,
      rgb(255 255 255 / 0.5) 60%,
      rgb(255 255 255 / 0)
    );
    animation: shimmer 2s infinite;
    content: "";
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;
