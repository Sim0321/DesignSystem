import styled, { css } from "styled-components";
import { theme } from "./../../theme";

export const Input = styled.input`
  outline: none;
  height: 30px;
  padding: 0 8px;
  border-radius: 8px;
  border: 1px solid ${theme.color.gray};

  /* color: ${(p) => (p.color ? p.color : `${theme.color.white}`)}; */
  /* background-color: ${(p) => (p.bg ? p.bg : `${theme.color.deepblue}`)}; */

  ${(p) =>
    p.size === "super" &&
    css`
      width: 280px;
    `}

  ${(p) =>
    p.size === "large" &&
    css`
      width: 250px;
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
