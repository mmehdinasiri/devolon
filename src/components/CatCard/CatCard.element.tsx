import styled from "styled-components";

export const CatCard = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 16%);
`;
export const CatCardTitle = styled.h3`
  margin-top: 0.5rem;
  margin-bottom: 0;
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  color: ${({ theme }) => theme.color.text};
`;
