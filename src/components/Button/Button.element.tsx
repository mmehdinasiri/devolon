import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 2rem;
  margin: auto;
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  padding: 0.5rem 1.5rem;
  background-color: ${({ theme }) => theme.color.primary};
  border-color: ${({ theme }) => theme.color.primary};
  color: white;
  cursor: pointer;
  font-family: sans-serif;
  border-style: none;
  transition: all 100ms ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.color.primaryDark};
  }
`;
