import styled, { css } from "styled-components";
import { theme } from "./../../theme";

export const Button = styled.button`
  border: none;
  color: ${(p) => (p.color ? p.color : `${theme.color.white}`)};
  background-color: ${(p) => (p.bg ? p.bg : `${theme.color.deepblue}`)};

  border-radius: 8px;
  padding: 6px 10px;
  cursor: pointer;
  transition: ${theme.transition.default};

  &:hover {
    box-shadow: ${theme.boxShadow.button};
  }

  ${(p) =>
    p.size === "large" &&
    css`
      width: 200px;
      height: 40px;
      font-size: 1.6rem;
      font-family: TheJamsil3Regular;
    `}
  ${(p) =>
    p.size === "medium" &&
    css`
      width: 100px;
    `}
    ${(p) =>
    p.size === "small" &&
    css`
      width: 50px;
    `};
`;
