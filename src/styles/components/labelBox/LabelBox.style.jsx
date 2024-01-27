import styled from "styled-components";
import { theme } from "../../theme";

export const LabelBox = styled.div`
  display: flex;
  align-items: center;
  .svg-box {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    transition: ${theme.transition.default};
    svg {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
    &:hover {
      background-color: ${theme.color.main};
    }
  }
`;
