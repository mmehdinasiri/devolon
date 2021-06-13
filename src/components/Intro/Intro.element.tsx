import { Link } from "react-router-dom";
import styled from "styled-components";

export const H1 = styled.h1`
  margin: 4rem 0 2rem;
  font-size: 34px;
`;
export const Hint = styled.h3`
  color: ${({ theme }) => theme.color.textLight};
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  font-weight: bold;
  color: white;
  padding: 1rem 2rem;
  display: inline-block;
  margin-top: 1rem;
  border-radius: 2rem;
  transition: all 100ms ease-in-out;
  background-color: ${({ theme }) => theme.color.primaryDark};
  box-shadow: 0 3px 8px 0 rgb(0 0 0 / 40%);
  &:hover {
    background-color: ${({ theme }) => theme.color.primary};
  }
`;
