import styled from "styled-components";

export const SidebarTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg}px;
  color: ${({ theme }) => theme.color.textLight};
  padding: 1rem;
`;

export const CategoryWrapper = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
`;
export const CategoryItem = styled.li`
  padding: 0.5rem 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  color: ${({ theme }) => theme.color.text};
  cursor: pointer;
  transition: all 100ms ease-in-out;
  text-transform: capitalize;

  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.color.primary};
    color: white;
  }
`;
