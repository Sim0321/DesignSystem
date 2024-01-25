import styled from "styled-components";
import { theme } from "../theme";

export const RegisterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const HandleComponentBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HandleStyleBox = styled.form`
  flex: 1;
  background-color: #e3dddd;
  padding: 15px 20px;
  border-radius: 12px;
  .category-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
    .category {
      flex: 1; //반응형 할 때 따로 수정
      height: 30px;
      border: 1px solid ${theme.color.main};
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      background-color: ${theme.color.main};
      color: #000;
      transition: ${theme.transition.default};
      font-family: TheJamsil2Light;
      cursor: pointer;
      &:hover {
        transform: scale(1.05);
        background-color: ${theme.color.sub};
      }
    }
  }
`;
