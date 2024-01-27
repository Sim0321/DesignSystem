import styled from "styled-components";
import { theme } from "../../theme";

export const CilpContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 5px;
  top: 5px;

  svg {
    width: 30px;
    height: 30px;
    opacity: 0;
    transition: ${theme.transition.default};
  }
`;
