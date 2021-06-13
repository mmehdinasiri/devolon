import styled from "styled-components";
import { device } from "../../theme/globalStyle";

export const CatContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  padding: 1rem;

  @media ${device.mobile} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media ${device.desktop} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media ${device.desktopL} {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;
