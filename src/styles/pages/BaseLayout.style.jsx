import styled from "styled-components";
import { theme } from "../theme";

export const MainWrapper = styled.main`
  display: flex;
`;

export const ComponentWrapper = styled.div`
  width: calc(100% - 260px);
  height: calc(100vh - 80px);
  padding: 20px;
  margin-right: 20px;
  background-color: ${theme.color.backGround};
  border-radius: 8px 8px 0 0;

  .componentContainer {
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 24px;
    border-radius: 8px;
  }
`;
